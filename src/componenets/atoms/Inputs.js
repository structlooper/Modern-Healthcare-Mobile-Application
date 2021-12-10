import React from "react";
import { TextInput, View } from "react-native";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export const ThemeTextInput = (email,setEmail,placeHolder,iconShow,autoFocus = false) => {
  return (
    <View style={{
      flexDirection:'row',
      borderRadius:10,
      backgroundColor:colors.bckGreen,
      height:heightPercentageToDP(7),
      paddingHorizontal:widthPercentageToDP(3),
      alignItems:'center'
    }}>
      <TextInput
        style={{
          flex:1,
          color:colors.dark
        }}
        onChangeText={setEmail}
        value={email}
        autoFocus={autoFocus}
        placeholder={placeHolder}
      />
      {
        iconShow?
          <FontAwesome5
            name={'check'}
            size={30}
            color={colors.lightGreen}
            style={{  }}
          />
        :null
      }

    </View>
  );
};

