import React from "react";
import { colors } from "../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View } from "react-native";

const SuccessIcon = () => {
  return (
    <View style={{ justifyContent:'center',alignItems:'center',height:120, width:120, backgroundColor:colors.ltnGreen,borderRadius:100 }}>
      <FontAwesome5
        name={'check'}
        size={70}
        color={colors.light}
        style={{  }}
      />
    </View>
  );
};

export default SuccessIcon;
