import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Text, View } from "react-native";
import { IconButton } from "../../atoms/Buttons";
import { colors } from "../../../theme/colors";
import { size } from "../../../theme/fonts";
import { style } from "../../organisms/style";

const AppointmentDetailsHeader = ({ header,dec,action }) => {
  return (
    <View style={{ height:heightPercentageToDP(10),justifyContent:'center' }}>
      <View style={{ flexDirection:'row' }}>
        <View style={{ flex:.3 }}>
          {
            IconButton(
              {
                backgroundColor:colors.bckRed,
                width:45,height:45,borderRadius:100,
                justifyContent:'center',alignItems:'center'
              },
              'times',
              30,
              colors.red,
              {  },
              action
            )
          }
        </View>
        <View style={{ flex:1,alignItems:'center' }}>
          <Text style={{ fontSize:size.subTitle, color:colors.dark, fontWeight:'bold' }}>{header}</Text>
          <Text style={style.commonText}>{dec}</Text>
        </View>
        <View style={{ flex:.3 }} />
      </View>
    </View>
  );
};

export default AppointmentDetailsHeader;
