import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../organisms/settings";
import { style } from "../../organisms/style";

const RemoveItemButton = ({ action,text }) => {
  return (
    <TouchableOpacity
      style={{
        height: heightPercentageToDP(5),
        width: widthPercentageToDP(45),
        borderRadius: 10,
        backgroundColor: colors.red,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        padding: "2%",
      }}
      onPress={action}
    >
      <View style={{ flex: .1 }} />
      <View style={{ flex: .2 }}>
        <FontAwesome5
          name={"minus"}
          size={commonIconSize - 5}
          color={colors.light}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[style.commonText, { color: colors.light, fontWeight: "bold" }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RemoveItemButton;
