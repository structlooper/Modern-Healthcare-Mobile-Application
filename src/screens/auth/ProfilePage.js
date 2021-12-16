import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../componenets/organisms/style";
import statusBar from "../../componenets/molecules/statusBar";
import { colors } from "../../theme/colors";
import { Button, GradientButton, IconButton } from "../../componenets/atoms/Buttons";
import { size } from "../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { ThemeIconTextInput, ThemeTextInput } from "../../componenets/atoms/Inputs";
import Gender from "../../componenets/molecules/gender";
import { useDispatch, useSelector } from "react-redux";
import { SetAuthProfileSkipped } from "../../redux/actions";
import { useUserContext } from "../../redux/context";

const ProfilePage = ({ navigation }) => {
  const {ProfileSkipped} = useUserContext();
  const dispatch = useDispatch();
  const {authUserDetails} = useSelector(state => state.authReducer);
  const [showButton,SetShowButton] = useState(false)
  const [name,SetName] = useState('')
  const [middleName,SetMiddleName] = useState('')
  const [lastName,SetLastName] = useState('')
  const [gender,SetGender] = useState('')
  const [genderModal,SetGenderModal] = useState(false)
  const [dob,SetDob] = useState('')
  const [healthCardProvince,SetHealthCardProvince] = useState('')
  const [healthCard,SetHealthCard] = useState('')
  const [healthCardVersion,SetHealthCardVersion] = useState('')
  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <View style={{ flex:.9, }}>
        <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:heightPercentageToDP(4) }}>
          <View style={{ flex:.9,alignItems:'center' }}>
            <Text style={{ color:colors.dark, fontSize:size.heading }}>Complete profile</Text>
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
          onPress={()=>SetGenderModal(true)}
          >
            <Text style={{ fontSize:size.text,color:colors.grey }}>{gender===''?'Gender':gender}</Text>
          </TouchableOpacity>
          {
            ThemeIconTextInput(
              dob,
              SetDob,
              'DOB',
              false,
              false,
            )
          }
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
                ThemeIconTextInput(
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
                ThemeIconTextInput(
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
        {
          name !== '' && gender !== '' && dob !== '' && healthCardProvince !== '' && healthCard !== '' && healthCardVersion !== ''?
            GradientButton(
              {
                width:widthPercentageToDP('80%'),
                height:heightPercentageToDP(5),
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
                borderWidth:.5,
                borderColor:'transparent',
              },
              [colors.ltnGreen, colors.lightGreen],
              {
                width:widthPercentageToDP('80%'),
                height:heightPercentageToDP(5),
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
              },
              { color:colors.light,textTransform:'uppercase' },
              'Continue',
              ()=>{
                navigation.navigate('SelectProfile')
              }
            )
            :
            Button(
              {
                backgroundColor:colors.light,
                width:widthPercentageToDP(80),
                height:heightPercentageToDP(5),
                borderRadius:50,
                alignItems:'center',
                justifyContent:'center',
                elevation:3,
                borderWidth:.5,
                borderColor:colors.lightGrey,
              },
              { color:colors.grey,textTransform:'uppercase' },
              'Continue',
              ()=>{}
            )
        }
      </View>
      {Gender(genderModal,SetGenderModal,gender,SetGender)}
    </View>
  );
};

export default ProfilePage;
