import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import BottomButton from "../../../componenets/molecules/BottomButton";
import { style } from "../../../componenets/organisms/style";
import DoctorDetailsRender from "../../../componenets/atoms/DoctorDetailsRender";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CustomListView from "../../../componenets/atoms/CustomListView";

const DateTimeSelection = ({ navigation,route }) => {
  const {currentThemeColor} = route.params;
  const [showNextButton,SetShowNextButton] = useState(false)
  const [themeColor,SetThemeColor] = useState(currentThemeColor==='green'?colors.ltnGreen:colors.pink);
  const [backColor,SetBackColor] = useState(currentThemeColor==='green'?colors.bckGreen:colors.bckPink);
  const [exitModal,SetExitModal] = useState(false)
  const [SessionDate, setSessionDate] = useState("Select Date/time");
  const [selectedDate,setSelectedDate] = useState(null)
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(()=> {
    if (SessionDate !== 'Select Date/time'){
      SetShowNextButton(true)
    }else{
      SetShowNextButton(false)
    }
  },[SessionDate])


  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(moment(date).format('YYYY-MM-DD HH:mm:ss'));
    setSessionDate(date.toString().split("GMT")[0]);
    hideDatePicker();
  };


  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.9}
        backButton={true}
        titleText={'Schedule Appointment'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
        bottomTextShow={false}
        color={themeColor}
        bckColor={backColor}
      />
      <View style={{ flex:.8,paddingHorizontal:widthPercentageToDP(5),paddingVertical:heightPercentageToDP(5)}}>
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

           <CustomListView text={'Symptoms'} themeColor={themeColor}/>
           <CustomListView text={'Refill medication'} themeColor={themeColor}/>

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
            <Text style={[style.commonTitle,{fontWeight:'bold'}]}>Select appointment date & time:</Text>
          </View>
          <TouchableOpacity style={{
            flexDirection:'row',
            borderRadius:10,
            backgroundColor:colors.light,
            elevation:3,
            height:heightPercentageToDP(7),
            alignItems:'center',
            justifyContent:'center'
          }} onPress={()=>setDatePickerVisibility(true)}>
              <FontAwesome5
                name={'calendar-plus'}
                size={20}
                style={{ color: themeColor}}
              />
            <View style={{ marginLeft:widthPercentageToDP(2) }}>
              <Text style={style.commonText}>{SessionDate}</Text>
            </View>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            minimumDate={new Date()}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.navigate('AppointmentConfirmPage')
        }} text={'Next'} gradientColors={[themeColor,themeColor]} />
      </View>
    </View>
  );
};

export default DateTimeSelection;
