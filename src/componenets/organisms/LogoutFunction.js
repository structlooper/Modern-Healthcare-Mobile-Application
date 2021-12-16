import React from "react";
import { SetAuthProfileSkipped, SetAuthUserToken } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useUserContext } from "../../redux/context";

const LogoutFunction = () => {
  const dispatch = useDispatch();
  const {SignOut}= useUserContext();
  const {ProfileSkipped}= useUserContext();

  dispatch(SetAuthUserToken(''))
  dispatch(SetAuthProfileSkipped(false))
  SignOut()
  ProfileSkipped(false)
};

export default LogoutFunction;
