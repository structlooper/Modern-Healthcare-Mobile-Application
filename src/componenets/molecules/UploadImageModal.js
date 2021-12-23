import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { launchCamera } from "react-native-image-picker";
import { fonts, size } from "../../theme/fonts";
import ImagePicker from "react-native-image-crop-picker";

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
            launchCamera({
              includeBase64: true,
              mediaType: 'photo',
              maxHeight: 500,
              maxWidth: 500,
            }, (response) => {
              if (response["didCancel"] === undefined) {
                let state = uploadedPictures;
                let imageDetails = {
                  base64:response.assets[0].base64,
                  path:response.assets[0].uri
                }
                state.push(imageDetails)
                SetUploadedPictures(state)
                SetUploadedPicturesCount(state.length)
              } else {
                console.log('something went wrong!!')
              }
            }).then()
          }}>
            <Text style={{ fontSize:size.label, fontFamily:fonts.family, color:colors.dark }}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',

          }} onPress={()=>{
            SetModalState(false)
            ImagePicker.openPicker({
              includeBase64: true,
              multiple: true,
              quality: 1.0,
              maxWidth: 500,
              maxHeight: 500,
            }).then(image => {
              for (let i = 0; i < image.length; i++) {
                let state = uploadedPictures;
                let imageDetails = {
                  base64:image[i].data,
                  path:image[i].path
                }
                state.push(imageDetails)
                SetUploadedPictures(state)
                SetUploadedPicturesCount(state.length)

              }
            }).catch(error => {
              console.log(error)
            })
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
