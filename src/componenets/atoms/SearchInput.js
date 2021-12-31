import React from "react";
import { TextInput, View } from "react-native";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../organisms/settings";

const SearchInput = ({ Search,SetSearch,placeHolder,color }) => {
  return (
    <View style={{
      flexDirection:'row',
      borderRadius:10,
      backgroundColor:colors.light,
      height:heightPercentageToDP(6),
      marginVertical:heightPercentageToDP(2),
      paddingHorizontal:widthPercentageToDP(3),
      alignItems:'center',
      elevation:5
    }}>
      <FontAwesome5
        name={'search'}
        size={commonIconSize-5}
        color={color}
        style={{  }}
      />
      <TextInput
        style={{
          flex:1,
          marginLeft:widthPercentageToDP(2),
          color:colors.dark
          // color:colors.dark
        }}
        placeholderTextColor={colors.grey}
        onChangeText={SetSearch}
        value={Search}
        autoFocus={false}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default SearchInput;
