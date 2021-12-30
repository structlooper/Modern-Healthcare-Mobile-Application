import React from "react";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchInput from "../atoms/SearchInput";
import DoctorFilterModal from "./Modals/DoctorFilterModal";
import { commonIconSize } from "../organisms/settings";

const SearchAndFilter = ({ Search,SetSearch,color,placeHolder = 'a doctor',filterShowState,SetFilterShowState,filterAppliedState,countryModalState }) => {

  return (
    <View style={{ flexDirection:'row',marginVertical:heightPercentageToDP(2),alignItems:'center' }}>
     <DoctorFilterModal
       state={filterShowState}
       SetState={SetFilterShowState}
       filterAppliedState={filterAppliedState}
       countryModalState={countryModalState}
       color={color} />
      <View style={{ flex:1 }}>
        <SearchInput Search={Search} SetSearch={SetSearch} color={color} placeHolder={'Search '+placeHolder +'...'} />
      </View>
      <View style={{ flex:.2,alignItems:'flex-end' }}>
        <TouchableOpacity style={{
          width:50,height:50,backgroundColor:filterAppliedState.state?color :colors.light,
          borderRadius:100,elevation:10,
          alignItems:'center',
          justifyContent:'center' }} onPress={()=>SetFilterShowState(!filterShowState)}>
          <FontAwesome5
            name={'list-ul'}
            size={commonIconSize}
            color={filterAppliedState.state?colors.light :colors.dark}
            style={{  }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchAndFilter;
