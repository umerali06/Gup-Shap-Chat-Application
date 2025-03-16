import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./pages/store/slice/user/user.slice";
import { loginUserThunk } from "./pages/store/slice/user/user.thunk";

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  console.log(isAuthenticated);
  useEffect(() => {
    dispatch(loginUserThunk());
    dispatch(Login());
  });

  return <></>;
};

export default App;
