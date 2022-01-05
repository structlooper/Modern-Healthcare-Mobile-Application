import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { Button, GradientButton, IconButton } from "../../../componenets/atoms/Buttons";
import { fonts, size } from "../../../theme/fonts";
import { ExitModalConfirmation } from "../../../componenets/molecules/Modals/exitModalConfirmation";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ThemePasswordInput } from "../../../componenets/atoms/Inputs";
import  { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";
import { PasswordChecks } from "../../../componenets/molecules/passwordChecks";
import {
  CheckEmail,
  CheckStringLength,
  CheckStringOneDigit,
  CheckStringOneSymbol,
  CheckStringOneUppercase,
} from "../../../componenets/organisms/functions";
import { SetAuthUserDetails, SetAuthUserToken, SetSignUpDetailsEmail } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useUserContext } from "../../../redux/context";
import ColoredButton from "../../../componenets/atoms/ColoredButton";

const CreatePassword = ({ navigation }) => {
  const {SignIn}= useUserContext();
  const dispatch = useDispatch();
  const [screenModalVisibility,SetScreenModalVisibility] = useState(true);
  const [exitModal, setExitModal] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');


  const createPasswordScreenModal = () => {
    // console.log()
    return (
      <Modal visible={screenModalVisibility} transparent={true} animationType="fade">
        {ExitModalConfirmation(exitModal,setExitModal,navigation)}
        <View style={style.mainContainer}>
          <View style={{ flex:.9 }}>

          <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
            <View style={{ flex:.35 }}>
              {IconButton(
                {
                  backgroundColor:colors.bckRed,
                  width:60,height:60,borderRadius:100,
                  justifyContent:'center',alignItems:'center'
                },
                'times',
                30,
                colors.red,
                {  },
                ()=> setExitModal(true)
              )}
            </View>
            <View style={{ flex:1 }}>
              <Text style={{ color:colors.dark, fontSize:size.heading }}>Password</Text>
            </View>
          </View>

          <View style={{ marginTop:heightPercentageToDP(5) }}>
            <Text style={{ color:colors.dark,fontWeight:'bold',fontFamily:fonts.family,fontSize:size.label,margin:widthPercentageToDP(1) }}>Create Password</Text>
            {
              ThemePasswordInput(
                password,setPassword,'Password',showPassword,setShowPassword,true
              )
            }
            <View style={{ marginVertical:heightPercentageToDP(2) }}>
              {
                ThemePasswordInput(
                  confirmPassword,setConfirmPassword,'Confirm Password',showConfirmPassword,setShowConfirmPassword,false
                )
              }
            </View>
            <View style={{  }}>
              <BarPasswordStrengthDisplay
                width={widthPercentageToDP('85') }
                password={password}
              />
            </View>
            <View>
              {/*
               --> Dot checks...
              */}
              {PasswordChecks('10 Character long',CheckStringLength(password),'1 uppercase letter',CheckStringOneUppercase(password))}
              {PasswordChecks('1 special character',CheckStringOneSymbol(password),'1 number',CheckStringOneDigit(password))}
            </View>
          </View>
          </View>
          <View style={{ flex:.1,justifyContent:'center',alignItems:'center' }}>

            <ColoredButton gradientColors={style.GradientColors} showButton={ CheckStringLength(password) && CheckStringOneDigit(password) && CheckStringOneUppercase(password) && CheckStringOneSymbol(password) && password === confirmPassword} text={'Continue'} action={()=>{
              dispatch(SetAuthUserToken('token_of_user'))
              dispatch(SetAuthUserDetails(JSON.stringify({user_id:1,name:'user name'})))
              SignIn('token_of_user')

            }} width={80} />
          </View>
        </View>
      </Modal>
    )
  }
  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      {createPasswordScreenModal()}
    </View>
  );
};

export default CreatePassword;
