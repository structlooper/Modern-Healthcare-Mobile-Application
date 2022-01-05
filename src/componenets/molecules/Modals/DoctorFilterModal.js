import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import { style } from "../../organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import CountryLanguageModal from "./CountryLanguageModal";
  import GenderButton from "../../atoms/GenderButton";
import { SetDoctorGender } from "../../../redux/actions";
import { commonIconSize } from "../../organisms/settings";

const DoctorFilterModal = ({ state,SetState,filterAppliedState,color,countryModalState }) => {
  const dispatch = useDispatch()
  const {SelectedCountry} = useSelector(state => state.doctorFilterReducer);
  return (
    <Modal visible={state} transparent={true} animationType="fade" >
      <CountryLanguageModal modalShowState={countryModalState} />
      <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:30 }}>
        <View style={{ flex:.5 }} />
        <View style={{ flex:.6,backgroundColor:colors.light,borderRadius:30,padding:'5%' }}>
          <View style={{ flex:1 }}>
            <View style={{ alignItems:'center',borderBottomWidth:.5 }}>
              <Text style={style.headerTitle}>Filter Search list</Text>
            </View>
            <View style={{ padding:'5%' }}>
              <Text style={style.commonTitle}>Language</Text>
              <Text style={style.commonText}>Preferred doctor's spoken language</Text>
              <View style={{ flexDirection:'row' }}>

                <TouchableOpacity style={{
                  width:widthPercentageToDP('25%'),
                  height:heightPercentageToDP(7),

                  backgroundColor:colors.bckGreen,
                  borderRadius:10,
                  justifyContent:'center',
                  alignItems:'center',
                  flexDirection:'row'
                }} onPress={()=>countryModalState.setState(true)}>
                  <View style={{ flex:.25 }}>
                    <Image source={{ uri:SelectedCountry.iconUrl }} style={{ width:20,height:20,resizeMode:'contain' }} />
                  </View>
                  <View style={{ }}>
                    <Text style={{ color:colors.grey,fontSize:size.text,fontFamily:fonts.family,marginLeft:widthPercentageToDP(3) }}> {SelectedCountry.language}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop:heightPercentageToDP(2) }}>
                <Text style={style.commonTitle}>Gender</Text>
                <Text style={style.commonText}>Preferred doctor's gender</Text>
                <View style={{ flexDirection:'row',alignItems:'center',marginTop:heightPercentageToDP(2) }}>
                 <GenderButton color={color} text={'Male'} icon={'male'}  />
                 <GenderButton color={color} text={'Female'} icon={'female'}   />
                </View>
              </View>

            </View>

          </View>
          <View style={{ alignItems:'center',flexDirection:'row' }}>
            <TouchableOpacity style={{
              marginHorizontal:widthPercentageToDP(1),borderRadius:100,backgroundColor:color,flex:1,alignItems:'center',justifyContent:'center',height:heightPercentageToDP(5),flexDirection:'row' }}
                              onPress={()=>{
                                filterAppliedState.setState(true)
                                SetState(false)}}
            >
              <View style={{ flex:.3 }} />
              <Text style={{ fontSize:size.text,color:colors.light,fontFamily:fonts.family,flex:.4 }}>Apply  </Text>
              <View style={{ alignItems:'flex-end' }}>
                <MaterialCommunityIcons
                  color={colors.light}
                  name={"filter"}
                  size={commonIconSize+5}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
              borderRadius:100,backgroundColor:colors.red,flex:1,alignItems:'center',justifyContent:'center',height:heightPercentageToDP(5),flexDirection:'row' }}
                              onPress={()=>{
                                dispatch(SetDoctorGender(''))
                                filterAppliedState.setState(false)
                                SetState(false)}}
            >
              <View style={{ flex:.3 }} />
              <Text style={{ fontSize:size.text,color:colors.light,fontFamily:fonts.family,flex:.4 }}>Reset  </Text>
              <View style={{ alignItems:'flex-end' }}>
                <MaterialCommunityIcons
                  color={colors.light}
                  name={"lock-reset"}
                  size={commonIconSize+5}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default DoctorFilterModal;
