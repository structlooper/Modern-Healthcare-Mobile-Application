import React from "react";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Text, TouchableOpacity, View } from "react-native";
import { fonts, size } from "../../theme/fonts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { commonIconSize } from "../organisms/settings";

const AppointmentButton = ({state,SetSate}) => {
  return (
    <TouchableOpacity style={{ elevation:5,borderRadius:100,backgroundColor:colors.light,width:widthPercentageToDP(60),alignItems:'center',height:heightPercentageToDP(5),flexDirection:'row' }}
                      onPress={()=>SetSate(true)}
    >
      <View style={{ flex:.35 }} />
      <Text style={{ fontSize:size.text,color:colors.blue,fontFamily:fonts.family,flex:.55 }}>My Appointments  </Text>
      <MaterialCommunityIcons
        name={"chevron-up"}
        color={colors.blue}
        size={commonIconSize+5}
      />
    </TouchableOpacity>
  );
};

export default AppointmentButton;
