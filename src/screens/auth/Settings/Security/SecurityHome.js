import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";
import { style } from "../../../../componenets/organisms/style";

const SecurityHome = ({ navigation }) => {
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'Security'} navigation={navigation} />
      <View style={{ flex:.85 }}>
        <View style={{ padding:'5%',marginTop:'5%' }}>
          <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Password</Text>
          <TouchableOpacity style={{
            backgroundColor:colors.blue,
            width:'60%',
            padding:'3%',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            marginTop:'5%'
          }} onPress={()=>navigation.navigate('ChangePassword')}>
            <Text style={[style.commonTitle,{color:colors.light}]}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SecurityHome;
