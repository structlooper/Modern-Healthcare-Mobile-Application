import React from "react";
import { Text, View } from "react-native";
import { style } from "../../componenets/organisms/style";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";

const SelectProfileScreen = () => {
  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <View style={{ flex:.9 }}>
        <View style={{
          alignItems:'center',
          marginTop:heightPercentageToDP(5)
        }}>
          <Text style={{ fontSize:size.heading, color:colors.dark, fontFamily:fonts.family }}>Who's using Teja?</Text>
          <Text style={{ fontSize:size.text,textAlign:'center',
            marginTop:heightPercentageToDP(5),
            color:colors.grey }}>
            With Teja profile you can secure health records, manage appointments,
            and take care of your families health.
          </Text>
          <View>

          </View>
        </View>

      </View>
      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
        <Text>Appointments</Text>
      </View>
    </View>
  );
};

export default SelectProfileScreen;
