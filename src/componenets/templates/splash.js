import React from 'react';
import { Text, View, StyleSheet, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { appName } from "../organisms/settings";
import statusBar from '../molecules/statusBar'
export const Splash = () => {
  return (
    <View style={styles.mainContainer}>
      {statusBar(colors.lightBlue) }
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={[colors.lightBlue, colors.blue,]} style={styles.linearGradient}>
        <Text style={styles.buttonText }>
          {appName}
        </Text>
      </LinearGradient>
    </View>
  )
  };

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent:'center',
  },
  buttonText: {
    fontSize: size.title,
    fontFamily: fonts.family,
    textAlign: 'center',
    color: colors.light,
    backgroundColor: 'transparent',
    marginBottom:heightPercentageToDP(10)
  },
  mainContainer:{
    flex:1,
    backgroundColor:colors.blue,

  }
});
