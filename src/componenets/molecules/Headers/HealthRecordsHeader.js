import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Text, View } from "react-native";
import { IconButton } from "../../atoms/Buttons";
import { colors } from "../../../theme/colors";
import { fonts, size } from "../../../theme/fonts";

const HealthRecordsHeader = ({ action,header }) => {
  return (
    <View style={{ height:heightPercentageToDP(15),justifyContent:'center' }}>
        <View style={{  }}>
          {
            IconButton(
              {
                backgroundColor:colors.bckGreen,
                width:45,height:45,borderRadius:100,
                justifyContent:'center',alignItems:'center'
              },
              'arrow-left',
              30,
              colors.ltnGreen,
              {  },
              action
            )
          }
        </View>
        <View style={{ flex:1,marginTop:heightPercentageToDP(3)}}>
          <Text style={{ fontSize:size.subHeading, color:colors.dark, fontFamily:fonts.family, fontWeight:'bold' }}>{header}</Text>
        </View>
    </View>
  );
};

export default HealthRecordsHeader;
