import React, {createContext, useState, useContext} from 'react';
import { useSelector } from "react-redux";

const GetUserSessionContext = createContext({
  token:"",
  profileSkipped:false,
  SignIn:value=>{},
  SignOut:value=>{},
  ProfileSkipped:value=>{}

})

export const useUserContext = () => useContext(GetUserSessionContext);
export const ModalContextProvider = ({children}) => {
  const {token} = useSelector(state => state.authReducer);
  const {profile_skipped} = useSelector(state => state.authReducer );

  const [tokenContext, SetToken] = useState(token);
  const [profileSkipped, SetProfileSkipped] = useState(profile_skipped);

  const UpdateUserDetails = (tok) =>{
    SetToken(tok);
  }
  const SignIn = (tok) =>{
    SetToken(tok);
    console.log("logged in");
  }
  const SignOut = () =>{
    SetToken("");
    console.log("logout");
  }
  const ProfileSkipped = (value) => {
    console.log(value)
    SetProfileSkipped(value)
  }

  const value = {
    tokenContext,
    profileSkipped,
    UpdateUserDetails,
    SignIn,
    SignOut,
    ProfileSkipped

  };

  return <GetUserSessionContext.Provider value={value} >{children}</GetUserSessionContext.Provider>;
};
