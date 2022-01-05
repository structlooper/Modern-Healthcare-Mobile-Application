import React from "react";
import { Text, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import { colors } from "../../../../theme/colors";
import ToggleSwitch from "toggle-switch-react-native";

const ToggleContainer = ({ label,toggleState }) => {
  return (

      <View style={{
        flexDirection:'row',
        borderWidth:.5,
        borderColor:colors.grey,
        padding:'3%',
        paddingHorizontal:'5%',
        borderRadius:50,
        alignItems:'center',
        marginBottom:'2%'
      }}>
        <View style={{ flex:1 }}>
          <Text style={[style.commonTitle,{textTransform:'capitalize'}]}>{label}</Text>
        </View>
        <View>
          <ToggleSwitch
            isOn={toggleState.state}
            onColor={colors.blue}
            offColor={colors.lightGrey}
            labelStyle={{ color: "black", fontWeight: "900" }}
            size="large"
            onToggle={() => toggleState.setState(!toggleState.state)}
          />
        </View>
      </View>
  );
};

export default ToggleContainer;
