import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "../../../componenets/atoms/Buttons";
import { colors } from "../../../theme/colors";
import { commonIconSize } from "../../../componenets/organisms/settings";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { style } from "../../../componenets/organisms/style";

const HeaderButton = ({ active,navigation }) => {
  return (
    <View style={{ alignItems:'flex-end' }}>
      {
        IconButton({
            padding:'1%',
            backgroundColor:active==='history'?colors.ltnGreen :colors.light,
            borderRadius:50,
            width:60,
            height:60,
            alignItems:'center',
            justifyContent:'center',
          elevation:10
          },
          'history',
          commonIconSize,
          colors.dark,
          {

          },
          ()=>navigation.navigate('FaqQuestionHistory'),
        )
      }
      <TouchableOpacity style={{
        backgroundColor:active==='faq'?colors.ltnGreen :colors.light,
        borderRadius:50,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center',
        padding:'1%',
        elevation:10,
        marginTop:heightPercentageToDP(1)
      }} onPress={()=>navigation.navigate('FaqsList')}>
        <Text style={[style.commonTitle,{color:colors.dark,fontWeight:'bold'}]}>Faq?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButton;
