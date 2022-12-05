export interface ICat { //interface like a contract-you can
  // "subscribe" to multiple. With types you can only have
  // it be ONE type. Type is stronger statement than interface
    id: number,
    name: string,
    color_id: number,
    favorite_food_id: number,
    image: string
  }

  // usually can define types directly in file unless exporting
  // to library

  // if not using jsx, don't have to use tsx files

  export type CatContextType = {
    cats: ICat[];
    // setCats: (cats: ICat[]) => void;
  };