import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../theme/colors";
import { Text, View } from "react-native";
import { IconButton } from "../../atoms/Buttons";
import { fonts, size } from "../../../theme/fonts";

const ChargedServicePageHeader = ({titleText,backButton,navigation,bottomTextShow = false,bottomText = null}) => {
  return (
    <View style={{ height:heightPercentageToDP(25)
      ,borderWidth:5,borderRadius:20,borderTopColor:'transparent',borderColor:colors.lightGrey,
      // shadowColor: '#000',
      // shadowOffset: { width: 1, height: 1 },
      // shadowOpacity:  0.4,
      // shadowRadius: 3,
      // elevation: 5,
    }}>
      <View style={{  marginTop:heightPercentageToDP(3),padding:'2%' }}>
        {backButton?IconButton(
          {
            backgroundColor:colors.bckRed,
            width:45,height:45,borderRadius:100,
            justifyContent:'center',alignItems:'center'
          },
          'times',
          30,
          colors.red,
          {  },
          ()=> navigation.goBack()
        ):null}
      </View>

      <View style={{flexDirection:'row',marginTop:heightPercentageToDP(2),paddingHorizontal:widthPercentageToDP(8),alignItems:'center' }}>
        <View style={{ flex:.1}}  >

        </View>
        <View style={{ flex:1,alignItems:'center' }}>
          <Text style={{ fontSize:size.subTitle, color:colors.dark, fontWeight:'bold' }}>{titleText}</Text>
        </View>
      <View style={{ flex:.1 }} />
      </View>
      {
        bottomTextShow?
          <View>
            <Text style={{ color:colors.grey,fontSize:size.text,fontFamily:fonts.family }}>{bottomText}</Text>
          </View>
          :null
      }

    </View>
  );
};

export default ChargedServicePageHeader;
