import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import UploadImageModal from "../../../../componenets/molecules/Modals/UploadImageModal";
import { style } from "../../../../componenets/organisms/style";
import { fonts, size } from "../../../../theme/fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ShowUploadedImage from "../../../../componenets/molecules/ShowUploadedImage";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import { commonIconSize } from "../../../../componenets/organisms/settings";

const NoteFormsScreen = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);
  const [imagePickerModal,SetImagePickerModal] = useState(false);
  const [showNextButton,SetShowNextButton] = useState(false)


  useEffect(()=> {
    setTimeout(()=>{
      SetShowNextButton(true)
    },5000);
  },[]);
  return (
    <View style={{ flex:1,backgroundColor:colors.light  }}>
      <UploadImageModal
        modalState={imagePickerModal}
        SetModalState={SetImagePickerModal}
        uploadedPictures={uploadedPictures}
        SetUploadedPictures={SetUploadedPictures}
        SetUploadedPicturesCount={SetUploadedPicturesCount}
      />

      <View style={{ flex:.9 }} >
        {statusBar(colors.light)}

        <HeaderVerifyIdentity
          barPercent={.5}
          backButton={true}
          titleText={'Note/Forms'}
          navigation={navigation}
          modalState={exitModal}
          SetModalSate={SetExitModal}
        />
        <View style={{margin:'6%' }}>
          <Text style={style.commonTitle}>Add Photo</Text>
          <Text style={{ fontSize:size.text,fontFamily:fonts.family,color:colors.grey,marginVertical:heightPercentageToDP(1) }}>Upload a photo of your note/form.</Text>
          <TouchableOpacity style={{
            width:80,height:80,
            borderRadius:10,
            borderColor:colors.dark,
            elevation:20,
            backgroundColor:colors.light,
            alignItems:'center',
            justifyContent:'center',
            // marginTop:heightPercentageToDP(1)
          }} onPress={()=>SetImagePickerModal(true)}>
            <FontAwesome5
              name={'camera'}
              size={commonIconSize+5}
              color={colors.blue}
              style={{  }}
            />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={{alignItems:'center' }} style={{ height:heightPercentageToDP(70) }}>
            {
              uploadedPictures.length > 0?
                uploadedPictures.map((data,i) => {
                  return <ShowUploadedImage
                    uploadedPictures={uploadedPictures}
                    SetUploadedPicturesCount={SetUploadedPicturesCount}
                    index={i} image={data} />})
                :null
            }

          </ScrollView>
        </View>
      </View>
      <View style={{ flex:.1,alignItems:'center',justifyContent:'center' }} >
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.goBack()
        }} text={'Save'} />
      </View>
    </View>
      );


};

export default NoteFormsScreen;
