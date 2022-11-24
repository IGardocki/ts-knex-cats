import { useContext } from "react";
import { ICat, CatContextType } from "./@types/cats.d";
import { CatContext } from "./CatContext";

export const Cats = () => {

    // const {cats} = useContext(CatContext);
    // console.log(cats);

    const dummyCats: ICat[] = [
        {
            "id": 1,
            "name": "Romad",
            "color_id": 1,
            "favorite_food_id": 4,
            "image": "https://sharedmovieuniverse.files.wordpress.com/2020/06/rambo2.jpg"
          },
          {
            "id": 2,
            "name": "The Detective",
            "color_id": 3,
            "favorite_food_id": 3,
            "image": "https://wallpapercave.com/wp/wp5842483.jpg"
          }
    ]

    return (
        <>
            {dummyCats.map(cat => <div key={cat.name}>{cat.name}</div>)}
        </>

    )
}