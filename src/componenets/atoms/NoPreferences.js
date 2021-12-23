import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import { size } from "../../theme/fonts";

const NoPreferences = () => {
  return (
    <View style={{
      height:heightPercentageToDP(10),
      backgroundColor:colors.light,
      elevation:10,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10 }}>
      <Text style={{ fontSize:size.subTitle }}>No Preferences</Text>
    </View>
  )
}

export default NoPreferences;
