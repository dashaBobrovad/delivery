import { useDispatch } from "react-redux";
// import { AppThunkDispatch } from "../../types/storeTypes";
import { AnyAction, Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/store";

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

const useTypedDispatch = () => useDispatch<AppThunkDispatch>();

export default useTypedDispatch;
