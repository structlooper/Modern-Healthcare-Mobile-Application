import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { fonts, size } from "../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Dots from "../../componenets/atoms/dots";
import { IconButton } from "../../componenets/atoms/Buttons";

const introScreenPage = ({ navigation }) => {
  const [step,setStep] = useState(1);
  let icon=(step===3?'check':'chevron-right');
  let btnClr=(step===3?colors.lightGreen:colors.lightBlue);

  const config = {
    velocityThreshold: 0.8,
    directionalOffsetThreshold: 50
  };

  const NextStep = () => {
    switch (step) {
      case 1:
        setStep(2)
        return;
      case 2:
        setStep(3)
        return;
      case 3:
        navigation.navigate('SignUpEmail')
        return;
      default:
        setStep(1)
        return;
    }
  }

  const PrewStep = () => {
    switch (step) {
      case 1:
        setStep(1)
        return;
      case 2:
        setStep(1)
        return;
      case 3:
        setStep(2)
        return;
      default:
        setStep(1)
        return;
    }
  }

  const showContent = () => {
    switch (step){
      case 1:
        return (
          <View style={{ flex:.75,alignItems:'center',justifyContent:'flex-end', marginBottom:heightPercentageToDP(12)}}>
            <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.heading,fontWeight:'bold' }}>Free</Text>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle,marginTop:heightPercentageToDP(5) }}>We believe health care for </Text>
              <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle, fontWeight:'bold',marginTop:heightPercentageToDP(4.8)  }}>All</Text>
            </View>
          </View>
        )
      case 2:
        return (
          <View style={{ flex:.75,alignItems:'center',justifyContent:'flex-end', marginBottom:heightPercentageToDP(12)}}>
            <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.heading,fontWeight:'bold' }}>Convenient</Text>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle,marginTop:heightPercentageToDP(5) }}>It take </Text>

              <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle, fontWeight:'bold',marginTop:heightPercentageToDP(4.8)  }}>ONE STEP </Text>
            <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle,marginTop:heightPercentageToDP(5) }}>to access everything </Text>

            </View>
          </View>
        )
      case 3:
        return (
          <View style={{ flex:.75,alignItems:'center',justifyContent:'flex-end', marginBottom:heightPercentageToDP(12)}}>
            <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.heading,fontWeight:'bold' }}>Quality</Text>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle,marginTop:heightPercentageToDP(5) }}>Caring and experienced physicians</Text>
              {/*<Text style={{ color:colors.light, fontFamily:fonts.family, fontSize:size.subTitle, fontWeight:'bold',marginTop:heightPercentageToDP(4.8)  }}>All</Text>*/}
            </View>
          </View>
        )
    }
  }

  return (
    <View style={styles.mainContainer}>
      {statusBar(colors.lightBlue) }
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={[colors.lightBlue, colors.blue,]} style={styles.linearGradient}>
        <TouchableOpacity style={{ alignItems:'flex-end',padding:'5%' }}
        onPress={()=>navigation.navigate('SignUpEmail')}
        >
          <Text style={{ color:colors.light, fontSize:size.subTitle,fontFamily:fonts.family }}>
            Skip
          </Text>
        </TouchableOpacity>

        <View style={{ flex:1 }}>
          {
            showContent()
          }
          <View style={{ flex:.25, justifyContent:'center' }}>
            <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',paddingHorizontal:widthPercentageToDP(5) }}>
              <View style={{ flex:1 }} >
                {IconButton(
                  {
                    backgroundColor:colors.lightWhite,
                    width:60,height:60,borderRadius:100,
                    justifyContent:'center',alignItems:'center'
                  },
                  'chevron-left',
                  30,
                  colors.light,
                  { marginRight:widthPercentageToDP(1) },
                  ()=>PrewStep()
                )}
              </View>
              <View style={{ flex:1,alignItems:'center' }}>
                <Dots index={step} />
              </View>
              <View style={{ flex:1,alignItems:'flex-end' }} >
                {IconButton(
                  {
                    backgroundColor:btnClr,
                    width:60,height:60,borderRadius:100,
                    justifyContent:'center',alignItems:'center'
                  },
                  icon,
                  30,
                  colors.light,
                  {  },
                  ()=>NextStep()
                )}
              </View>
            </View>
            <View style={{ flex:.5, justifyContent:'center',alignItems:'center' }}>
              {
                step===1?
                  <TouchableOpacity
                    style={{ flex:.5,justifyContent:'center' }}
                                    onPress={()=>navigation.navigate('TermsCondition')}
                  >
                    <Text style={{ color:colors.light,borderBottomColor:colors.lightWhite,borderBottomWidth:1 }}>Terms and Conditions apply</Text>
                  </TouchableOpacity>
                  : <View style={{ flex:.5 }} />
              }
            </View>


          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  buttonText: {
    fontSize: size.title,
    fontFamily: fonts.family,
    textAlign: 'center',
    color: colors.light,
    backgroundColor: 'transparent',
    // marginBottom:heightPercentageToDP(10)
  },
  mainContainer:{
    flex:1,
    backgroundColor:colors.blue,
  },

});

export default introScreenPage;
