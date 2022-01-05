import React from "react";
import { Button, GradientButton } from "../atoms/Buttons";
import { style } from "../organisms/style";

const BottomButton = ({ text,showButton,action,gradientColors = style.GradientColors }) => {

      if(showButton) {
        return GradientButton(
          style.GradientButtonContainer,
          gradientColors,
          style.GradientButton,
          style.GradientTextStyle,
          text,
          action
        )
      }else {
       return  Button(
          style.bottomDisableButtonContainer,
          style.bottomDisableButton,
          text,
          () => {
          }
        )
      }


};

export default BottomButton;
