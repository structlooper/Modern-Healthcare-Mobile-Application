import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { Splash } from "./componenets/templates/splash";
import Intro from "./componenets/templates/intro";
import { useSelector, useDispatch } from "react-redux";
import {setIntroScreen} from "./redux/actions";
import CheckNavigation from "./navigation/checkNavigation";

const Application = () => {
  const dispatch = useDispatch();
  const {introScreen} = useSelector(state => state.settingReducer);
  const [splash, setSplash] = React.useState(true);
  const [intro, setIntro] = React.useState(false);
  const {token} = useSelector(state => state.authReducer );

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
      if (introScreen){
        introScreenFunction()
      }else{
        console.log('checkAuth')
      }
    },3000)
  },[])

  const introScreenFunction = () => {
    setIntro(true)
    // dispatch(setIntroScreen(false));
  }
  if (splash){
    return <Splash />
  }
  return (
    <CheckNavigation />
  );
}
export default Application;
