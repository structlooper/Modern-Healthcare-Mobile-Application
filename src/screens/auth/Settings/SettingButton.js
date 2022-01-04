import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../theme/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { commonIconSize } from "../../../componenets/organisms/settings";
import { style } from "../../../componenets/organisms/style";

const SettingButton = ({ title,action,icon }) => {
  return (
    <TouchableOpacity style={{ flexDirection:'row',marginTop:heightPercentageToDP(3),paddingHorizontal:'5%',alignItems:'center' }} onPress={action}>
      <View style={{
        flex:.3,
      }}>
        <View style={{
          backgroundColor:colors.lightGrey,
          height:heightPercentageToDP(7),
          width:widthPercentageToDP(15),
          borderRadius:10,
          alignItems:'center',
          justifyContent:'center',
          // elevation:5
        }}>
          <MaterialCommunityIcons
            name={icon}
            color={colors.bDarkPurple}
            size={commonIconSize*1.5}
          />
        </View>

      </View>
      <View style={{ flex:.6 }}>
        <Text style={[style.commonTitle,{fontWeight:'bold',textTransform:'capitalize'}]}>{title}</Text>
      </View>
      <View style={{ flex:.1 }}>
        <MaterialCommunityIcons
          name={"chevron-right"}
          color={colors.grey}
          size={commonIconSize*1.2}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SettingButton;
