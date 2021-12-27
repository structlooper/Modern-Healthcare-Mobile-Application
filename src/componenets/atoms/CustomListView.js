import React from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { style } from "../organisms/style";
import colors from "react-native/Libraries/NewAppScreen/components/Colors";

const CustomListView = ({text,themeColor = colors.ltnGreen}) => {
  return (
    <View style={{ flexDirection:'row',alignItems:'center',marginVertical:heightPercentageToDP(.5) }}>
      <View style={{ height:20,width:20,backgroundColor:themeColor,borderRadius:30 }} />
      <View style={{ marginLeft:widthPercentageToDP(1) }}>
        <Text style={style.commonText}>{text}</Text>
      </View>
    </View>
  )
}
export default CustomListView;
