import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../componenets/organisms/style";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import { size } from "../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ThemeIconNumericInput, ThemeIconTextInput, ThemeTextInput } from "../../componenets/atoms/Inputs";
import Gender from "../../componenets/molecules/gender";
import { useDispatch } from "react-redux";
import { SetAuthProfileSkipped, SetSignUpDetailsEmail } from "../../redux/actions";
import { useUserContext } from "../../redux/context";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ColoredButton from "../../componenets/atoms/ColoredButton";
const ProfilePage = ({ navigation,route }) => {
  let profileHeader = undefined;
  if (route.params !== undefined){
     profileHeader = route.params.profileHeader;
  }
  const {ProfileSkipped} = useUserContext();
  const dispatch = useDispatch();
  const [name,SetName] = useState('')
  const [middleName,SetMiddleName] = useState('')
  const [lastName,SetLastName] = useState('')
  const [gender,SetGender] = useState('')
  const [genderModal,SetGenderModal] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dob,SetDob] = useState('')
  const [healthCardProvince,SetHealthCardProvince] = useState('')
  const [healthCard,SetHealthCard] = useState('')
  const [healthCardVersion,SetHealthCardVersion] = useState('')

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    SetDob(date)
    hideDatePicker();
  };
  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }

      <View style={{ flex:.9, }}>
        <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:heightPercentageToDP(4) }}>
          <View style={{ flex:.9,alignItems:'center' }}>
            <Text style={{ color:colors.dark, fontSize:size.heading }}>{profileHeader === undefined? 'Complete':profileHeader} profile</Text>
          </View>
          <TouchableOpacity style={{ flex:.1,alignItems:'flex-end' }} onPress={()=>{
            dispatch(SetAuthProfileSkipped(true));
            ProfileSkipped(true)
          }}>
            <Text style={{ fontSize:size.label,color:colors.grey }}>Skip</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
        contentContainerStyle={{
          paddingHorizontal:heightPercentageToDP(2),
          // marginTop:heightPercentageToDP(3)
        }}
        >
          {
            ThemeIconTextInput(
              name,
              SetName,
              'First name',
              false,
              false,
            )
          }
          {
            ThemeIconTextInput(
              middleName,
              SetMiddleName,
              'Middle name',
              false,
              false,
            )
          }
          {
            ThemeIconTextInput(
              lastName,
              SetLastName,
              'Last name',
              false,
              false,
            )
          }
          <TouchableOpacity
          style={{
            borderRadius:10,
            backgroundColor:colors.lightGrey,
            height:heightPercentageToDP(7),
            marginVertical:heightPercentageToDP(1),
            paddingHorizontal:widthPercentageToDP(3),
            elevation:5,
            justifyContent:'center'
          }}
          onPress={()=>setDatePickerVisibility(true)}
          >
            <Text style={[{ fontSize:size.text},dob===''?{color:colors.grey} :{color:colors.dark }]}>{dob===''?'DOB':moment(dob).format('MMM Do YYYY')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{
            borderRadius:10,
            backgroundColor:colors.lightGrey,
            height:heightPercentageToDP(7),
            marginVertical:heightPercentageToDP(1),
            paddingHorizontal:widthPercentageToDP(3),
            elevation:5,
            justifyContent:'center'
          }}
          onPress={()=>SetGenderModal(true)}
          >
            <Text style={[{ fontSize:size.text},gender===''?{color:colors.grey} :{color:colors.dark }]}>{gender===''?'Gender':gender}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            maximumDate={new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          {
            ThemeIconTextInput(
              healthCardProvince,
              SetHealthCardProvince,
              'Health Card Province',
              false,
              false,
            )
          }
          <View style={{ flexDirection:'row' }}>
            <View style={{ flex:.7 }}>
              {
                ThemeIconNumericInput(
                  healthCard,
                  SetHealthCard,
                  'Health Card',
                  false,
                  false,
                )
              }
            </View>
            <View style={{ flex:.3,marginLeft:widthPercentageToDP(2) }}>
              {
                ThemeIconNumericInput(
                  healthCardVersion,
                  SetHealthCardVersion,
                  'Version',
                  false,
                  false,
                )
              }
            </View>

          </View>
        </ScrollView>
      </View>
      <View style={{ justifyContent:'center',alignItems:'center',flex:.1 }}>

        <ColoredButton gradientColors={style.GradientColors} showButton={ name !== '' && gender !== '' && dob !== '' && healthCardProvince !== '' && healthCard !== '' && healthCardVersion !== ''} text={'Continue'} action={()=>{
          navigation.navigate('ShowProfile')
        }} width={80} />
      </View>
      {Gender(genderModal,SetGenderModal,gender,SetGender)}
    </View>
  );
};

export default ProfilePage;
