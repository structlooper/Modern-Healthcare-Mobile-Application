import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../theme/colors";

const ShowUploadedImage = ({ image,index,uploadedPictures,SetUploadedPicturesCount }) => {
  const removePictureFromUploads = (needle) => {
    let index = uploadedPictures.findIndex(item => item.path === needle);
    uploadedPictures.splice(index, 1);
    SetUploadedPicturesCount(uploadedPictures.length)
  }
  return (
    <View style={{ marginTop:heightPercentageToDP(1) }} key={index}>
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
};

export default ShowUploadedImage;
