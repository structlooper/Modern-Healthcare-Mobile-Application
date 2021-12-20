import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/HeaderVerifyIdentity";

const TypeOfAppointments = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity barPercent={.3} backButton={false} titleText={'Types of appointment'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal} />
      <View style={{ flex:.6,padding:'5%' }}>
        <Text>
          Types of apppoint
        </Text>
      </View>
      <View style={{ flex:.2 }} />
    </View>
  );
};

export default TypeOfAppointments;
