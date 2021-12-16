import React from "react";
import { Text, View } from "react-native";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Button } from "../../../componenets/atoms/Buttons";
import HeaderVerifyIdentity from "../../../componenets/molecules/HeaderVerifyIdentity";
import { fonts, size } from "../../../theme/fonts";

const VerifyDetailsInfo = ({ navigation }) => {
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}

      <HeaderVerifyIdentity barPercent={.1} backButton={false} />
      <View style={{ flex:.6,padding:'10%' }}>
        <View style={{ height:heightPercentageToDP(40) }}>

        </View>
        <View>
          <Text style={{ textAlign:'center',fontSize:size.subTitle,fontFamily:fonts.family,color:colors.ltnBlue }}>
            Please verify your identity to ensure that we can prescribe medication and discuss your medical history with you.
          </Text>

        </View>

      </View>
      <View style={{ flex:.2, alignItems:'center',justifyContent:'center' }}>
        {Button(
          {
            backgroundColor:colors.blue,
            width:widthPercentageToDP(80),
            height:heightPercentageToDP(5),
            borderRadius:50,
            alignItems:'center',
            justifyContent:'center'
          },
          { color:colors.light,textTransform:'capitalize' },
          'Verify now',
          ()=>{
            navigation.navigate('IntroScreenPage');
          }
        )}
      </View>

    </View>
  );
};

export default VerifyDetailsInfo;
