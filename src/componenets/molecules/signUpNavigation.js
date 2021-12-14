import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";

const SignUpNavigation = ({ navigation }) => {
  return (
    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',justifyContent:'center' }}
                      onPress={()=>navigation.navigate('SignUpEmail')}
    >
      <Text style={{ color:colors.dark }}>Don't have an account?</Text>
      <View style={{ borderBottomColor:colors.dark,borderBottomWidth:.5 }}

      >
        <Text style={{ color:colors.dark, }}> Sign Up</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SignUpNavigation;
