import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";

const CheckNavigation = () => {
  return (
    <NavigationContainer>
      {/*{isValid ? (<AuthNavigation/>) :  (<GuestNavigation/> )}*/}
      <Navigation />
    </NavigationContainer>
  );
};

export default CheckNavigation;
