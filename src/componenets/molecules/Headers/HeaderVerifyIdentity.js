import React from "react";
import { colors } from "../../../theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Bar } from "react-native-progress";
import { fonts, size } from "../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { IconButton } from "../../atoms/Buttons";
import { ExitModalAuthConfirmation } from "../Modals/exitModalConfirmation";
import { commonIconSize } from "../../organisms/settings";

const HeaderVerifyIdentity = ({
                                barPercent,
                                color = colors.ltnGreen,
                                bckColor = colors.bckGreen,
                                titleText,
                                backButton,
                                modalState,
                                SetModalSate,
                                navigation,
                                bottomTextShow = false,
                                bottomText = null
}) => {
  return (

    <View style={{ height:heightPercentageToDP(25), alignItems:'center'
      ,borderWidth:5,borderRadius:20,borderTopColor:'transparent',borderColor:colors.lightGrey,
      // shadowColor: '#000',
      // shadowOffset: { width: 1, height: 1 },
      // shadowOpacity:  0.4,
      // shadowRadius: 3,
      // elevation: 5,
    }}>
      <View style={{  marginTop:heightPercentageToDP(8) }}>
        <Bar progress={barPercent} width={widthPercentageToDP(70)}
             color={color}
             height={heightPercentageToDP(1.5)}
             borderRadius={100}
        />


    </View>
      {ExitModalAuthConfirmation(modalState,SetModalSate,navigation)}
      <View style={{flexDirection:'row',marginTop:heightPercentageToDP(5),paddingHorizontal:widthPercentageToDP(8),alignItems:'center' }}>
        <View style={{ flex:.1}}  >
          {backButton?IconButton(
            {
              backgroundColor:bckColor,
              width:45,height:45,borderRadius:100,
              justifyContent:'center',alignItems:'center'
            },
            'arrow-left',
            30,
            color,
            {  },
            ()=> navigation.goBack()
          ):null}
        </View>
        <View style={{ flex:1,alignItems:'center' }}>
          <Text style={{ fontSize:size.subTitle, color:colors.dark, fontWeight:'bold',textAlign:'center' }}>{titleText}</Text>
        </View>
        <TouchableOpacity style={{ flex:.1}} onPress={()=>SetModalSate(true)}>
          <FontAwesome5
            name={'times'}
            size={commonIconSize+5}
            color={colors.dark}
            style={{  }}
          />
        </TouchableOpacity>
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

export default HeaderVerifyIdentity;
