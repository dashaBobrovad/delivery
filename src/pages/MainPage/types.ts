import { IPizza } from "types";

export interface IMainPageComponent {
  activeFilter: number;
  activeSort: number;
  setSearchParams: () => void;
  searchParams: any;
  pizzasList: IPizza[];
  isLoaded: boolean;
}
