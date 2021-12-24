import React, { useState } from "react";
import { View } from "react-native";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/HeaderVerifyIdentity";
import { widthPercentageToDP } from "react-native-responsive-screen";
import SearchInput from "../../../../componenets/atoms/SearchInput";

const ServiceList = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [searched,SetSearched] = useState('');
  return (
    <View style={{ flex:1,backgroundColor:colors.light }} >
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.5}
        backButton={true}
        titleText={'Select a specialist'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
        color={colors.pink}
        bckColor={colors.bckPink}
      />
      <View style={{ flex:.8,paddingHorizontal:widthPercentageToDP(5)}}>
        <View>
          <SearchInput Search={searched} color={colors.pink} SetSearch={SetSearched} placeHolder={'Search specialist..'} />
        </View>
      </View>

      <View style={{ flex:.2 }}>

      </View>
    </View>
  );
};

export default ServiceList;
