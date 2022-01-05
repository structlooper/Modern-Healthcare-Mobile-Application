import React from "react";
import { Text, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../statusBar";
import { style } from "../../organisms/style";
import { IconButton } from "../../atoms/Buttons";
import { commonIconSize } from "../../organisms/settings";

const SettingHeader = ({ headerTitle,navigation,buttonType = false }) => {
  return (
    <View style={{
      backgroundColor:colors.light,
      flex:.15,
      elevation:5,
      borderRadius:20,
      alignItems:'center',
      paddingHorizontal:'5%',
      flexDirection:'row'
    }}>
      <View style={{ flex:.1 }}>
        {
          navigation !== undefined?
          IconButton(
            {
              backgroundColor:buttonType?colors.bckRed :colors.bckGreen,
              width:45,height:45,borderRadius:100,
              justifyContent:'center',alignItems:'center'
            },
            buttonType?'times' :'arrow-left',
            commonIconSize+5,
            buttonType?colors.red :colors.ltnGreen,
            {  },
            ()=>navigation.goBack()
          ):null
        }
      </View>
      <View style={{ flex:1,alignItems:'center' }}>
        {statusBar(colors.light)}
        <Text style={[style.headerHeading,{fontWeight:'bold'}]}>{headerTitle}</Text>
      </View>
      <View style={{ flex:.1 }} />


    </View>
  );
};

export default SettingHeader;
