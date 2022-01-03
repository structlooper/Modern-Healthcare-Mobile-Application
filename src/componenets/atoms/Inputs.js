import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../organisms/settings";

export const ThemeTextInput = (state,setState,placeHolder,iconShow = false,autoFocus = false) => {
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
        placeholderTextColor={colors.grey}
        onChangeText={setState}
        value={state}
        autoFocus={autoFocus}
        placeholder={placeHolder}
      />
      {
        iconShow?
          <FontAwesome5
            name={'check'}
            size={commonIconSize+5}
            color={colors.lightGreen}
            style={{  }}
          />
        :null
      }

    </View>
  );
};
export const ThemeIconTextInput = (state,setState,placeHolder,iconShow,autoFocus = false) => {
  return (
    <View style={{
      flexDirection:'row',
      borderRadius:10,
      backgroundColor:colors.lightGrey,
      height:heightPercentageToDP(7),
      marginVertical:heightPercentageToDP(1),
      paddingHorizontal:widthPercentageToDP(3),
      alignItems:'center',
      elevation:5
    }}>
      <TextInput
        style={{
          flex:1,
          color:colors.dark
        }}
        placeholderTextColor={colors.grey}
        onChangeText={setState}
        value={state}
        autoFocus={autoFocus}
        placeholder={placeHolder}


      />
      {
        iconShow?
          <FontAwesome5
            name={'check'}
            size={commonIconSize+5}
            color={colors.lightGreen}
            style={{  }}
          />
        :null
      }

    </View>
  );
};
export const ThemeIconNumericInput = (state,setState,placeHolder,iconShow,autoFocus = false) => {
  return (
    <View style={{
      flexDirection:'row',
      borderRadius:10,
      backgroundColor:colors.lightGrey,
      height:heightPercentageToDP(7),
      marginVertical:heightPercentageToDP(1),
      paddingHorizontal:widthPercentageToDP(3),
      alignItems:'center',
      elevation:5
    }}>
      <TextInput
        style={{
          flex:1,
          color:colors.dark
        }}
        placeholderTextColor={colors.grey}
        onChangeText={setState}
        value={state}
        autoFocus={autoFocus}
        keyboardType={'numeric'}
        placeholder={placeHolder}
      />
      {
        iconShow?
          <FontAwesome5
            name={'check'}
            size={commonIconSize+5}
            color={colors.lightGreen}
            style={{  }}
          />
        :null
      }

    </View>
  );
};
export const ThemePasswordInput = (state,setState,placeHolder,showPass,changeShowPassword,autoFocus = false) => {
  let iconColor = showPass?colors.lightGreen:colors.grey
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
        onChangeText={setState}
        value={state}
        placeholderTextColor={colors.grey}
        autoFocus={autoFocus}
        placeholder={placeHolder}
        secureTextEntry={!showPass}
      />
      {/*{*/}
      {/*  iconShow?*/}
      <TouchableOpacity
      onPress={()=>changeShowPassword(!showPass)}
      >
        <FontAwesome5
          name={'eye'}
          size={20}
          color={iconColor}
          style={{  }}
        />

      </TouchableOpacity>
        {/*  :null*/}
      {/*}*/}

    </View>
  );
};

