import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ThemePasswordInput } from "../../../../componenets/atoms/Inputs";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import { style } from "../../../../componenets/organisms/style";
import { BarPasswordStrengthDisplay } from "react-native-password-strength-meter";
import { PasswordChecks } from "../../../../componenets/molecules/passwordChecks";
import {
  CheckStringLength, CheckStringOneDigit,
  CheckStringOneSymbol,
  CheckStringOneUppercase,
} from "../../../../componenets/organisms/functions";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'Change Password'} navigation={navigation} buttonType={true} />
      <View style={{ flex:.85 }}>
        <View style={{ marginTop:heightPercentageToDP(5),paddingHorizontal:widthPercentageToDP(5) }}>
          {
            ThemePasswordInput(
              oldPassword,setOldPassword,'Enter Old Password',showOldPassword,setShowOldPassword,true
            )
          }
          <View style={{ marginTop:heightPercentageToDP(2) }}>
            {
              ThemePasswordInput(
                password,setPassword,'Password',showPassword,setShowPassword,
              )
            }
          </View>

          <View style={{ marginVertical:heightPercentageToDP(2) }}>
            {
              ThemePasswordInput(
                confirmPassword,setConfirmPassword,'Confirm Password',showConfirmPassword,setShowConfirmPassword,false
              )
            }
          </View>
          <View style={{ }}>
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
      <View style={{ flex:.15,alignItems:'center' }}>
        <BottomButton action={()=>navigation.goBack()} text={'Save'} showButton={(oldPassword !== '' && CheckStringLength(password) && CheckStringOneDigit(password) && CheckStringOneUppercase(password) && CheckStringOneSymbol(password) && password === confirmPassword)} gradientColors={style.GradientColors} />
      </View>
    </View>
  );
};

export default ChangePassword;
