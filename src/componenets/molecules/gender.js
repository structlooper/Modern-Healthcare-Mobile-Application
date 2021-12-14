import React from "react";
import {  Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../theme/fonts";
import { IconButton } from "../atoms/Buttons";

const Gender = (modalState,setModalState,gender,setGender) => {
  const itemButton = (item) => {
    return (
      <TouchableOpacity style={[{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius:10,
        height:heightPercentageToDP(4),
        alignItems:'center',
        marginVertical:heightPercentageToDP(.5)
      },item === gender?{ backgroundColor:colors.lightGreen }:{backgroundColor:colors.lightGrey
      }]}  onPress={() => {
        setGender(item)
        setModalState(false)
      }}>
        <View style={{ }}>
          <Text style={[{ fontSize:size.label,fontFamily:fonts.family,fontWeight:'bold' },
            item === gender?{ color:colors.dark}:{ color:colors.dark
            }
          ]}> {item}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <Modal visible={modalState} transparent={true} animationType="fade" >
      <View style={{ backgroundColor:'rgba(0,0,0,0.5)',flex:1,borderRadius:50 }}>
        <View style={{ flex:.15 }} />
        <View style={{ flex:.3,margin:'20%',justifyContent:'center' }}>
          <View style={{ flex:1,backgroundColor:colors.light,padding:'3%',borderRadius:20 }}>
            <View style={{ flexDirection:'row' }}>
              <View style={{ flex:1,alignItems:'center',marginLeft:widthPercentageToDP(7) }}>
                <Text style={{ fontSize:size.subTitle,color:colors.dark,fontFamily:fonts.family,fontWeight:'bold' }}>Gender</Text>
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
                  ()=> setModalState(false)
                )}
              </View>
            </View>

            <ScrollView style={{
              marginVertical:heightPercentageToDP(1)
            }}>
              {itemButton('Male')}
              {itemButton('Female')}
              {itemButton('Other')}

            </ScrollView>

          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Gender;
