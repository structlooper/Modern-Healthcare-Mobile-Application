import React from "react";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../../theme/colors";

export const Button = (containerStyle,textStyle,text,action) => {
  return (
    <TouchableOpacity style={containerStyle}
    onPress={action}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export const IconButton = (containerStyle,icon,size,color,iconStyle,action) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={action}>
      <FontAwesome5
        name={icon}
        size={size}
        color={color}
        style={iconStyle}
      />
    </TouchableOpacity>
  )
}

export const GradientButton = (containerStyle,gradientColors,gradientStyle,textStyle,text,action) => {
  return (
    <TouchableOpacity style={containerStyle}
    onPress={action}
    >
      <LinearGradient colors={gradientColors}
                      style={gradientStyle}
                      start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={textStyle} >{text}</Text>
      </LinearGradient>

    </TouchableOpacity>
  )
}

