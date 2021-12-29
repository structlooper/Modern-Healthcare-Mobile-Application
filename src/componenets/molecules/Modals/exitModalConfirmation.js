import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { size } from "../../../theme/fonts";

export const ExitModalConfirmation = (modalState,changeModalState,navigation) => {
  return (
    <Modal visible={modalState} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:20 }}>
        <View style={{ flex:.35 }} />
        <View style={{ flex:.3,justifyContent:'center',marginVertical:'20%',marginHorizontal:'15%',backgroundColor:colors.light,borderRadius:20 }}>
          <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(2) }}>
            <Text style={{ fontSize:size.label, color:colors.dark }}>Are you sure?</Text>
            <View style={{ alignItems:'center',width:widthPercentageToDP(50),marginVertical:heightPercentageToDP(2) }}>
              <Text style={{ textAlign:'center' }}>You will exit out of this signup and all your information will be deleted.</Text>
            </View>
            <View style={{ flexDirection:'row',marginHorizontal:widthPercentageToDP(17),marginVertical:heightPercentageToDP(1) }}>
              <TouchableOpacity
                style={{ flex:1 }}
                onPress={()=>{changeModalState(false)}}
              >
                <Text style={{ fontSize:size.label,color:colors.grey }}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{
                  changeModalState(false)
                  navigation.navigate('StartScreen')}}
              >
                <Text style={{ fontSize:size.label,color:colors.ltnGreen }}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export const ExitModalAuthConfirmation = (modalState,changeModalState,navigation) => {
  return (
    <Modal visible={modalState} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:20 }}>
        <View style={{ flex:.35 }} />
        <View style={{ flex:.3,justifyContent:'center',marginVertical:'20%',marginHorizontal:'15%',backgroundColor:colors.light,borderRadius:20 }}>
          <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(2) }}>
            <Text style={{ fontSize:size.label, color:colors.dark }}>Are you sure?</Text>
            <View style={{ alignItems:'center',width:widthPercentageToDP(50),marginVertical:heightPercentageToDP(2) }}>
              <Text style={{ textAlign:'center' }}>You will exit out of this appointment draft and all your information will be deleted.</Text>
            </View>
            <View style={{ flexDirection:'row',marginHorizontal:widthPercentageToDP(17),marginVertical:heightPercentageToDP(1) }}>
              <TouchableOpacity
                style={{ flex:1 }}
                onPress={()=>{changeModalState(false)}}
              >
                <Text style={{ fontSize:size.label,color:colors.grey }}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{
                  changeModalState(false)
                  navigation.navigate('HomeTab')}}
              >
                <Text style={{ fontSize:size.label,color:colors.ltnGreen }}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

