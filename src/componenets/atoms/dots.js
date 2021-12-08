import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Dots = (dom) => {
  return (
    <View style={{ flexDirection:'row' }}>
      <View style={[styles.dotStyle,dom.index===1?{backgroundColor:colors.lightBlue}:{backgroundColor:colors.light}]} />
      <View style={[styles.dotStyle,dom.index===2?{backgroundColor:colors.lightBlue}:{backgroundColor:colors.light}]} />
      <View style={[styles.dotStyle,dom.index===3?{backgroundColor:colors.lightBlue}:{backgroundColor:colors.light}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dotStyle : {
    width:10,height:10,borderRadius:100,marginHorizontal:widthPercentageToDP(1.5)
  }
})

export default Dots;
