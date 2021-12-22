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
import UploadImageModal from "../../../../componenets/molecules/UploadImageModal";

const VerifyDetailsUploadDoc = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);
  const [imagePickerModal,SetImagePickerModal] = useState(false);
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
      <UploadImageModal
        modalState={imagePickerModal}
        SetModalState={SetImagePickerModal}
        uploadedPictures={uploadedPictures}
        SetUploadedPictures={SetUploadedPictures}
        SetUploadedPicturesCount={SetUploadedPicturesCount}
                        />
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
