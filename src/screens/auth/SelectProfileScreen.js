import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../componenets/organisms/style";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import AppointmentButton from "../../componenets/atoms/AppointmentButton";
import MyAppointmentModal from "../../componenets/molecules/MyAppointmentModal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SetAuthProfileSkipped } from "../../redux/actions";
import { useUserContext } from "../../redux/context";
import { useDispatch } from "react-redux";

const SelectProfileScreen = ({ navigation }) => {
  const [appointmentModal,SetAppointmentModal] = useState(false);
  const {ProfileSkipped} = useUserContext();
  const dispatch = useDispatch();

  const showProfileBackground = (imageName,text) => {
    return (
      <ImageBackground source={imageName}
                       style={{ width:150,height:150, resizeMode:'contain',alignItems:'center',justifyContent:'center' }} >

        <Text style={{ color:colors.light,fontWeight:'bold',fontFamily:fonts.family }}>{text}</Text>
      </ImageBackground>
    )
  }
  const TwoProfileDataRender = ({imageOneName,ProfileOneName},{imageTwoName, ProfileTwoName}) => {
    return (
      <View style={{ flexDirection:'row',marginHorizontal:widthPercentageToDP(4)  }}>
        <TouchableOpacity style={{ flex:1,alignItems:'center' }} onPress={()=>{
          dispatch(SetAuthProfileSkipped(true));
          ProfileSkipped(true)
        }}>
          {showProfileBackground(imageOneName,ProfileOneName)}
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1,alignItems:'center' }} onPress={()=>console.log('this')}>
          {showProfileBackground(imageTwoName,ProfileTwoName)}
        </TouchableOpacity>
      </View>
    )
  }
  const OneProfileDataRender = ({imageOneName,ProfileOneName}) => {
    return (
      <View style={{ flexDirection:'row',marginHorizontal:widthPercentageToDP(4)  }}>
        <TouchableOpacity style={{ flex:1,alignItems:'center' }} onPress={()=>console.log('this')}>
          {showProfileBackground(imageOneName,ProfileOneName)}
        </TouchableOpacity>
        <TouchableOpacity style={{ flex:1,alignItems:'center',justifyContent:'center' }} onPress={()=>navigation.navigate('CreateProfile',{profileHeader:'Add'})}>
          <View style={{ borderRadius:10,borderColor:colors.grey,borderStyle:'dashed',alignItems:'center',borderWidth:1,justifyContent:'center',height:110,width:100 }}>
            <Text>Add</Text>
            <View style={{ backgroundColor:colors.lightGrey,width:50,height:50,borderRadius:100,alignItems:'center',justifyContent:'center' }}>
              <MaterialCommunityIcons
                name={"plus"}
                color={colors.grey}
                size={30}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <MyAppointmentModal state={appointmentModal} SetState={SetAppointmentModal} />

      <View style={{ flex:.9 }}>
        <View style={{
          alignItems:'center',
          marginTop:heightPercentageToDP(5)
        }}>
          <Text style={{ fontSize:size.heading, color:colors.dark, fontFamily:fonts.family }}>Who's using Teja?</Text>
          <Text style={{ fontSize:size.text,textAlign:'center',
            marginTop:heightPercentageToDP(5),
            color:colors.grey }}>
            With Teja profile you can secure health records, manage appointments,
            and take care of your families health.
          </Text>
        </View>
        <ScrollView >
            { TwoProfileDataRender({
              imageOneName: require('../../assets/images/profileBackground/red.png'),
              ProfileOneName:'Alan walker'},{
              imageTwoName: require('../../assets/images/profileBackground/blue.png'),
              ProfileTwoName:'Thomas van'}) }

          { OneProfileDataRender({
              imageOneName: require('../../assets/images/profileBackground/biscut.png'),
              ProfileOneName:'Ava van'}) }

        </ScrollView>
      </View>
      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
        <AppointmentButton state={appointmentModal} SetSate={SetAppointmentModal} />

      </View>
    </View>
  );
};

export default SelectProfileScreen;
