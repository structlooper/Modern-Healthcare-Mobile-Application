import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import statusBar from "../molecules/statusBar";
import { colors } from "../../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { appName } from "../organisms/settings";
import { fonts, size } from "../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Instruction from "../molecules/instruction";
import { Button } from "../atoms/Buttons";

const Intro = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      {statusBar(colors.lightBlue) }
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={[colors.lightBlue, colors.blue,]} style={styles.linearGradient}>
        <View style={{ flex:.85,justifyContent:'center' }}>
          <Text style={styles.buttonText }>
            {appName}
          </Text>
        </View>
        <View style={{ flex:.1 }}>
          <Instruction navigation={navigation} />
        </View>
        <View style={{ alignItems:'center',flex:.1 }}>
          {Button(
            {
              backgroundColor:colors.light,
              width:widthPercentageToDP(80),
              height:heightPercentageToDP(5),
              borderRadius:50,
              alignItems:'center',
              justifyContent:'center'
            },
            { color:colors.blue,textTransform:'uppercase' },
            'Get started',
            ()=>{
              navigation.navigate('IntroScreenPage');
            }
          )}
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

  }
});
export default Intro;
