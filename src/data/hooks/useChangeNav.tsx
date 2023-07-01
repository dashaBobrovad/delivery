import { createSearchParams, useNavigate } from "react-router-dom";

function useChangeNav(params: any) {
    const resParams = params; // TODO:
    const navigate = useNavigate();
    navigate({
        pathname: "/",
        search: `?${createSearchParams(resParams)}`,
      });
  }
  
  export default useChangeNav;
