import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";

const HelpButton = () => {
  return (
    <TouchableOpacity style={{
      height:heightPercentageToDP(3),width:widthPercentageToDP(20),
      alignItems:'center',justifyContent:'center',
      backgroundColor:colors.grey,borderRadius:100,
      marginHorizontal:widthPercentageToDP(2)
    }}>
      <Text style={{
        fontSize:size.text,
        fontWeight:'bold',
        color:colors.light,
        fontFamily:fonts.family
      }}>Help?</Text>
    </TouchableOpacity>
  );
};

export default HelpButton;
