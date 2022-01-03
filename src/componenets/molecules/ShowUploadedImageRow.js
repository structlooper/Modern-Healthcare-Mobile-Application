import React from "react";
import { FlatList, ImageBackground, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../organisms/settings";

const ShowUploadedImageRow = ({ uploadedPictures,SetUploadedPicturesCount }) => {
  const removePictureFromUploads = (needle) => {
    let index = uploadedPictures.findIndex(item => item.path === needle);
    uploadedPictures.splice(index, 1);
    SetUploadedPicturesCount(uploadedPictures.length)
  }
  const RenderImageContainer = ({ image}) => {
    return (
      <View style={{ margin:'1%',width:widthPercentageToDP(30),overflow:'hidden' }}>
        <ImageBackground source={{ uri:image }} style={{ width:150,height:150,resizeMode:'contain',padding:'1%' }}  >
          <TouchableOpacity
            style={{
              height:30,
              width:30,
              borderRadius:100,
              backgroundColor:colors.bckRed,
              alignItems:'center',
              justifyContent:'center',
            }}
            onPress={()=>{
              removePictureFromUploads(image)
            }}>
            <FontAwesome5
              name={'times'}
              size={commonIconSize}
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
      numColumns={2}
      renderItem={RenderImages}
      keyExtractor={item => item.path}
      style={{ overflow:'scroll' }}
    />
  );
};

export default ShowUploadedImageRow;
