import React, { useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { ScrollView, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Button } from "../../../../componenets/atoms/Buttons";
import UploadImageModal from "../../../../componenets/molecules/Modals/UploadImageModal";
import ShowUploadedImage from "../../../../componenets/molecules/ShowUploadedImage";
import { commonIconSize } from "../../../../componenets/organisms/settings";

const VerifyDetailsUploadDoc = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);
  const [imagePickerModal,SetImagePickerModal] = useState(false);

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
      <HeaderVerifyIdentity barPercent={.3} backButton={true} titleText={'Verify Identity'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal} color={colors.blue} />
      <View style={{ flex:.9,paddingHorizontal:'5%'}}>
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
              size={commonIconSize+5}
              color={colors.dark}
              style={{  }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex:1, alignItems:'center' }}>
          {
            uploadedPictures.length > 0?
               <ShowUploadedImage
                uploadedPictures={uploadedPictures}
                SetUploadedPicturesCount={SetUploadedPicturesCount}
                />
              :null
          }

        </View>
      </View>
      <View style={{ flex:.1,alignItems:'center',justifyContent:'center' }} >
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
