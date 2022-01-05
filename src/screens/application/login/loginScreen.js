import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import {IconButton } from "../../../componenets/atoms/Buttons";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import { fonts, size } from "../../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ThemePasswordInput, ThemeTextInput } from "../../../componenets/atoms/Inputs";
import { CheckEmail } from "../../../componenets/organisms/functions";
import SignUpNavigation from "../../../componenets/molecules/signUpNavigation";
import ColoredButton from "../../../componenets/atoms/ColoredButton";
import { SetAuthProfileSkipped, SetAuthUserDetails, SetAuthUserToken } from "../../../redux/actions";
import { useUserContext } from "../../../redux/context";
import { useDispatch } from "react-redux";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {SignIn}= useUserContext();
  const {ProfileSkipped} = useUserContext();
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
        <TouchableOpacity style={{ alignItems:'flex-end' }} onPress={()=>navigation.navigate('ForgotPassword')}>
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
            <TouchableOpacity style={style.ImageButton}>
              <Image source={require('../../../assets/images/googleIcon.png')} style={{ width:'100%',height:'100%', resizeMode:'contain' }} />
            </TouchableOpacity>
            <TouchableOpacity style={style.ImageButton}>
              <Image source={require('../../../assets/images/facebookIcon.png')} style={{ width:'100%',height:'100%', resizeMode:'contain' }} />
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>
      <View style={{ flex:.2 }}>
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5) }}>

          <ColoredButton gradientColors={style.GradientColors} showButton={ CheckEmail(email) && password !== '' && password.length > 6} text={'Sign in'} action={()=>{
            dispatch(SetAuthUserToken('token_of_user'))
            dispatch(SetAuthUserDetails(JSON.stringify({user_id:1,name:'user name'})))
            SignIn('token_of_user')
            dispatch(SetAuthProfileSkipped(true));
            ProfileSkipped(true)
          }} width={80} />
        </View>
        <SignUpNavigation navigation={navigation} />

      </View>

    </View>
  );
};

export default LoginScreen;
