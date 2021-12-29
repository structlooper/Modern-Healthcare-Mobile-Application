import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import statusBar from "../../../../componenets/molecules/statusBar";
import { colors } from "../../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Button } from "../../../../componenets/atoms/Buttons";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { fonts, size } from "../../../../theme/fonts";

const VerifyDetailsInfo = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}

      <HeaderVerifyIdentity barPercent={.1} backButton={false} titleText={'Verify Identity'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal} color={colors.blue} />
      <View style={{ flex:.8,padding:'5%' }}>
        <View style={{ height:heightPercentageToDP(40) }}>
          <Image source={require('../../../../assets/images/23.png')} style={{ width:'100%', height:'100%',resizeMode:'contain' }} />
        </View>
        <View style={{ paddingHorizontal:widthPercentageToDP('12') }}>
          <Text style={{ textAlign:'center',fontSize:size.label,fontFamily:fonts.family,color:colors.ltnBlue }}>
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
            navigation.navigate('VerifyDetailsList');
          }
        )}
      </View>

    </View>
  );
};

export default VerifyDetailsInfo;
