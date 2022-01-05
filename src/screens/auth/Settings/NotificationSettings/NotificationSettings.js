import React from "react";
import { ScrollView, Text, View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";
import ToggleContainer from "./ToggleContainer";
import { customState } from "../../../../componenets/organisms/functions";
import { style } from "../../../../componenets/organisms/style";

const NotificationSettings = ({ navigation }) => {
  const [appointmentEmail, setAppointmentEmail] = React.useState(true);
  const [appointmentSms, setAppointmentSms] = React.useState(true);
  const [NewUpdatesEmail, setNewUpdatesEmail] = React.useState(false);
  const [NewUpdatesSms, setNewUpdatesSms] = React.useState(true);
  const [SecurityEmail, setSecurityEmail] = React.useState(false);
  const [SecuritySms, setSecuritySms] = React.useState(false);
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'Notifications'} navigation={navigation}  />
      <View style={{ flex:.85 }}>
        <ScrollView contentContainerStyle={{paddingHorizontal:'5%',paddingBottom:'20%' }}>

          <View style={{ marginTop:'5%' }}>
            <Text style={[style.commonTitle,{fontWeight:'bold',textTransform:'capitalize'}]}>Appointments</Text>
            <View style={{ marginVertical:'2%' }}>
              <Text style={[style.commonText,{fontWeight:'bold',textTransform:'capitalize'}]}>Updates</Text>
            </View>
            <ToggleContainer label={'email'} toggleState={customState(appointmentEmail,setAppointmentEmail)} />
            <ToggleContainer label={'Sms'} toggleState={customState(appointmentSms,setAppointmentSms)} />
          </View>
          <View style={{ marginTop:'5%' }}>
            <Text style={[style.commonTitle,{fontWeight:'bold',textTransform:'capitalize'}]}>New Messages</Text>
            <View style={{ marginVertical:'2%' }}>
              <Text style={[style.commonText,{fontWeight:'bold',textTransform:'capitalize'}]}>Updates</Text>
            </View>
            <ToggleContainer label={'email'} toggleState={customState(NewUpdatesEmail,setNewUpdatesEmail)} />
            <ToggleContainer label={'Sms'} toggleState={customState(NewUpdatesSms,setNewUpdatesSms)} />
          </View>
          <View style={{ marginTop:'5%' }}>
            <Text style={[style.commonTitle,{fontWeight:'bold',textTransform:'capitalize'}]}>Security</Text>
            <View style={{ marginVertical:'2%' }}>
              <Text style={[style.commonText,{fontWeight:'bold',textTransform:'capitalize'}]}>unrecognized login</Text>
            </View>
            <ToggleContainer label={'email'} toggleState={customState(SecurityEmail,setSecurityEmail)} />
            <ToggleContainer label={'Sms'} toggleState={customState(SecuritySms,setSecuritySms)} />
          </View>




        </ScrollView>




      </View>

    </View>
  );
};

export default NotificationSettings;
