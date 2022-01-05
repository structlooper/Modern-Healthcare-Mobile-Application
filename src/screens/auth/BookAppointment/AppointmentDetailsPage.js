import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import { style } from "../../../componenets/organisms/style";
import AppointmentDetailsHeader from "../../../componenets/molecules/Headers/AppointmentDetailsHeader";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ColoredButton from "../../../componenets/atoms/ColoredButton";
import DoctorDetailsRender from "../../../componenets/atoms/DoctorDetailsRender";
import CustomListView from "../../../componenets/atoms/CustomListView";
import CheckBox from "@react-native-community/checkbox";
import { commonIconSize } from "../../../componenets/organisms/settings";


const MeetingView = () => {
  return (
    <View style={{ flex:1,padding:'10%' }}>
      <View style={{
        flex:.6,
        backgroundColor:colors.grey,
        alignItems:'center',
        justifyContent:'flex-end',
        height:heightPercentageToDP(40),borderRadius:20 }}>
        <View style={{ flexDirection:'row',justifyContent:'center',marginBottom:heightPercentageToDP(2) }}>
          <View style={{ flex:.3,alignItems:'center' }}>
            <View style={{ backgroundColor:colors.red,padding:'2%',borderRadius:10 }}>
              <MaterialCommunityIcons
                name={'microphone-off'}
                color={colors.light}
                size={50}
              />
            </View>
          </View>
          <View style={{ flex:.3,alignItems:'center' }}>
            <View style={{ backgroundColor:colors.red,padding:'2%',borderRadius:10 }}>
              <MaterialCommunityIcons
                name={'video-off'}
                color={colors.light}
                size={50}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ alignItems:'center',flex:.2 }}>
        <View style={{ alignItems:'center',marginTop:heightPercentageToDP(2),width:widthPercentageToDP(50) }}>
          <Text style={[style.commonTitle,{textAlign:'center'}]}>No one in this call. Wait for your doctor to let you in. </Text>
        </View>
      </View>
      <View style={{ flex:.2,alignItems:'center',marginTop:heightPercentageToDP(4),justifyContent:'flex-end' }}>
        <ColoredButton
          action={()=>console.log('join meeting')}
          gradientColors={[colors.ltnBlue,colors.lightBlue]}
          text={'Join Now'} showButton={false} width={40} />
      </View>
    </View>
  )
}
const AppointmentDetailsView = () => {
  return  (
    <View style={{
      borderRadius:40,
      elevation:30,
      paddingHorizontal:'5%',
      flex:1,
      backgroundColor:colors.light }}>

      <View style={{ flex:.9,paddingHorizontal:widthPercentageToDP(5),paddingVertical:heightPercentageToDP(5)}}>
        <ScrollView >
        <View style={{ marginBottom:heightPercentageToDP(3) }}>
          <View style={{ marginVertical:heightPercentageToDP(1)}}>
            <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Date & Time:</Text>
          </View>
          <Text style={style.commonText}>09:15 am</Text>
          <Text style={style.commonText}>Friday Dec 27, 2021</Text>
        </View>
        <View style={{ marginBottom:heightPercentageToDP(3) }}>
          <View style={{ marginVertical:heightPercentageToDP(1)}}>
            <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Type of appointment:</Text>
          </View>
          <Text style={style.commonText}>Family Doctor</Text>
        </View>
        <View style={{ marginBottom:heightPercentageToDP(3) }}>
          <View style={{ marginVertical:heightPercentageToDP(1)}}>
            <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Reason:</Text>
          </View>

          <CustomListView text={'Symptoms'} themeColor={colors.ltnGreen} />
          <CustomListView text={'Refill medication'} themeColor={colors.ltnGreen} />

        </View>
        <View style={{ marginBottom:heightPercentageToDP(3) }}>
          <View style={{ marginVertical:heightPercentageToDP(1)}}>
            <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Doctor:</Text>
          </View>
          <DoctorDetailsRender
            activeColor={colors.pink}
            SetState={()=>console.log('this')}
            activeSate={'selectedDoctor'}
            doctorName={'Dr. Willi Bor'}
            doctorType={'Family doctor'}
            icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdzcQ0LAua19fRkXgHRZ-D-6aJtgnYtJgxg&usqp=CAU'}
            showRatting={true} />
        </View>
          <View style={{ marginBottom:heightPercentageToDP(3) }}>
          <View style={{ marginVertical:heightPercentageToDP(1)}}>
            <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Invite to appointment</Text>
          </View>

          <View style={{ marginTop:heightPercentageToDP(1) }}>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <CheckBox
                value={true}
                onValueChange={()=>console.log('checkBox')}
                style={{
                  alignSelf: "center",
                }}
                onCheckColor={colors.lightBlue}
                tintColor={colors.lightBlue}
              />
              <Text style={style.commonTitle}>Care giver</Text>
              <Text style={style.commonText}>  - John Doe</Text>
            </View>
          </View>

            <View style={{ marginTop:heightPercentageToDP(1) }}>
              <View style={{ flexDirection:'row',alignItems:'center' }}>
                <CheckBox
                  value={false}
                  onValueChange={()=>console.log('checkBox')}
                  style={{
                    alignSelf: "center",
                  }}
                  onCheckColor={colors.lightBlue}
                  tintColor={colors.lightBlue}
                />
                <Text style={style.commonTitle}>Power of authority</Text>
                <Text style={style.commonText}>  - Thomas van</Text>
              </View>
          </View>


            <View style={{ marginTop:heightPercentageToDP(1) }}>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <CheckBox
                value={false}
                onValueChange={()=>console.log('checkBox')}
                style={{
                  alignSelf: "center",
                }}
                onCheckColor={colors.lightBlue}
                tintColor={colors.lightBlue}
              />
              <Text style={style.commonTitle}>Other</Text>
              <View style={{ marginLeft:widthPercentageToDP(2) }}>
                <TextInput
                  style={{
                    flex:1,
                    color:colors.dark,
                    width:widthPercentageToDP('50'),
                    marginLeft:widthPercentageToDP(1),
                    borderWidth:.5,
                    borderRadius:50,
                    paddingHorizontal:widthPercentageToDP(5)

                  }}
                  onChangeText={''}
                  value={()=>console.log('this')}
                  maxLength={10}
                  keyboardType={'numeric'}
                  placeholder={'Enter phone number'}
                  placeholderTextColor={colors.grey}
                />
              </View>

            </View>
          </View>

            <View style={{ marginTop:heightPercentageToDP(3) }}>
              <View style={{ marginVertical:heightPercentageToDP(1)}}>
                <Text style={[style.commonTitle,{fontStyle:'italic'}]}>(Highly recommended)</Text>
              </View>
              <View style={{ flexDirection:'row',justifyContent:'center' }}>
                <CheckBox
                  value={true}
                  onValueChange={()=>console.log('checkBox')}

                  onCheckColor={colors.lightBlue}
                  tintColor={colors.lightBlue}
                />
                <View style={{ flex:1 }}>
                  <Text style={style.commonTitle}>Would you like to share your health records with your doctor. This will help your doctor provide better care.</Text>

                </View>
              </View>
            </View>

        </View>
        </ScrollView>
      </View>
      <View style={{ flex:.1,alignItems:'center' }}>
        <ColoredButton
          action={()=>console.log('cancel appointment')}
          gradientColors={[colors.red,colors.red]}
          text={'Cancel appointment'} showButton={true} width={50} />
      </View>
    </View>
  )
}
const AppointmentDetailsPage = ({ navigation }) => {
  const [showMoreDetails,SetShowMoreDetails] = useState(false);
  return (
    <View style={{ flex:1,
      backgroundColor:colors.light, }}  >
      {statusBar(colors.light) }
      {/*
      Header...
      */}
      <View style={{ padding:'5%' ,flex:.25}}>

      <AppointmentDetailsHeader header={'Cardiology'} action={()=>{
        navigation.navigate('HomeTab')
      }}  dec={'12 Dec, 2021 08 - 10 am'}  />

        <View style={{ alignItems:'center' }}>
          <TouchableOpacity style={{
            elevation:5,
            borderRadius:10,
            backgroundColor:colors.light,
            width:widthPercentageToDP(70),
            alignItems:'center',
            // justifyContent:'center',
            height:heightPercentageToDP(7),
            flexDirection:'row' }}
                            onPress={()=>SetShowMoreDetails(!showMoreDetails)}
          >
            <View style={{ flex:.15}} />
            <View style={{ flex:.65,alignItems:'center'}}>
              <Text style={style.commonTitle}>Appointment Details</Text>
            </View>
            <View style={{ flex:.15 }}>
              <MaterialCommunityIcons
                name={showMoreDetails?'chevron-up-circle' :"chevron-down-circle"}
                color={colors.dark}
                size={commonIconSize+5}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/*
        Show Details View..
        */}
      <View style={{ flex:.9 }}>
        {
          showMoreDetails?
            AppointmentDetailsView()
            :
            MeetingView()
        }
      </View>
    </View>
  );
};

export default AppointmentDetailsPage;
