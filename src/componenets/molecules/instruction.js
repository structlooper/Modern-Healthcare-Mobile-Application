import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../theme/colors";

const Instruction = ({ navigation }) => {
  return (
    <View>
      <View style={{ alignItems:'center',marginHorizontal:widthPercentageToDP(10),flexDirection:'row' }}>
        <View style={{ }}>
          <Text style={{ color:colors.light, textAlign:'center'}}>By tapping Get Started, You agree to our </Text>
        </View>
        <TouchableOpacity style={{ justifyContent:'center'}} onPress={()=>{
          navigation.navigate('TermsCondition')
        }}>
          <Text style={{ color:colors.purple }}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent:'center',marginHorizontal:widthPercentageToDP(10),flexDirection:'row' }}>
        <View style={{  }}>
          <Text style={{ color:colors.light, textAlign:'center' }}> and  </Text>
        </View>
        <TouchableOpacity style={{ justifyContent:'center'}} onPress={()=>{
          navigation.navigate('PrivacyPage')
        }}>
          <Text style={{ color:colors.purple }}>
            Privacy Notice
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{ color:colors.light, textAlign:'center' }}>.</Text>
        </View>
      </View>
    </View>
  );
};

export default Instruction;
