import React from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import { IconButton } from "../../atoms/Buttons";
import { CountryList } from "../../atoms/DummyData";
import { useDispatch, useSelector } from "react-redux";
import { SetSelectedCountry } from "../../../redux/actions";

const CountryLanguageModal = ({ modalShowState }) => {
  const dispatch = useDispatch()
  const {SelectedCountry} = useSelector(state => state.doctorFilterReducer);
  const countrySelectBtn = (data,i) => {
    return (
      <TouchableOpacity style={[{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:10,
        height:heightPercentageToDP(4),
        alignItems:'center',
        marginVertical:heightPercentageToDP(.5)
      },data.title === SelectedCountry.title ?{ backgroundColor:colors.ltnGreen} :{ backgroundColor:colors.lightGrey}]} key={i} onPress={() => {
        dispatch(SetSelectedCountry(data))
        modalShowState.setState(false)
      }}>
        <View style={{ flex:.1 }}>
          <Image source={{ uri:data.iconUrl }} style={{ width:20,height:20,resizeMode:'contain' }} />
        </View>
        <View style={{ }}>
          <Text style={[{ fontSize:size.label,fontFamily:fonts.family,fontWeight:'bold' },data.title === SelectedCountry.title ?{ color:colors.light} :{ color:colors.dark}]}> {data.language}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <Modal visible={modalShowState.state} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:50 }}>
        <View style={{ flex:.15 }} />
        <View style={{ flex:.6,margin:'20%',justifyContent:'center' }}>
          <View style={{ flex:1,backgroundColor:colors.light,padding:'3%',borderRadius:20 }}>
            <View style={{ flexDirection:'row' }}>
              <View style={{ flex:1,alignItems:'center',marginLeft:widthPercentageToDP(7) }}>
                <Text style={{ fontSize:size.subTitle,color:colors.dark,fontFamily:fonts.family,fontWeight:'bold' }}>Select Language</Text>
              </View>
              <View style={{ alignItems:'flex-end' }}>
                {IconButton(
                  {
                    backgroundColor:colors.transRed,
                    width:40,height:40,borderRadius:100,
                    justifyContent:'center',alignItems:'center'
                  },
                  'times',
                  20,
                  colors.red,
                  {  },
                  ()=> modalShowState.setState(false)
                )}
              </View>
            </View>

            <ScrollView style={{
              marginVertical:heightPercentageToDP(1)
            }}>
              {
                CountryList.map((data,i) => countrySelectBtn(data,i))
              }
            </ScrollView>

          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CountryLanguageModal;
