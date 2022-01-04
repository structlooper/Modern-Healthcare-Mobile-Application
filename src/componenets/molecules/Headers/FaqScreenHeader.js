import React from "react";
import { Text, View } from "react-native";
import { IconButton } from "../../atoms/Buttons";
import { colors } from "../../../theme/colors";
import { commonIconSize } from "../../organisms/settings";
import HeaderButton from "../../../screens/auth/FaqScreens/HeaderButton";
import { fonts, size } from "../../../theme/fonts";

const FaqScreenHeader = ({ active,navigation,header }) => {
  return (
    <View style={{ flexDirection:'row',alignItems:'center' }}>
      <View style={{ flex:.15 }}>
        {
          IconButton(
            {
              backgroundColor:colors.bckGreen,
              width:45,height:45,borderRadius:100,
              justifyContent:'center',alignItems:'center'
            },
            'arrow-left',
            commonIconSize+5,
            colors.ltnGreen,
            {  },
            ()=>navigation.goBack()
          )
        }
      </View>
      <View style={{ flex:.7 }}>
        <Text style={{ fontSize:size.subHeading,textTransform:'capitalize' ,color:colors.dark, fontFamily:fonts.family, fontWeight:'bold',textAlign:'center' }}>{header}</Text>
      </View>
      <View style={{ flex:.15 }}>
        <HeaderButton active={active} navigation={navigation} />
      </View>

    </View>
  );
};

export default FaqScreenHeader;
