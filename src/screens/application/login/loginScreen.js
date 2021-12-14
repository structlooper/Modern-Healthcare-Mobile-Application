import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import { Button, GradientButton, IconButton } from "../../../componenets/atoms/Buttons";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import { fonts, size } from "../../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ThemePasswordInput, ThemeTextInput } from "../../../componenets/atoms/Inputs";
import { CheckEmail } from "../../../componenets/organisms/functions";
import SignInNavigation from "../../../componenets/molecules/signInNavigation";
import { SetSignUpDetailsEmail } from "../../../redux/actions";
import SignUpNavigation from "../../../componenets/molecules/signUpNavigation";

const LoginScreen = ({ navigation }) => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
          Sign In
        </Text>
        <View style={{ marginTop:heightPercentageToDP(5) }}>
          {/*<Text style={{ color:colors.dark,fontWeight:'bold',fontFamily:fonts.family,fontSize:size.label,margin:widthPercentageToDP(1) }}>Your Email</Text>*/}
          {
            ThemeTextInput(
              email,setEmail,'Email or Phone number',CheckEmail(email),true
            )
          }
          <View style={{ marginVertical:heightPercentageToDP('2') }}>
            {
              ThemePasswordInput(
                password,setPassword,'Password',showPassword,setShowPassword,false
              )
            }
          </View>
        </View>
        <TouchableOpacity style={{ alignItems:'flex-end' }}>
          <Text style={{ fontSize:size.text, fontFamily:fonts.family,color:colors.grey }}>Forgot password?</Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={{ flex:1,alignItems:'center',marginHorizontal:widthPercentageToDP(10) }}>
          <View
            style={{ marginTop:heightPercentageToDP(10), flexDirection:'row',alignItems:'center',justifyContent:'center' }}
          >
            <View style={{ borderBottomWidth:1, borderColor:colors.grey, flex:1 }} />
            <Text style={{ color:colors.grey, fontSize:size.text }}>  Or continue with  </Text>
            <View style={{ borderBottomWidth:1, borderColor:colors.grey, flex:1 }} />

          </View>
          <View style={{ marginTop:heightPercentageToDP(2),flexDirection:'row' }}>
            <View style={{
              width:30,height:60,
              flex:.4,
              borderRadius:10,
              borderColor:colors.lightWhite,
              elevation:10,
              backgroundColor:colors.light,
              padding:'3%',
              marginHorizontal:widthPercentageToDP(5)
            }}>
              <Image source={require('../../../assets/images/googleIcon.png')} style={{ width:'100%',height:'100%', resizeMode:'contain' }} />
            </View>
            <View style={{
              width:30,height:60,
              flex:.4,
              borderRadius:10,
              borderColor:colors.lightWhite,
              elevation:10,
              backgroundColor:colors.light,
              padding:'3%',
              marginHorizontal:widthPercentageToDP(5)

            }}>
              <Image source={require('../../../assets/images/facebookIcon.png')} style={{ width:'100%',height:'100%', resizeMode:'contain' }} />
            </View>
          </View>

        </ScrollView>

      </View>
      <View style={{ flex:.2 }}>
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5) }}>
          {
            CheckEmail(email)?
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
                'Sign in',
                ()=>{
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
                'Sign in',
                ()=>{}
              )
          }
        </View>
        <SignUpNavigation navigation={navigation} />

      </View>

    </View>
  );
};

export default LoginScreen;
