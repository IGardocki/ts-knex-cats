const express = require('express');
const app = express();
const port = 8082;
const environment = process.env.ENVIRONMENT || 'development'
const knex = require('knex')(require('../knexfile.js')[environment]);
const cors = require('cors');

// THESE ARE NEVER LOGGED
console.log('environment:', environment);
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
console.log('process.env:', process.env);
// from tutorial at https://gist.github.com/NigelEarle/80150ff1c50031e59b872baf0e474977
// const environment = process.env.ENVIRONMENT || 'development'
// const config = require('../knexfile.js')[environment];
// module.exports = require('knex')(config);

app.use(cors())
app.use(express.json())
// CRUD: create, read, update, delete

app.get('/', (req, res) => {
    res.send(`App up on port ${port}.`);
})

app.get('/cats', (req, res) => {
    knex('cat')
    .select('*')
    .then(cat =>{
        res.send(cat);
    })
})

app.post('/cats', (req, res) => {
    const newName= req.body.name;
    const new_color_id= req.body.color_id;
    const new_favorite_food_id= req.body.favorite_food_id;
    const new_image= req.body.image;

    knex('cat').insert(
        {name: newName,
        color_id: new_color_id,
        favorite_food_id: new_favorite_food_id,
        image: new_image
    })
    .then(res.send('New Cat Added!'))
})

app.delete('/cats/:id', (req, res) =>{
    const id = req.params.id;
    knex('cat').where({id}).del()
    .then(res.send('Your cat was deleted!'))
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
})