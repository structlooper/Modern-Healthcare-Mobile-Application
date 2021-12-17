import React from "react";
import { colors } from "../../theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Bar } from "react-native-progress";
import { size } from "../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { IconButton } from "../atoms/Buttons";
import { ExitModalAuthConfirmation } from "./exitModalConfirmation";

const HeaderVerifyIdentity = ({barPercent,titleText,backButton,modalState,SetModalSate,navigation}) => {
  return (
    <>
    <View style={{ flex:.25,alignItems:'center'
      ,borderWidth:.4,borderRadius:20,borderTopColor:'transparent',borderColor:colors.grey}}>
      <View style={{  marginTop:heightPercentageToDP(8) }}>
        <Bar progress={barPercent} width={widthPercentageToDP(70)}
             color={colors.blue}
             height={heightPercentageToDP(1.5)}
             borderRadius={100}
        />


    </View>
      {ExitModalAuthConfirmation(modalState,SetModalSate,navigation)}
      <View style={{ flex:.8,flexDirection:'row',marginTop:heightPercentageToDP(5),paddingHorizontal:widthPercentageToDP(8),alignItems:'center' }}>
        <View style={{ flex:.3}}  >
          {backButton?IconButton(
            {
              backgroundColor:colors.bckGreen,
              width:60,height:60,borderRadius:100,
              justifyContent:'center',alignItems:'center'
            },
            'arrow-left',
            30,
            colors.ltnGreen,
            {  },
            ()=> navigation.goBack()
          ):null}
        </View>
        <View style={{ flex:1 }}>
          <Text style={{ fontSize:size.subHeading, color:colors.dark }}>{titleText}</Text>
        </View>
        <TouchableOpacity style={{ flex:.2 }} onPress={()=>SetModalSate(true)}>
          <FontAwesome5
            name={'times'}
            size={30}
            color={colors.dark}
            style={{  }}
          />
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default HeaderVerifyIdentity;
