import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import { IconButton } from "../../atoms/Buttons";
import React from "react";

export const countryListModal = (countryCode,selectedCountryCode,setSelectedCountryCode,countryModal,setCountryModal) => {
  const countrySelectBtn = (data,i) => {
    return (
      <TouchableOpacity style={[{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:10,
        height:heightPercentageToDP(4),
        alignItems:'center',
        marginVertical:heightPercentageToDP(.5)
      },data.title === selectedCountryCode.title ?{ backgroundColor:colors.ltnGreen} :{ backgroundColor:colors.lightGrey}]} key={i} onPress={() => {
        setSelectedCountryCode(data)
        setCountryModal(false)
      }}>
        <View style={{ flex:.1 }}>
          <Image source={{ uri:data.iconUrl }} style={{ width:20,height:20,resizeMode:'contain' }} />
        </View>
        <View style={{ }}>
          <Text style={[{ fontSize:size.label,fontFamily:fonts.family,fontWeight:'bold' },data.title === selectedCountryCode.title ?{ color:colors.light} :{ color:colors.dark}]}> {data.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <Modal visible={countryModal} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:50 }}>
        <View style={{ flex:.15 }} />
        <View style={{ flex:.6,margin:'20%',justifyContent:'center' }}>
          <View style={{ flex:1,backgroundColor:colors.light,padding:'3%',borderRadius:20 }}>
            <View style={{ flexDirection:'row' }}>
              <View style={{ flex:1,alignItems:'center',marginLeft:widthPercentageToDP(7) }}>
                <Text style={{ fontSize:size.subTitle,color:colors.dark,fontFamily:fonts.family,fontWeight:'bold' }}>Country Code</Text>
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
                  ()=> setCountryModal(false)
                )}
              </View>
            </View>

            <ScrollView style={{
              marginVertical:heightPercentageToDP(1)
            }}>
              {
                countryCode.map((data,i) => countrySelectBtn(data,i))
              }
            </ScrollView>

          </View>
        </View>
      </View>
    </Modal>
  )
}
