import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Cats } from './Cats';
import { CatContext } from './CatContext';
import { ICat } from './@types/cats.d';

function App() {
  const [cats, setCats] = useState<ICat[]>([
    {
      "id": 1,
      "name": "Romad",
      "color_id": 1,
      "favorite_food_id": 4,
      "image": "https://sharedmovieuniverse.files.wordpress.com/2020/06/rambo2.jpg"
    },

  ]);

  const gettersSetters = { cats, setCats };

  useEffect(() => {
    fetch('http://localhost:8082/cats')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCats(data)
      })
  }, [])


  return (
    // <CatContext.Provider value={{gettersSetters}}>
      <Cats />
    // </CatContext.Provider>

  );
}

export default App;
