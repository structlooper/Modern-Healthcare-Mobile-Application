import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import { fonts, size } from "../../../theme/fonts";
import { ImagePickerFunction, LaunchCameraFunction } from "../../organisms/functions";

const UploadImageModal = ({modalState,SetModalState,uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount}) => {
  return (
    <Modal visible={modalState} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:20 }}>
        <View style={{ flex:.9 }} />
        <View style={{ flex:.2,marginVertical:'5%',marginHorizontal:'10%',backgroundColor:colors.light,borderRadius:20 }}>
          <TouchableOpacity style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            borderBottomWidth:.3,
            borderBottomColor:colors.grey
          }} onPress={()=>{
            SetModalState(false)
            LaunchCameraFunction(uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount).then()
          }}>
            <Text style={{ fontSize:size.label, fontFamily:fonts.family, color:colors.dark }}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',

          }} onPress={()=>{
            SetModalState(false)
            ImagePickerFunction(uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount).then()
          }}>
            <Text style={{ fontSize:size.label, fontFamily:fonts.family, color:colors.dark }}>Upload Photo</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flex:.1,backgroundColor:colors.light,borderRadius:20,marginHorizontal:'10%',marginBottom:'10%',alignItems:'center',justifyContent:'center' }} onPress={()=>SetModalState(false)}>
          <Text style={{ fontSize:size.label,color:colors.red,fontFamily:fonts.family }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default UploadImageModal;
