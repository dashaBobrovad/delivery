import { useSearchParams } from "react-router-dom";


// params:category: index
function useChangeNav(params: any) {
  const [searchParams, setSearchParams] = useSearchParams();

//   function onActiveClick(index: number) {
    setSearchParams({...searchParams, params } as URLSearchParams);
//   }
}

export default useChangeNav;
