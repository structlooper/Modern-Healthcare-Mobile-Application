import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import SuccessIcon from "../../../componenets/atoms/successIcon";
import { fonts, size } from "../../../theme/fonts";
import { useSelector } from "react-redux";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
const SignupEmailInfoConfirm = ({navigation}) => {
  const {email} = useSelector(state => state.signUpReducer)
  const [screenModalVisibility,SetScreenModalVisibility] = useState(true)
  navigation.addListener('focus', () => {
    SetScreenModalVisibility(true)
  });
  navigation.addListener('blur', () => {
    SetScreenModalVisibility(false)
  });
  const ScreenModal = () => {
    return (
      <Modal visible={screenModalVisibility} transparent={true} animationType="fade">
        <TouchableOpacity style={{ flex:1 }} onPress={() => {
          navigation.navigate('SignPhone')
        }}>
          <View style={{ flex:.2 }}/>
          <View style={{ alignItems:'center',flex:.8 }}>
            <SuccessIcon />
            <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(4) }}>
              <Text style={{ fontSize:size.label,fontFamily:fonts.family,color:colors.grey }}>{email} </Text>
            </View>
            <View style={{ justifyContent:'center',flex:.5,width:widthPercentageToDP(70) }}>
              <Text style={{ fontSize:size.subTitle,textAlign:'center',fontFamily:fonts.family,color:colors.dark }}>
                Your email address is confirmed
              </Text>
            </View>
          </View>
          <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
            <Text style={{ fontSize:size.text,color:colors.grey, fontFamily:fonts.family }}>Tap anywhere to continue</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.bckGreen }}  >
      {statusBar(colors.bckGreen) }
      {ScreenModal()}
    </View>
  );
};

export default SignupEmailInfoConfirm;
