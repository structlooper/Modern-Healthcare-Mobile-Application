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
import ProfileComplePercent from "../../componenets/molecules/ProfileComplePercent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppointmentButton from "../../componenets/atoms/AppointmentButton";
import MyAppointmentModal from "../../componenets/molecules/MyAppointmentModal";
import { SetAuthProfileSkipped, SetAuthUserToken } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useUserContext } from "../../redux/context";


const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const {SignOut}= useUserContext();
  const {ProfileSkipped}= useUserContext();
  const [appointmentModal,SetAppointmentModal] = useState(false);
  return (
    <View style={style.linearGradientContainer}>
      {statusBar(colors.lightBlue) }
      <MyAppointmentModal state={appointmentModal} SetState={SetAppointmentModal} />
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
            <ProfileComplePercent navigation={navigation} />
             <View style={{ flex:1,marginHorizontal:widthPercentageToDP(1)}}>
               <TouchableOpacity style={{ height:heightPercentageToDP(20),backgroundColor:'transparent'}}
                                 // onPress={()=> {
                                 //   dispatch(SetAuthUserToken(''))
                                 //   dispatch(SetAuthProfileSkipped(false))
                                 //   SignOut()
                                 //   ProfileSkipped(false)
                                 // }}
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
