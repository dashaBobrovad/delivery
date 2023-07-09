export interface ISortProps {
  active: number;
  searchParams: URLSearchParams;
  setSearchParams: (newParams: URLSearchParams) => void;
}

export interface ISortComponent {
  active: number;
  open: boolean;
  toggleOpen: () => void;
  sortRef: any;
  onActiveClick: (index: number) => void;
}
