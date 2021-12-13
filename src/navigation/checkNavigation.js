import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import  AuthNavigation  from "./authNavigation";
import { useSelector } from "react-redux";

const CheckNavigation = () => {
  const {token} = useSelector(state => state.authReducer)
  return (
    <NavigationContainer>
      {token === '' ? (<Navigation/>) :  (<AuthNavigation/> )}
    </NavigationContainer>
  );
};

export default CheckNavigation;
