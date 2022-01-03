import React, { useState } from "react";
import { Text, View } from "react-native";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { fonts, size } from "../../../theme/fonts";
import { Button, GradientButton, IconButton } from "../../../componenets/atoms/Buttons";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import {ThemeTextInput} from '../../../componenets/atoms/Inputs'
import { CheckEmail } from "../../../componenets/organisms/functions";
import { useDispatch } from "react-redux";
import {SetSignUpDetailsEmail} from "../../../redux/actions";
import {style} from "../../../componenets/organisms/style";
import SignInNavigation from "../../../componenets/molecules/signInNavigation";

const SignupEmailPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [localEmail,setEmail] = useState('');

  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <View style={{ flex:.8,padding:'5%' }}>
        <View>
          {IconButton(
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
          )}
        </View>
        <Text style={{ color:colors.dark,fontSize:size.title,fontFamily:fonts.family,fontWeight:'bold' }}>
          Sign Up
        </Text>
        <View style={{ marginTop:heightPercentageToDP(5) }}>
          <Text style={{ color:colors.dark,fontWeight:'bold',fontFamily:fonts.family,fontSize:size.label,margin:widthPercentageToDP(1) }}>Your Email</Text>
          {
            ThemeTextInput(
              localEmail,setEmail,'email@gmail.com',CheckEmail(localEmail),true
            )
          }

        </View>

      </View>
      <View style={{ flex:.2 }}>
        <SignInNavigation navigation={navigation} />
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5) }}>
          {
            CheckEmail(localEmail)?
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
                'Continue',
                ()=>{
                  dispatch(SetSignUpDetailsEmail(localEmail))
                  navigation.navigate('SignUpEmailInfo')
                }
              )
            :
              Button(
                {
                  backgroundColor:colors.light,
                  width:widthPercentageToDP(80),
                  height:heightPercentageToDP(5),
                  borderRadius:50,
                  alignItems:'center',
                  justifyContent:'center',
                  elevation:3,
                  borderWidth:.5,
                  borderColor:colors.lightGrey,
                },
                { color:colors.grey,textTransform:'uppercase' },
                'Continue',
                ()=>{}
              )
          }






        </View>

      </View>

    </View>
  );
};



export default SignupEmailPage;
