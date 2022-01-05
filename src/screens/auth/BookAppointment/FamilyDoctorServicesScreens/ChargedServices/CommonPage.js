import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../../theme/colors";
import statusBar from "../../../../../componenets/molecules/statusBar";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import ChargedServicePageHeader from "../../../../../componenets/molecules/Headers/ChargedServicePageHeader";
import { style } from "../../../../../componenets/organisms/style";
import BottomButton from "../../../../../componenets/molecules/BottomButton";

const CommonPage = ({ navigation,route }) => {
  const {name} = route.params;
  const [header,SetHeader] = useState('')
  const [body,SetBody] = useState('')
  const [showNextButton,SetShowNextButton] = useState(false)

  useEffect(()=>{
    CheckHeaderBody()
  })
  const CheckHeaderBody = () => {
    switch (name) {
      case 'Travel-Vaccine':
        SetHeader('Traveled Vaccination is not covered by OHIP')
        SetBody('There will be a fee of $50 for a travel consultation. Vaccination are extra and have to be given in person preferably at our medical clinic please enter your payment information on next page.')
        return;
      case "Driver's Physical":
        SetHeader("Driver's Physical is not covered by OHIP")
        SetBody("There will be a fee of $50 for a driver's physical consultation. Please enter your payment information on next page.")
        return;
      case "Pre-employment Physical":
        SetHeader(name+" is not covered by OHIP")
        SetBody("There will be a fee of $50 for a "+ name +". Please enter your payment information on next page.")
        return;
      default:
        SetHeader(name+" is not covered by OHIP")
        SetBody("There will be a fee of $50 for a "+ name +". Please enter your payment information on next page.")
        return;
    }
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <ChargedServicePageHeader
        backButton={true}
        titleText={header}
        navigation={navigation}
        bottomTextShow={false}
      />
      <View style={{ flex:.8,paddingHorizontal:widthPercentageToDP(5)}}>
        <View style={{ marginHorizontal:widthPercentageToDP(10),alignItems:'center',marginVertical:heightPercentageToDP(5) }}>
          <Text style={[style.commonTitle,{ textAlign:'center',alignSelf:'auto',lineHeight: heightPercentageToDP(3), }]}>
            {body}
          </Text>



        </View>
      </View>
      <View style={{ flex:.2,alignItems:'center',justifyContent:'flex-end',marginBottom:heightPercentageToDP(2) }} >
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.navigate('VerificationOtpPage')
        }} text={'Enter payment'} />
      </View>
    </View>
  );
};

export default CommonPage;
