import React from "react";
import { Modal, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { size } from "../../../theme/fonts";

export const ExitModalConfirmation = (modalState,changeModalState,navigation) => {
  return (
    <Modal visible={modalState} transparent={true} animationType="fade" >
      <View style={ModalLocalStyle.containerOne}>
        <View style={{ flex:.35 }} />
        <View style={ModalLocalStyle.containerTwo}>
          <View style={ModalLocalStyle.containerThree}>
            <Text style={ModalLocalStyle.headerText}>Are you sure?</Text>
            <View style={ModalLocalStyle.descContainer}>
              <Text style={ModalLocalStyle.desc}>You will exit out of this signup and all your information will be deleted.</Text>
            </View>
            <View style={ModalLocalStyle.bottomButtonContainer}>
              <TouchableOpacity
                style={ModalLocalStyle.actionButtonStyle}
                onPress={()=>{changeModalState(false)}}

              >
                <Text style={ModalLocalStyle.noText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{
                  changeModalState(false)
                  navigation.navigate('StartScreen')}}
                style={ModalLocalStyle.actionButtonStyle}
              >
                <Text style={ModalLocalStyle.yesText}>Yes</Text>
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
      <View style={ModalLocalStyle.containerOne}>
        <View style={{ flex:.35 }} />
        <View style={ModalLocalStyle.containerTwo}>
          <View style={ModalLocalStyle.containerThree}>
            <Text style={ModalLocalStyle.headerText}>Are you sure?</Text>
            <View style={ModalLocalStyle.descContainer}>
              <Text style={ModalLocalStyle.desc}>You will exit out of this appointment draft and all your information will be deleted.</Text>
            </View>
            <View style={ModalLocalStyle.bottomButtonContainer}>
              <TouchableOpacity
                style={ModalLocalStyle.actionButtonStyle}
                onPress={()=>{changeModalState(false)}}

              >
                <Text style={ModalLocalStyle.noText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ModalLocalStyle.actionButtonStyle}
                onPress={()=>{

                  changeModalState(false)
                  navigation.navigate('HomeTab')}}
              >
                <Text style={ModalLocalStyle.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export const DeleteModalAuthConfirmation = ({ ModalState }) => {
  return (
    <Modal visible={ModalState.state} transparent={true} animationType="fade" >
      <View style={ModalLocalStyle.containerOne}>
        <View style={{ flex:.35 }} />
        <View style={ModalLocalStyle.containerTwo}>
          <View style={ModalLocalStyle.containerThree}>
            <Text style={ModalLocalStyle.headerText}>Are you sure?</Text>
            <View style={ModalLocalStyle.descContainer}>
              <Text style={ModalLocalStyle.desc}>Are you sure want to delete this item?</Text>
            </View>
            <View style={ModalLocalStyle.bottomButtonContainer}>
              <TouchableOpacity
                style={ModalLocalStyle.actionButtonStyle}
                onPress={()=>{ModalState.setState(false)}}
              >
                <Text style={ModalLocalStyle.noText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>{
                  ModalState.setState(false)
                  }}
                style={ModalLocalStyle.actionButtonStyle}
              >
                <Text style={ModalLocalStyle.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export const CommonConfirmationModalAuth = ({ modalState,title,text,YesFunction,NoFunction =()=>modalState.setState(!modalState.state) }) => {
  return (
    <Modal visible={modalState.state} transparent={true} animationType="fade" >
      <View style={ModalLocalStyle.containerOne}>
        <View style={{ flex:.35 }} />
        <View style={ModalLocalStyle.containerTwo}>
          <View style={ModalLocalStyle.containerThree}>
            <Text style={ModalLocalStyle.headerText}>{title}</Text>
            <View style={ModalLocalStyle.descContainer}>
              <Text style={ModalLocalStyle.desc}>{text}</Text>
            </View>
            <View style={ModalLocalStyle.bottomButtonContainer}>
              <TouchableOpacity
                style={ModalLocalStyle.actionButtonStyle}
                onPress={NoFunction}
              >
                <Text style={ModalLocalStyle.noText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={YesFunction}
                style={ModalLocalStyle.actionButtonStyle}
              >
                <Text style={ModalLocalStyle.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ModalLocalStyle = StyleSheet.create({
  containerOne:{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:20 },
  containerTwo:{ flex:.3,justifyContent:'center',marginVertical:'20%',marginHorizontal:'15%',backgroundColor:colors.light,borderRadius:20 },
  containerThree:{ alignItems:'center',marginVertical:heightPercentageToDP(2) },
  headerText:{ fontSize:size.label, color:colors.dark },
  descContainer:{ alignItems:'center',width:widthPercentageToDP(50),marginVertical:heightPercentageToDP(2) },
  desc:{ textAlign:'center',color:colors.grey },
  bottomButtonContainer:{ flexDirection:'row',marginHorizontal:widthPercentageToDP(17),marginVertical:heightPercentageToDP(1) },
  noText:{ fontSize:size.label,color:colors.grey },
  yesText:{ fontSize:size.label,color:colors.ltnGreen },
  actionButtonStyle:{ flex:1,backgroundColor:colors.light,elevation:5,alignItems:'center',marginHorizontal:widthPercentageToDP(1),borderRadius:10,padding:'2%' },


})

