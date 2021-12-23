import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import { style } from "../organisms/style";
import { fonts, size } from "../../theme/fonts";

const DoctorDetailsRender = ({ doctorName,icon,doctorType }) => {
  return (
    <View style={{
      height:heightPercentageToDP(10),
      // backgroundColor:colors.light,
      elevation:3,
      borderRadius:10,
      justifyContent:'center',
      backgroundColor:colors.light,
      padding:'5%',
      marginVertical:'2%'}}>
      <TouchableOpacity style={{ flexDirection:'row',alignItems:'center', }}>
        <View style={{ flex:.3 }}>
          <Image source={{ uri:icon }}
                 style={{ height:60,width:60,resizeMode:'contain', borderRadius:10 }} />
        </View>
        <View style={{ flex:.7 }}>
          <Text style={[style.commonTitle,{fontWeight:'bold'}]}>{doctorName}</Text>
          <Text style={{ fontSize:size.text,fontFamily:fonts.family }}>{doctorType}</Text>
        </View>

      </TouchableOpacity>
    </View>
  )
}
export default DoctorDetailsRender;
