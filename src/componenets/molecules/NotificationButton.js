import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../theme/colors";

const NotificationButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={{  }} onPress={() => navigation.navigate('NotificationList')}>
      <View style={{ flexDirection:'row',marginRight:widthPercentageToDP(2) }}>
        <View style={{  }}>
          <MaterialCommunityIcons
            name={ "bell" }
            color={colors.light}
            size={33}
          />
        </View>
        <View style={{
          borderColor:colors.light,borderWidth:1,
          marginLeft:-16,backgroundColor:colors.lightGreen,height:20,width:20,borderRadius:50,alignItems:'center',justifyContent:'center'
        }}>
          <Text style={{ color:colors.light }}>3</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationButton;
