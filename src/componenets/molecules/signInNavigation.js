import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";

const SignInNavigation = ({ navigation }) => {
  return (
    <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',justifyContent:'center' }}
                      onPress={()=>navigation.navigate('LoginScreen')}
    >
      <Text style={{ color:colors.dark }}>Already have an account?</Text>
      <View style={{ borderBottomColor:colors.dark,borderBottomWidth:.5 }}

      >
        <Text style={{ color:colors.dark, }}> Sign in</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SignInNavigation;
