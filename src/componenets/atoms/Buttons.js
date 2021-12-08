import React from "react";
import { Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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

