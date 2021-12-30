import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import { Agenda, Calendar } from "react-native-calendars";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { style } from "../../organisms/style";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";
import { commonIconSize } from "../../organisms/settings";

const MyAppointmentModal = ({ state,SetState,selectedItem,markDates = {state:{}},navigation }) => {

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!selectedItem.state[strTime]) {
          selectedItem.state[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            // selectedItem.state[strTime].push({
            //   name: 'Item for ' + strTime + ' #' + j,
            //   height: Math.max(50, Math.floor(Math.random() * 150)),
            // });
          }
        }
      }
      const newItems = {};
      Object.keys(selectedItem.state).forEach((key) => {
        newItems[key] = selectedItem.state[key];
      });
      selectedItem.satState(newItems);
    }, 1000);
  };
  const renderItem = (item) => {
    let containerColor = item.name==='Family doctor'?[colors.lightBlue,colors.blue]:[colors.bckPink,colors.pink];
    return (
      <TouchableOpacity style={{
        flex:1,

      }} onPress={()=>{
        SetState(false)
        navigation.navigate('AppointmentDetailsPage')
      }}>
        <LinearGradient colors={containerColor}
                        style={{ flex:1,
                          backgroundColor:item.name==='Family doctor'?colors.lightBlue:colors.pink,
                          margin:'1%',
                          paddingHorizontal:'10%',
                          borderRadius:10,
                          justifyContent:'center',
                          height:heightPercentageToDP(10)
                        }}
                        start={{ y: 2.0, x: 0.0 }} end={{ y: 0.0, x: 0.0 }}>
          <View style={{ flexDirection:'row',alignItems:'center' }}>
            <View style={{ flex:1 }}>
              <Text style={[style.commonTitle,{color:colors.light,fontWeight:'bold'}]}>{item.name}</Text>
              <Text style={[style.commonText,{color:colors.light,}]}>{item.time}</Text>
              <Text style={[style.commonText,{color:colors.light,}]}>{item.doctor}</Text>
            </View>
            <View style={{ flex:.3,alignItems:'center' }}>
              <FontAwesome5
                name={'chevron-right'}
                size={commonIconSize+5}
                color={colors.light}
                style={{  }}
              />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )
  }


    return (
      <Modal visible={state} transparent={true} animationType="fade" >
        <View style={{ flex:1,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:30 }}>
          <View style={{ flex:.5 }} />
          <View style={{ flex:.6,backgroundColor:colors.light,borderRadius:30,padding:'5%' }}>
            <View style={{ flex:.9 }}>
              {/*<Calendar*/}
              {/*  markingType={'multi-dot'}*/}
              {/*  markedDates={markDates.state}*/}
              {/*  onDayPress={day=>}*/}
              {/*/>*/}
              <Agenda
                style={{ borderRadius:20 }}
                // Collection of dates that have to be marked. Default = {}
                items={selectedItem.state}
                loadItemsForMonth={loadItems}
                markingType={'multi-dot'}
                // markedDates={{
                //   // '2021-12-16': {selected: true, marked: true, selectedColor: 'blue'},
                //   '2021-12-26': {marked: true,dotColor: 'red'},
                //   '2021-12-28': {marked: true, dotColor: 'red', activeOpacity: 0},
                //   // '2021-12-19': {disabled: true, disableTouchEvent: true}
                // }}
                markedDates={markDates.state}
                renderItem={renderItem}
                futureScrollRange={10}
                hideKnob={false}
                selected={new Date().toISOString().split('T')[0]}
              />
            </View>
            <View style={{ alignItems:'center',flex:.1,justifyContent:'center' }}>
              <TouchableOpacity style={{ borderRadius:100,backgroundColor:colors.blue,width:widthPercentageToDP(40),alignItems:'center',justifyContent:'center',height:heightPercentageToDP(5),flexDirection:'row' }}
                                onPress={()=>SetState(false)}
              >
                <View style={{ flex:.4 }} />
                <Text style={{ fontSize:size.text,color:colors.light,fontFamily:fonts.family,flex:.4 }}>Hide  </Text>
                <View style={{ alignItems:'flex-end' }}>
                  <MaterialCommunityIcons
                    name={"chevron-down"}
                    color={colors.light}
                    size={commonIconSize+5}
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
