import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchAndFilter = ({ Search,SetSearch,color }) => {
  return (
    <View style={{ flexDirection:'row',marginVertical:heightPercentageToDP(2),alignItems:'center' }}>
      <View style={{ flex:1 }}>
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
            size={20}
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
            placeholder={'Search a doctor..'}
          />
        </View>
      </View>
      <View style={{ flex:.2,alignItems:'flex-end' }}>
        <TouchableOpacity style={{ width:50,height:50,backgroundColor:colors.light,borderRadius:100,elevation:10,alignItems:'center',justifyContent:'center' }}>
          <FontAwesome5
            name={'list-ul'}
            size={25}
            color={colors.dark}
            style={{  }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchAndFilter;
