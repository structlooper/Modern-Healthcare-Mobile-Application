import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../theme/fonts";
import { IconButton } from "../atoms/Buttons";
import React from "react";

export const countryListModal = (countryCode,setSelectedCountryCode,countryModal,setCountryModal) => {
  const countrySelectBtn = (data,i) => {
    return (
      <TouchableOpacity style={{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:colors.ltnGreen,
        borderRadius:10,
        height:heightPercentageToDP(4),
        alignItems:'center',
        marginVertical:heightPercentageToDP(.5)
      }} key={i} onPress={() => {
        setSelectedCountryCode(data)
        setCountryModal(false)
      }}>
        <View style={{ flex:.1 }}>
          <Image source={{ uri:data.iconUrl }} style={{ width:20,height:20,resizeMode:'contain' }} />
        </View>
        <View style={{ }}>
          <Text style={{ color:colors.light,fontSize:size.text,fontFamily:fonts.family }}> {data.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <Modal visible={countryModal} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:50 }}>
        <View style={{ flex:.15 }} />
        <View style={{ flex:.6,margin:'20%',justifyContent:'center' }}>
          <View style={{ flex:1,backgroundColor:colors.bckGreen,padding:'3%',borderRadius:50 }}>
            <View style={{ alignItems:'flex-end' }}>
              {IconButton(
                {
                  backgroundColor:colors.bckRed,
                  width:60,height:60,borderRadius:100,
                  justifyContent:'center',alignItems:'center'
                },
                'times',
                30,
                colors.red,
                {  },
                ()=> setCountryModal(false)
              )}
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
