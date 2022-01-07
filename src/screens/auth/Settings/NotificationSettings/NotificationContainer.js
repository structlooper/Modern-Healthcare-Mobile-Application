import React from "react";
import { colors } from "../../../../theme/colors";
import { Image, Text, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";

const NotificationContainer = ({ icon,text,time }) => {
  return (
    <View style={{ flexDirection:'row',padding:'4%',borderRadius:10,backgroundColor:colors.light,elevation:5,margin:'1%',marginHorizontal:'5%',alignItems:'center' }}>
      <View style={{ flex:.18 }}>
        <Image source={icon} style={{ width:50,height:50,resizeMode:'contain' }} />
      </View>
      <View style={{ flex:.7 }}>
        <Text style={[style.commonTitle]}>{text}</Text>

      </View>
      <View style={{ flex:.15,alignItems:'center' }}>
        <Text style={style.commonText}>{time}</Text>
      </View>
    </View>
  );
};

export default NotificationContainer;
