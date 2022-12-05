import { createContext } from "react";
import {CatContextType} from './@types/cats.d';

export const CatContext = createContext<CatContextType>({cats:[]});
