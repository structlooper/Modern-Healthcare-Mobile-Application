import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchInput from "../atoms/SearchInput";

const SearchAndFilter = ({ Search,SetSearch,color }) => {
  return (
    <View style={{ flexDirection:'row',marginVertical:heightPercentageToDP(2),alignItems:'center' }}>
      <View style={{ flex:1 }}>
        <SearchInput Search={Search} SetSearch={SetSearch} color={color} placeHolder={'Search a doctor..'} />
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
