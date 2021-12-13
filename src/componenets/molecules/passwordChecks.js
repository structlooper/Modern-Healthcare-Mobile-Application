import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";


export const PasswordChecks = (text_one,state_one,text_two,state_two) => {
  const Label = (state,text) => {
    return (
      <View style={{ flexDirection:'row',alignItems:'center',marginRight:widthPercentageToDP(22)}}>
        <View style={{ }}>
          <View style={[{  width:10, height:10,borderRadius:50,borderWidth:.5,borderColor:colors.grey },state?{backgroundColor:colors.lightGreen}:{backgroundColor:colors.light}]} />
        </View>
        <View style={{ marginLeft:widthPercentageToDP(3) }}>
          <Text style={{ color:colors.grey }}>{text}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flexDirection:'row',paddingHorizontal:widthPercentageToDP('2%'),marginVertical:heightPercentageToDP(1) }}>
      {/*{Label(true,'10 Character long')}*/}
      {Label(state_one,text_one)}
      {Label(state_two,text_two)}
    </View>
  )
}
