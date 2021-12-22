import React, { useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/HeaderVerifyIdentity";
import { Image, ImageBackground, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import {launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import { fonts, size } from "../../../../theme/fonts";
import { Button } from "../../../../componenets/atoms/Buttons";

const VerifyDetailsUploadDoc = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);
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
            }} onPress={()=>{
              SetImagePickerModal(false)
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
              SetImagePickerModal(false)
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
          <TouchableOpacity style={{ flex:.1,backgroundColor:colors.light,borderRadius:20,marginHorizontal:'10%',marginBottom:'10%',alignItems:'center',justifyContent:'center' }} onPress={()=>SetImagePickerModal(false)}>
            <Text style={{ fontSize:size.label,color:colors.red,fontFamily:fonts.family }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  const RenderUploadedData = (image,i) => {
    const removePictureFromUploads = (needle) => {
      let index = uploadedPictures.findIndex(item => item.path === needle);
      uploadedPictures.splice(index, 1);
      SetUploadedPicturesCount(uploadedPictures.length)
    }
    return (
      <View style={{ marginTop:heightPercentageToDP(1) }} key={i}>
        <ImageBackground source={{ uri:image.path }} style={{ width:300,height:300,resizeMode:'cover',alignItems:'flex-end',padding:'1%' }}  >
          <TouchableOpacity onPress={()=>{
            removePictureFromUploads(image.path)
          }}>
            <FontAwesome5
              name={'trash'}
              size={30}
              color={colors.red}
              style={{  }}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {ImagePickerModal()}
      {statusBar(colors.light)}
      <HeaderVerifyIdentity barPercent={.3} backButton={true} titleText={'Verify Identity'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal}  />
      <View style={{ flex:.8,paddingHorizontal:'5%'}}>
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(4) }}>
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
        <ScrollView contentContainerStyle={{alignItems:'center' }}>
          {
            uploadedPictures.length > 0?
              uploadedPictures.map((data,i) => RenderUploadedData(data,i))
              :null
          }

        </ScrollView>
      </View>
      <View style={{ flex:.15,alignItems:'center',justifyContent:'center' }} >
        {uploadedPictures.length > 0 ? Button(
          {
            backgroundColor:colors.blue,
            width:widthPercentageToDP(80),
            height:heightPercentageToDP(5),
            borderRadius:50,
            alignItems:'center',
            justifyContent:'center'
          },
          { color:colors.light,textTransform:'capitalize' },
          'Save',
          ()=>{
            navigation.navigate('VerifyDetailsConfirmation');
          }
        ):null}
      </View>
    </View>
  );
};

export default VerifyDetailsUploadDoc;
