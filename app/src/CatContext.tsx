import { createContext } from "react";
import {ICat, CatContextType} from './@types/cats.d';

export const CatContext = createContext<CatContextType | null>(null);