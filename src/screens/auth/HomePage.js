import React, { useState } from "react";
import {  Text, TouchableOpacity, View } from "react-native";
import { style } from "../../componenets/organisms/style";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import NotificationButton from "../../componenets/molecules/NotificationButton";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../theme/fonts";
import BookAppointmentBtn from "../../componenets/molecules/BookAppointmentBtn";
import ProfileCompletePercent from "../../componenets/molecules/ProfileCompletePercent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppointmentButton from "../../componenets/atoms/AppointmentButton";
import MyAppointmentModal from "../../componenets/molecules/Modals/MyAppointmentModal";

const HomePage = ({ navigation }) => {
  const [appointmentModal,SetAppointmentModal] = useState(false);
  const [CalenderItems, SetCalenderItems] = useState({
      '2021-12-25': [],
      '2021-12-26': [{name: 'Cardiologist',time:'2:00 - 3:00 am',doctor:'Edward zampa'}],
      '2021-12-28': [{name: 'Family doctor',time:'8:00 - 10:00 am',doctor:'John doe'}],
      '2021-12-30': [{name: 'Cardiologist',time:'4:00 - 5:00 pm',doctor:'Edward zampa'}, {name: 'Family doctor',time:'8:00 - 10:00 am',doctor:'John doe'}]
  });
  const userTwo = {key: 'alan Van', color: 'red'};
  const userOne = {key: 'thomas van', color: 'blue'};
  const userThree = {key: 'john', color: 'green'};
  const [MarkDates,SetMarkDates] = useState({
    '2021-12-26': {dots: [userOne, ]},
    '2021-12-28': {dots: [userOne, ]},
    '2021-12-30': {dots: [userOne, ]}
  });
  return (
    <View style={style.linearGradientContainer}>
      {statusBar(colors.lightBlue) }
      <MyAppointmentModal
        state={appointmentModal}
        SetState={SetAppointmentModal}
        selectedItem={{ state:CalenderItems, satState:SetCalenderItems }}
        markDates={{ state:MarkDates, setState:SetMarkDates }}
        navigation={navigation}
      />
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={[colors.lightBlue, colors.blue,]} style={style.linearGradient}>
       <View style={{ flex:.9 }}>
        <View style={{ alignItems:'flex-end' }}>
          <NotificationButton navigation={navigation} />
        </View>
        <View style={{ alignItems:'center',marginTop:heightPercentageToDP(10) }}>
          <BookAppointmentBtn navigation={navigation} />
        </View>

         <View style={{ marginTop:heightPercentageToDP(5),marginHorizontal:widthPercentageToDP('5') }}>
           <View style={{ flexDirection:'row' }}>
            <ProfileCompletePercent navigation={navigation} />
             <View style={{ flex:1,marginHorizontal:widthPercentageToDP(1)}}>
               <TouchableOpacity style={{ height:heightPercentageToDP(20),backgroundColor:'transparent'}}
                                 onPress={()=> {
                                   navigation.navigate('AppointmentDetailsPage')
                                 }}
               >
                 <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[ colors.obcBlue, colors.purple] } style={style.linearGradientHorizontal}>
                  <View style={{ marginVertical:heightPercentageToDP(2),justifyContent:'center' }}>
                    <Text style={{ fontSize:size.text, color:colors.light,fontFamily:fonts.family }}>April 2</Text>
                  </View>
                   <View style={{
                     justifyContent:'center',
                     backgroundColor:colors.light,height:'70%',width:"100%",borderRadius:20,alignItems:'center',paddingTop:heightPercentageToDP(1) }}>
                     <Text style={{ fontWeight:'bold',fontSize:size.text,color:colors.dark,fontFamily:fonts.family }}>Family Doctor</Text>
                     <View style={{ flexDirection:'row',marginTop:heightPercentageToDP(2) }}>
                       <View style={{  }}>
                         <MaterialCommunityIcons
                           name={ "clock" }
                           color={colors.blue}
                           size={20}
                         />
                       </View>
                       <View style={{  }}>
                         <Text style={{fontSize:size.text,color:colors.dark,fontFamily:fonts.family}}> 8:00 - 8:10 am</Text>
                       </View>
                     </View>
                     <View style={{ flexDirection:'row',marginTop:heightPercentageToDP(1) }}>
                       <View style={{  }}>
                         <MaterialCommunityIcons
                           name={ "account" }
                           color={colors.blue}
                           size={22}
                         />
                       </View>
                       <View style={{  }}>
                         <Text style={{fontSize:size.text,color:colors.dark,fontFamily:fonts.family}}>  Dr. Joe smith</Text>
                       </View>
                     </View>
                   </View>
                 </LinearGradient>
               </TouchableOpacity>
             </View>
           </View>
         </View>
       </View>
        <View style={{ flex:.12,alignItems:'center' }}>
          <AppointmentButton state={appointmentModal} SetSate={SetAppointmentModal} />
        </View>

      </LinearGradient>
    </View>
  );
};

export default HomePage;
