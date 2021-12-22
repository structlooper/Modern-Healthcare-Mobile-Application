import React from "react";
import { Button, GradientButton } from "../atoms/Buttons";
import { style } from "../organisms/style";

const ButtomButton = ({ text,showButton,action }) => {

      if(showButton) {
        return GradientButton(
          style.GradientButtonContainer,
          style.GradientColors,
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

export default ButtomButton;
