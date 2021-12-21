import React, { useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/HeaderVerifyIdentity";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ScrollView, Text, View } from "react-native";
import { Button, GradientButton } from "../../../../componenets/atoms/Buttons";
import { fonts, size } from "../../../../theme/fonts";

const SymptomsPage = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [showNextButton,SetShowNextButton] = useState(false)

  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.5}
        backButton={true}
        titleText={'Symptoms'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
      />
      <View style={{ flex:.7,paddingHorizontal:widthPercentageToDP(5)}}>
        <ScrollView contentContainerStyle={{ marginVertical:heightPercentageToDP(2) }}>
          <View style={{ alignItems:'center',justifyContent:'center' }}>
            <Text style={{ fontSize:size.label, color:colors.grey,fontFamily:fonts.family }}>What are your symptoms?</Text>
          </View>
        </ScrollView>
      </View>

      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }} >
        {
          showNextButton?
            GradientButton(
              {
                width:widthPercentageToDP('88%'),
                height:heightPercentageToDP(5),
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:.5,
                borderColor:'transparent',
              },
              [colors.ltnGreen, colors.lightGreen],
              {
                width:widthPercentageToDP('88%'),
                height:heightPercentageToDP(5),
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
              },
              { color:colors.light,textTransform:'uppercase' },
              'Save',
              ()=>{
                navigation.goBack()
              }
            )
            :
            Button(
              {
                backgroundColor:colors.light,
                width:widthPercentageToDP(88),
                height:heightPercentageToDP(5),
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
                elevation:3,
                borderWidth:.5,
                borderColor:colors.lightGrey,
              },
              { color:colors.grey,textTransform:'uppercase' },
              'Save',
              ()=>{}
            )
        }
      </View>
    </View>
  );
};

export default SymptomsPage;
