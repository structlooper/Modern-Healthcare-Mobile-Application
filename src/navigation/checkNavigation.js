import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import  AuthNavigation  from "./authNavigation";
import MidNavigation from "./MidNavigation";
import { useUserContext } from "../redux/context";

const CheckNavigation = () => {
  const {tokenContext}= useUserContext();
  const {profileSkipped} = useUserContext()

  const CheckStackNavigation = () => {
    if (!tokenContext){
      return <Navigation />
    }else{
      if (profileSkipped){
        return <AuthNavigation />
      }else{
        return <MidNavigation />
      }
    }
  }

  return (
    <NavigationContainer>
      { CheckStackNavigation() }
    </NavigationContainer>
  )
};



export default CheckNavigation;
