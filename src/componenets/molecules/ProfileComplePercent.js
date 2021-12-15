import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";
import CircularProgress from "react-native-circular-progress-indicator/src/circularProgress/index";

const ProfileComplePercent = ({ navigation }) => {
  return (
    <TouchableOpacity style={{ flex:1,height:heightPercentageToDP(20),backgroundColor:colors.ltnBlue,borderRadius:20,justifyContent:'center',alignItems:'center',marginHorizontal:widthPercentageToDP(1) }} onPress={()=>console.log('profile screen')}>
      <Text style={{ color:colors.light,fontSize:size.text,fontFamily:fonts.family,fontWeight:'bold' }}>Setup Profile</Text>
      <View style={{ marginTop:heightPercentageToDP(1) }}>
        <CircularProgress
          value={25}
          inActiveStrokeColor={colors.light}
          activeStrokeColor={colors.light}
          inActiveStrokeOpacity={0.2}
          textColor={'#fff'}
          valueSuffix={'%'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileComplePercent;
