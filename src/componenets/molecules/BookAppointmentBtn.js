import React from "react";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Text, TouchableOpacity, View } from "react-native";
import { fonts, size } from "../../theme/fonts";

const BookAppointmentBtn = ({ navigation }) => {
  return (
    <TouchableOpacity style={{
      backgroundColor:colors.light,
      height:heightPercentageToDP(10),
      width:widthPercentageToDP('80'),
      alignItems:'center',
      justifyContent:'center',
      borderRadius:20,
      elevation:20
    }} onPress={()=>navigation.navigate('VerifyDetailsInfo')}>
      <Text style={{ fontSize:size.label,color:colors.blue,fontFamily:fonts.family,fontWeight:'bold' }}>Book an Appointment</Text>
      <View style={{ flexDirection:'row',marginTop:heightPercentageToDP(1),alignItems:'center' }}>
        <Text style={{ color:colors.grey,fontSize:size.text,fontFamily:fonts.family }}>
          54 doctors online
        </Text>
        <View style={{ marginLeft:widthPercentageToDP(1),width:10,height:10,borderRadius:100,backgroundColor:colors.blue }} />
      </View>
    </TouchableOpacity>
  );
};

export default BookAppointmentBtn;
