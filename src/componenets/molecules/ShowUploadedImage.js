import React from "react";
import { FlatList, ImageBackground, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colors } from "../../theme/colors";
import { commonIconSize } from "../organisms/settings";

const ShowUploadedImage = ({ uploadedPictures,SetUploadedPicturesCount }) => {
  const removePictureFromUploads = (needle) => {
    let index = uploadedPictures.findIndex(item => item.path === needle);
    uploadedPictures.splice(index, 1);
    SetUploadedPicturesCount(uploadedPictures.length)
  }
  const RenderImageContainer = ({ image}) => {
    return (
      <View style={{ marginTop:heightPercentageToDP(1) }} >
        <ImageBackground source={{ uri:image }} style={{ width:300,height:300,resizeMode:'cover',alignItems:'flex-end',padding:'1%' }}  >
          <TouchableOpacity onPress={()=>{
            removePictureFromUploads(image)
          }}>
            <FontAwesome5
              name={'trash'}
              size={commonIconSize+5}
              color={colors.red}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
  const RenderImages = ({ item }) => <RenderImageContainer image={item.path} />
  return (
    <FlatList
      data={uploadedPictures}
      numColumns={1}
      renderItem={RenderImages}
      keyExtractor={item => item.path}
      style={{ overflow:'scroll' }}
    />
  )
};

export default ShowUploadedImage;
