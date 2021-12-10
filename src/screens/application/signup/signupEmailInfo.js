import React, { useEffect } from "react";
import {  Text, TouchableOpacity, View } from "react-native";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { GradientButton } from "../../../componenets/atoms/Buttons";
import { OpenMail } from "../../../componenets/organisms/functions";
import SuccessIcon from "../../../componenets/atoms/successIcon";
import {style} from "../../../componenets/organisms/style";

const SignupEmailInfo = ({ navigation }) => {
  const {email} = useSelector(state => state.signUpReducer)
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUpEmailInfoConfirm')
    },5000)
  },[])

  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5),flex:.7 }}>
        <View style={{ flex:.15 }}>
          <Text style={{ fontSize:size.heading,fontFamily:fonts.family,fontWeight:'bold',color:colors.dark }}>Sign up</Text>
        </View>
        <View style={{ flex:.85,alignItems:'center',marginTop:heightPercentageToDP(8) }}>
          <SuccessIcon />
          <View style={{ marginVertical:heightPercentageToDP(4) }}>
           <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center',flex:.2 }}>
             <Text style={{ fontSize:size.label,fontFamily:fonts.family,color:colors.grey }}>{email} </Text>
             <TouchableOpacity
             onPress={()=>navigation.goBack()}
             >
               <FontAwesome5
                 name={'pen'}
                 size={15}
                 color={colors.lightGreen}
                 style={{ borderBottomWidth:1,borderBottomColor:colors.lightGreen }}
               />
             </TouchableOpacity>
           </View>
            <View style={{ justifyContent:'center',flex:.5,width:widthPercentageToDP(70) }}>
              <Text style={{ fontSize:size.subTitle,textAlign:'center',fontFamily:fonts.family,color:colors.dark }}>
                Check your email for a confirmation link to continue
              </Text>
            </View>
          </View>

        </View>
      </View>
      <View style={{ flex:.3,justifyContent:'center',alignItems:'center' }}>
        {
          GradientButton(
            {
              width:widthPercentageToDP('80%'),
              height:heightPercentageToDP(5),
              borderRadius:50,
              alignItems:'center',
              justifyContent:'center',
              borderWidth:.5,
              borderColor:'transparent',
            },
            [colors.ltnGreen, colors.lightGreen],
            {
              width:widthPercentageToDP('80%'),
              height:heightPercentageToDP(5),
              borderRadius:50,
              alignItems:'center',
              justifyContent:'center',
            },
            { color:colors.light,textTransform:'uppercase' },
            'Mail',
            ()=>{
              OpenMail()
            }
          )
        }
        <TouchableOpacity style={{ marginTop:heightPercentageToDP(3) }}
         onPress={()=>console.log('resend')}
        >
          <Text style={{ fontSize:size.text, color:colors.dark, fontFamily:fonts.family }}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupEmailInfo;
