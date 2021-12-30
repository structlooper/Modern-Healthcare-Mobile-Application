import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../componenets/organisms/style";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import { fonts, size } from "../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import AppointmentButton from "../../componenets/atoms/AppointmentButton";
import MyAppointmentModal from "../../componenets/molecules/Modals/MyAppointmentModal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SetAuthProfileSkipped } from "../../redux/actions";
import { useUserContext } from "../../redux/context";
import { useDispatch } from "react-redux";
import { commonIconSize } from "../../componenets/organisms/settings";

const SelectProfileScreen = ({ navigation }) => {
  const [appointmentModal,SetAppointmentModal] = useState(false);
  const {ProfileSkipped} = useUserContext();
  const dispatch = useDispatch();
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
    '2021-12-26': {dots: [userOne,userTwo,userThree ]},
    '2021-12-28': {dots: [userOne,userOne ]},
    '2021-12-30': {dots: [userOne, userThree]}
  });

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
                size={commonIconSize+5}
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
      <MyAppointmentModal
        state={appointmentModal}
        SetState={SetAppointmentModal}
        selectedItem={{ state:CalenderItems, satState:SetCalenderItems }}
        markDates={{ state:MarkDates, setState:SetMarkDates }}
        navigation={navigation}
      />

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
