import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { Calendar } from "react-native-calendars";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../theme/fonts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MyAppointmentModal = ({ state,SetState }) => {
    return (
      <Modal visible={state} transparent={true} animationType="fade" >
        <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:30 }}>
          <View style={{ flex:.5 }} />
          <View style={{ flex:.6,backgroundColor:colors.light,borderRadius:30,padding:'5%' }}>
            <View style={{ flex:1 }}>
              <Calendar
                // Collection of dates that have to be marked. Default = {}
              />

            </View>
            <View style={{ alignItems:'center' }}>
              <TouchableOpacity style={{ borderRadius:100,backgroundColor:colors.blue,width:widthPercentageToDP(40),alignItems:'center',justifyContent:'center',height:heightPercentageToDP(5),flexDirection:'row' }}
                                onPress={()=>SetState(false)}
              >
                <View style={{ flex:.4 }} />
                <Text style={{ fontSize:size.text,color:colors.light,fontFamily:fonts.family,flex:.4 }}>Hide  </Text>
                <View style={{ alignItems:'flex-end' }}>
                  <MaterialCommunityIcons
                    name={"chevron-down"}
                    color={colors.light}
                    size={30}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
};

export default MyAppointmentModal;
