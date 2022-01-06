import React from "react";
import { View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";

const NotificationList = ({ navigation }) => {
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'Notifications'} navigation={navigation}  />
      <View style={{ flex:.85,alignItems:'center' }}>
      </View>
    </View>
  );
};

export default NotificationList;
