import React, { useState } from "react";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/HeaderVerifyIdentity";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { heightPercentageToDP } from "react-native-responsive-screen";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { fonts, size } from "../../../theme/fonts";

const VerifyDetailsUploadDoc = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  const [uploadedPictures,SetUploadedPictures] = useState(null);
  const [imagePickerModal,SetImagePickerModal] = useState(false);
  const ImagePickerModal = () => {
    return (
      <Modal visible={imagePickerModal} transparent={true} animationType="fade" >
        <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:50 }}>
          <View style={{ flex:.9 }} />
          <View style={{ flex:.2,marginVertical:'5%',marginHorizontal:'10%',backgroundColor:colors.light,borderRadius:20 }}>
            <TouchableOpacity style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              borderBottomWidth:.3,
              borderBottomColor:colors.grey
            }}>
              <Text style={{ fontSize:size.label, fontFamily:fonts.family, color:colors.dark }}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center',

            }}>
              <Text style={{ fontSize:size.label, fontFamily:fonts.family, color:colors.dark }}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ flex:.1,backgroundColor:colors.light,borderRadius:20,marginHorizontal:'10%',marginBottom:'10%',alignItems:'center',justifyContent:'center' }} onPress={()=>SetImagePickerModal(false)}>
            <Text style={{ fontSize:size.label,color:colors.red,fontFamily:fonts.family }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {ImagePickerModal()}
      {statusBar(colors.light)}
      <HeaderVerifyIdentity barPercent={.3} backButton={true} titleText={'Verify Identity'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal}  />
      <View style={{ flex:.6,padding:'5%'}}>
        <View style={{ alignItems:'center',marginTop:heightPercentageToDP(4) }}>
          <TouchableOpacity style={{
            width:100,height:100,
            borderRadius:100,
            borderColor:colors.dark,
            elevation:20,
            backgroundColor:colors.light,
            alignItems:'center',
            justifyContent:'center'
          }} onPress={()=>SetImagePickerModal(true)}>
            <FontAwesome5
              name={'camera'}
              size={30}
              color={colors.dark}
              style={{  }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex:.2 }} />
    </View>
  );
};

export default VerifyDetailsUploadDoc;
