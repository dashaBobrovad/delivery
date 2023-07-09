export interface ICategoriesProps {
  active: number;
  searchParams: URLSearchParams;
  setSearchParams: (newParams: URLSearchParams) => void;
}

export interface ICategoriesComponent {
  onActiveClick: (index: number) => void;
  active: number;
}
