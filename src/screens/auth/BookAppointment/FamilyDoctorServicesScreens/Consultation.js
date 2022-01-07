import React, { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { Text, TextInput, View } from "react-native";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import { style } from "../../../../componenets/organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const Consultation = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [showNextButton,SetShowNextButton] = useState(false)

  useEffect(()=> {
    setTimeout(()=>{
      SetShowNextButton(true)
    },5000);
  },[]);
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}

      <HeaderVerifyIdentity barPercent={.5} backButton={true} titleText={'Consultation'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal} />
      <View style={{ flex:.8,padding:'5%',alignItems:'center' }}>
        <Text style={style.commonTitle}>Ask you question in the below box?</Text>
        <View style={{
          marginTop:heightPercentageToDP(2),
          backgroundColor:colors.bckGreen,
          width:widthPercentageToDP(80),
          padding:'1%',
          alignItems:'center',
          borderRadius:20,
        }}>
          <TextInput
            style={{
              width:widthPercentageToDP(70),
              color:colors.dark
            }}
            underlineColorAndroid="transparent"
            placeholder=" ?  Enter Text"
            placeholderTextColor={colors.grey}
            numberOfLines={10}
            multiline={true}
          />
        </View>

      </View>
      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.goBack()
        }} text={'Save'} />
      </View>
    </View>
  );
};

export default Consultation;
