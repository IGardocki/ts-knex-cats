export interface ICat {
    id: number,
    name: string,
    color_id: number,
    favorite_food_id: number,
    image: string
  }

  export type CatContextType = {
    cats: ICat[];
    // saveTodo: (todo: ITodo) => void;
    // updateTodo: (id: number) => void;
  };