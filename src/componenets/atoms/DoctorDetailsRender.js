import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import { style } from "../organisms/style";
import { fonts, size } from "../../theme/fonts";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DoctorDetailsRender = ({ doctorName,icon,activeColor,doctorType,SetState,activeSate,showRatting = false }) => {
  let backGroundColor = activeSate === doctorName?activeColor:colors.light;
  let titleColor = activeSate === doctorName?colors.light:colors.dark;
  let descColor = activeSate === doctorName?colors.light:colors.grey;
  return (
    <View style={{
      height:heightPercentageToDP(10),
      elevation:3,
      borderRadius:10,
      justifyContent:'center',
      backgroundColor:backGroundColor,
      padding:'5%',
      marginVertical:'2%'}}>
      <TouchableOpacity style={{ flexDirection:'row',alignItems:'center', }} onPress={()=>{SetState(activeSate === doctorName?null:doctorName)}}>
        <View style={{ flex:.3 }}>
          <Image source={{ uri:icon }}
                 style={{ height:60,width:60,resizeMode:'contain', borderRadius:10 }} />
        </View>
        <View style={{ flex:.7 }}>
          <Text style={[style.commonTitle,{fontWeight:'bold',color: titleColor}]}>{doctorName}</Text>
          <Text style={{ fontSize:size.text,fontFamily:fonts.family,color:descColor }}>{doctorType}</Text>
          {
            showRatting?
              <View style={{ flexDirection:'row' }}>
                <MaterialIcons
                  name={'star'}
                  size={20}
                  color={colors.yellow}
                  style={{  }}
                />
                <Text style={style.commonText}>4.5</Text>
              </View>
              :null
          }
        </View>

      </TouchableOpacity>
    </View>
  )
}
export default DoctorDetailsRender;
