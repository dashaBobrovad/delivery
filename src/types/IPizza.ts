import { EPizzaSizes } from "data/constants/pizza";


export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[] ;
  sizes: EPizzaSizes[];
  price: number;
  category: number;
  rating: number;
  count?: number;
  sum?: number;
}

export default IPizza;
