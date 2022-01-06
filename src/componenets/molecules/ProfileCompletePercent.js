import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";
import CircularProgress from "react-native-circular-progress-indicator/src/circularProgress/index";
import { commonIconSize } from "../organisms/settings";

const ProfileCompletePercent = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ flex:1,height:heightPercentageToDP(20),backgroundColor:colors.ltnBlue,borderRadius:20,justifyContent:'center',alignItems:'center',marginHorizontal:widthPercentageToDP(1) }}
                      onPress={()=>navigation.navigate('UserAccountGeneral')}>
      <Text style={{ color:colors.light,fontSize:size.text,fontFamily:fonts.family,fontWeight:'bold' }}>Setup Profile</Text>
      <View style={{ marginTop:heightPercentageToDP(1) }}>
        <CircularProgress
          value={commonIconSize}
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

export default ProfileCompletePercent;
