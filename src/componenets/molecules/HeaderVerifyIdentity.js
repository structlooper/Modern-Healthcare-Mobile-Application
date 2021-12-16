import React from "react";
import { colors } from "../../theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Bar } from "react-native-progress";
import { size } from "../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HeaderVerifyIdentity = ({barPercent,backButton}) => {
  return (
    <View style={{ flex:.25,alignItems:'center'
      ,borderWidth:.4,borderRadius:20,borderTopColor:'transparent',borderColor:colors.grey}}>
      <View style={{  marginTop:heightPercentageToDP(8) }}>
        <Bar progress={barPercent} width={widthPercentageToDP(70)}
             color={colors.blue}
             height={heightPercentageToDP(1.5)}
             borderRadius={100}
        />
        <View style={{ flexDirection:'row',marginTop:heightPercentageToDP(5) }}>
          <View style={{ flex:.35}} />
          <View style={{ flex:1 }}>
            <Text style={{ fontSize:size.subTitle, color:colors.dark }}>Verify Identity</Text>
          </View>
          <TouchableOpacity style={{ flex:.3 }} onPress={()=>console.log('cancel modal')}>
            <FontAwesome5
              name={'times'}
              size={30}
              color={colors.dark}
              style={{  }}
            />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default HeaderVerifyIdentity;
