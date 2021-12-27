import React from "react";
import { style } from "../organisms/style";
import { Button, GradientButton } from "./Buttons";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";

const ColoredButton = ({text,showButton,action,gradientColors = style.GradientColors,width=80 }) => {
  if(showButton) {
    return GradientButton(
      {
          width:widthPercentageToDP(width),
          height:heightPercentageToDP(5),
          borderRadius:50,
          alignItems:'center',
          justifyContent:'center',
          borderWidth:.5,
          borderColor:'transparent',
         },
      gradientColors,
      {
        width:widthPercentageToDP(width),
        height:heightPercentageToDP(5),
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
      },
      { color:colors.light,textTransform:'uppercase' },
      text,
      action
    )
  }else {
    return  Button(
      {
        backgroundColor:colors.light,
        width:widthPercentageToDP(width),
        height:heightPercentageToDP(5),
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
        borderWidth:.5,
        borderColor:colors.lightGrey,
      },
      {
        color:colors.grey,textTransform:'uppercase'
      },
      text,
      () => {
      }
    )
  }
};

export default ColoredButton;
