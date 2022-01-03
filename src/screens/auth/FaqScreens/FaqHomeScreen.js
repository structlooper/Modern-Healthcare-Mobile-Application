import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import HeaderButton from "./HeaderButton";
import { style } from "../../../componenets/organisms/style";
import { ThemeTextInput } from "../../../componenets/atoms/Inputs";
import { Button } from "../../../componenets/atoms/Buttons";
import SuccessIcon from "../../../componenets/atoms/successIcon";

const FaqHomeScreen = ({ navigation }) => {
  const [askQuestion,SetAskQuestion] = useState('');
  const [formStep,SetFormStep] = useState(1);

  const CheckFormStatus = () => {
      switch (formStep) {
        case 2:
          setTimeout(()=>{
            SetFormStep(3)
          },5000)
          return <StepTwoForm />;
       case 3:
         return <StepThreeForm />;
        default:
          return <StepTwoForm />;
      }

  }

  const StepTwoForm = () => {
    return (
      <View style={{
        flex:.6,
        backgroundColor:colors.transWhite,
        borderRadius:20,
        borderWidth:1,
        alignItems:'center',justifyContent:'center',
        borderColor:colors.light }}>
        <Text style={[style.headerHeading,{color:colors.bDarkPurple}]}>Question Submitted</Text>
        <Text style={[style.commonTitle,{color:colors.bDarkPurple,marginTop:heightPercentageToDP(1)}]}>we will notify you.</Text>
        <View style={{ marginTop:heightPercentageToDP(2) }}>
          <SuccessIcon />
        </View>
      </View>
    )
  }

  const StepThreeForm = () => {
    return (
      <>
        <View style={{
          flex:.3,
          backgroundColor:colors.transWhite,
          borderRadius:20,
          borderWidth:1,
          padding:'5%',
          paddingHorizontal:widthPercentageToDP(5),
          borderColor:colors.light }}>
          <Text style={[style.commonTitle,{color:colors.bDarkPurple,fontWeight:'bold'}]}>Question</Text>
          <Text style={[style.commonText,{color:colors.bDarkPurple,fontWeight:'bold',marginTop:heightPercentageToDP(2)}]}>
            My referral hasn't arrived yet?
          </Text>

        </View>
        <View style={{
          flex:.3,
          marginTop:heightPercentageToDP(1),
          backgroundColor:colors.transWhite,
          borderRadius:20,
          borderWidth:1,
          padding:'5%',
          paddingHorizontal:widthPercentageToDP(5),
          borderColor:colors.light }}>
          <Text style={[style.commonTitle,{color:colors.bDarkPurple,fontWeight:'bold'}]}>Response</Text>
          <Text style={[style.commonText,{color:colors.bDarkPurple,fontWeight:'bold',marginTop:heightPercentageToDP(2)}]}>
            Sorry for inconvenience, We ll provide soon.
          </Text>

        </View>
        <View style={{ flex:.3,alignItems:'center',justifyContent:'center' }}>
          {
              Button(
                {
                  backgroundColor:colors.blue,
                  width:widthPercentageToDP(90),
                  height:heightPercentageToDP(5),
                  borderRadius:50,
                  alignItems:'center',
                  justifyContent:'center',
                  elevation:5
                },
                { color:colors.light,textTransform:'capitalize' },
                'ask a new question',
                ()=>{
                  SetFormStep(1);
                })
          }
        </View>
      </>
    )
  }
  return (
    <View style={{ flex:1 }}>
      {statusBar(colors.light) }
      <ImageBackground source={require('../../../assets/gifs/faq_back.gif')} style={{ flex:1 }} imageStyle={{width:'100%',height:'100%',resizeMode:'stretch'}}>
        <View style={{ flex:1,padding:'5%' }}>
          <View style={{ height:heightPercentageToDP(15) }}>
            <HeaderButton navigation={navigation} />
          </View>
          <View style={{ height:heightPercentageToDP(60) }}>
            {
              formStep === 1?
                (
                  <>
                  <View style={{
                  flex:.6,
                  backgroundColor:colors.transWhite,
                  borderRadius:20,
                  borderWidth:1,
                  alignItems:'center',justifyContent:'center',
                  borderColor:colors.light }}>
                  <Text style={[style.headerHeading,{color:colors.bDarkPurple}]}>Submit a Question</Text>
                  <View style={{ width:widthPercentageToDP(70),marginTop:heightPercentageToDP(5) }}>
                    {
                      ThemeTextInput(
                        askQuestion,SetAskQuestion,'Type something...'
                      )
                    }
                  </View>
                </View>
                    <View style={{ flex:.1,alignItems:'center',justifyContent:'center' }}>
                      {
                        askQuestion.length > 3?
                          Button(
                            {
                              backgroundColor:colors.lightGreen,
                              width:widthPercentageToDP(90),
                              height:heightPercentageToDP(5),
                              borderRadius:50,
                              alignItems:'center',
                              justifyContent:'center',
                              elevation:5
                            },
                            { color:colors.light,textTransform:'capitalize' },
                            'Submit',
                            ()=>{
                              SetAskQuestion('')
                              SetFormStep(2);
                            }):null
                      }
                    </View>
                  </>
                  ):
              <CheckFormStatus />}
          </View>
          <View style={{ height:heightPercentageToDP(10),alignItems:'center',justifyContent:'center' }}>
            <Text style={[style.commonTitle,{color:colors.light,textAlign:'center'}]}>We will attempt to get back to you with in 2 business days.</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FaqHomeScreen;
