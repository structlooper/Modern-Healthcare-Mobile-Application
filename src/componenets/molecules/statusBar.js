import { StatusBar } from "react-native";
import React from "react";
 const statusBar = (color) => {
  return (
    <StatusBar animated={true} backgroundColor={color}  barStyle="dark-content" />
  )
}
export default statusBar;
