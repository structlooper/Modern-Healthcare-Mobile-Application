import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import {useSelector} from "react-redux";
import {style} from "../../../componenets/organisms/style";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { IconButton } from "../../../componenets/atoms/Buttons";
import { fonts, size } from "../../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import RNOtpVerify from 'react-native-otp-verify';

const VerificationOtpPage = ({ navigation }) => {
  const {phone} = useSelector(state => state.signUpReducer)
  const [otp,SetOtp] = useState('');
  // useEffect(()=> {
  //   startListeningForOtp().then()
  // },[])
  //
  // navigation.addListener('blur', () => {
  //   RNOtpVerify.removeListener();
  // });
  // const getHash = () =>
  //   RNOtpVerify.getHash()
  //     .then(console.log)
  //     .catch(console.log);
  // const startListeningForOtp = () =>
  //   RNOtpVerify.getOtp()
  //     .then(p => RNOtpVerify.addListener(otpHandler))
  //     .catch(p => console.log(p));
  //
  // const otpHandler = (message: string) => {
  //   const otp = /(\d{6})/g.exec(message)[1];
  //   SetOtp({ otp });
  //   RNOtpVerify.removeListener();
  //   Keyboard.dismiss();
  // }
  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <View style={{ flex:1 }}>
        <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
          <View style={{ flex:.35 }}>
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
          <View style={{ flex:1 }}>
            <Text style={{ color:colors.dark, fontSize:size.heading }}>Verification</Text>
          </View>
        </View>

        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(10) }}>
          <Text style={{ fontFamily:fonts.family, fontSize:size.label,color:colors.grey,textAlign:'center' }}>
            A verification code has been sent on {phone}
          </Text>

          <View style={{
            marginTop:heightPercentageToDP(2),
            alignItems:'center',
            elevation:3,
            borderRadius:10,
            borderWidth:.5,
            borderColor:colors.lightGrey,
            paddingHorizontal:widthPercentageToDP(2) }}>
            <OTPInputView
              style={{width:widthPercentageToDP(70), height: heightPercentageToDP(8)}}
              pinCount={6}
              //code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => {
              // console.log(code)
              //    SetOtp(otp+code)
              // }}
              autoFocusOnLoad={true}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled = {(code) => {
                console.log(`Code is ${code}, you are good to go!`)
                SetOtp(code)
                // RNOtpVerify.removeListener();
                navigation.navigate('CreatePassword')
              }}
            />
          </View>
          <TouchableOpacity style={{ marginTop:heightPercentageToDP(15) }}
          onPress={()=>{
            // getHash().then()
            console.log('resend')}}
          >
            <Text style={{ fontSize:size.label, color:colors.grey,fontFamily:fonts.family }}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({



  underlineStyleBase: {
    // width: 30,
    // height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color:colors.dark
  },

  underlineStyleHighLighted: {
    borderColor: colors.lightBlue,
  },
});
export default VerificationOtpPage;
