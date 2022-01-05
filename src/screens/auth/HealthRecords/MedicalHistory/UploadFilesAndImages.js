import React, { useState } from "react";
import {  Text, TouchableOpacity, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../../componenets/organisms/settings";
import { colors } from "../../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ImagePickerFunction, LaunchCameraFunction } from "../../../../componenets/organisms/functions";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import ShowUploadedImageRow from "../../../../componenets/molecules/ShowUploadedImageRow";

const UploadFilesAndImages = ({ navigation }) => {
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);

   return (
    <View style={style.mainContainer}>
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Documents'} backButton={true} iconType={'red'}/>

      <View style={{ flex:.3 }}>
        <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
          <TouchableOpacity style={{
            width:widthPercentageToDP(30),
            height:heightPercentageToDP(15),
            backgroundColor:colors.light,
            elevation:5,
            borderRadius:10,
            alignItems:'center',justifyContent:'center' }} onPress={()=>{
            ImagePickerFunction(uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount).then()
          }}>
            <FontAwesome5
              name={'cloud-upload-alt'}
              size={commonIconSize+20}
              color={colors.grey}
            />
            <View style={{ marginTop:heightPercentageToDP(1) }}>
              <Text style={style.commonTitle}>Upload</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flex:.5 }} />
          <TouchableOpacity style={{
            width:widthPercentageToDP(30),
            height:heightPercentageToDP(15),
            backgroundColor:colors.light,
            elevation:5,
            borderRadius:10,
            alignItems:'center',justifyContent:'center' }} onPress={()=>{
            LaunchCameraFunction(uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount).then()
          }}>
            <FontAwesome5
              name={'camera'}
              size={commonIconSize+20}
              color={colors.grey}
            />
            <View style={{ marginTop:heightPercentageToDP(1) }}>
              <Text style={style.commonTitle}>Take</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex:.6 }}>
        {/*<ScrollView contentContainerStyle={{ paddingHorizontal:widthPercentageToDP(6)}}>*/}
          {
            uploadedPictures.length > 0?

              <View style={{ flex:1,backgroundColor:colors.lightGrey,paddingVertical:heightPercentageToDP(2),alignItems:'center' }}>

                <ShowUploadedImageRow SetUploadedPicturesCount={SetUploadedPicturesCount} uploadedPictures={uploadedPictures} />

              </View>

              :null
          }

        {/*</ScrollView>*/}
      </View>
      <View style={{ flex:.1,alignItems:'center',justifyContent:'center' }}>
        <BottomButton action={()=>navigation.goBack()} gradientColors={[colors.lightGreen,colors.ltnGreen]} showButton={(uploadedPicturesCount > 0)} text={'Save'} />
      </View>
    </View>
  );
};

export default UploadFilesAndImages;
