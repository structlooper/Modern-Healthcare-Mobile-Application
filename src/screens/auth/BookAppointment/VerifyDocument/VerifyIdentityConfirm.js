import React, { useEffect, useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import SuccessIcon from "../../../../componenets/atoms/successIcon";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../../theme/fonts";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";

const VerifyIdentityConfirm = ({ navigation }) => {
  const [screenModalVisibility,SetScreenModalVisibility] = useState(true)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     navigation.navigate('TypesOfAppointments')
  //   },5000)
  // },[])
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
          navigation.navigate('TypesOfAppointments')
        }}>
          <View style={{ flex:.2 }}/>
          <View style={{ alignItems:'center',flex:.8 }}>
            <SuccessIcon />
            <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(4) }}>
              {/*<Text style={{ fontSize:size.label,fontFamily:fonts.family,color:colors.grey }}>{email} </Text>*/}
            </View>
            <View style={{ justifyContent:'center',flex:.5,width:widthPercentageToDP(80) }}>
              <Text style={{ fontSize:size.subTitle,textAlign:'center',fontFamily:fonts.family,color:colors.grey }}>
                Your Verification has been sent and is now waiting for confirmation, Our staff will notify you shortly.
              </Text>
            </View>
          </View>
          <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
            <Text style={{ fontSize:size.text,color:colors.grey, fontFamily:fonts.family }}>You may close this tab</Text>
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

export default VerifyIdentityConfirm;
