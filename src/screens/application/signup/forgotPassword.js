import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { Button, GradientButton, IconButton } from "../../../componenets/atoms/Buttons";
import { fonts, size } from "../../../theme/fonts";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import SignInNavigation from "../../../componenets/molecules/signInNavigation";
import { CheckEmail, CheckPhone } from "../../../componenets/organisms/functions";
import { countryListModal } from "../../../componenets/molecules/Modals/selectCountryModal";
import { SetSignUpDetailsEmail, SetSignUpDetailsPhone } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { CountryList } from "../../../componenets/atoms/DummyData";
import ColoredButton from "../../../componenets/atoms/ColoredButton";

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState(CountryList);
  const [localPhone, setPhone] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    iconUrl:'https://cdn1.vectorstock.com/i/1000x1000/69/45/canada-flag-vector-5786945.jpg',
    title:'+1',
    country:'can',
    countryIcon:'🇨🇦 ',
    language:'English',
  },);
  const [countryModal, setCountryModal] = useState(false);
  return (
    <View style={style.mainContainer}>

    {statusBar(colors.light) }
      <View style={{ flex:.85 }}>
        <View>
          {IconButton(
            {
              backgroundColor:colors.bckGreen,
              width:60,height:60,borderRadius:100,
              justifyContent:'center',alignItems:'center'
            },
            'arrow-left',
            30,
            colors.ltnGreen,
            {  },
            ()=> navigation.goBack()
          )}
        </View>
        <Text style={{ color:colors.dark,fontSize:size.heading,fontFamily:fonts.family,fontWeight:'bold' }}>
          Forget password
        </Text>
        <View style={{ flex:1,marginTop:heightPercentageToDP(2) }}>
          <Text style={{ color:colors.dark, fontFamily:fonts.family, fontSize:size.text, fontWeight:'bold' }}>Phone Number</Text>
          <View style={{ flexDirection:'row', marginTop:heightPercentageToDP(1),}}>
            <View style={{ }}>
              <TouchableOpacity style={{
                width:widthPercentageToDP('25%'),
                height:heightPercentageToDP(7),

                backgroundColor:colors.bckGreen,
                borderRadius:10,
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row'
              }} onPress={()=>setCountryModal(true)}>
                <View style={{ flex:.25 }}>
                  <Image source={{ uri:selectedCountryCode.iconUrl }} style={{ width:20,height:20,resizeMode:'contain' }} />
                </View>
                <View style={{ }}>
                  <Text style={{ color:colors.grey,fontSize:size.text,fontFamily:fonts.family }}> {selectedCountryCode.title}</Text>
                </View>
              </TouchableOpacity>

            </View>
            <View style={{ justifyContent:'center',alignItems:'center' }}>
              <View style={{
                borderRadius:10,
                backgroundColor:colors.bckGreen,
                height:heightPercentageToDP(7),
                width:widthPercentageToDP('60'),
                paddingHorizontal:widthPercentageToDP(3),
                marginHorizontal:widthPercentageToDP(3),
                alignItems:'center',
                justifyContent:'center',
              }}>
                <TextInput
                  style={{
                    flex:1,
                    color:colors.dark,
                    width:widthPercentageToDP('50'),

                  }}
                  onChangeText={setPhone}
                  value={localPhone}
                  autoFocus={true}
                  maxLength={10}
                  keyboardType={'numeric'}
                  placeholder={'1234567890'}
                  placeholderTextColor={colors.grey}
                />


              </View>

            </View>
          </View>
        </View>
      </View>
      <View style={{ flex:.1,justifyContent:'center' }}>
        {/*<SignInNavigation navigation={navigation} />*/}
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5) }}>
          <ColoredButton gradientColors={style.GradientColors} showButton={ CheckPhone(localPhone)} text={'Send Verification Code'} action={()=>{
            dispatch(SetSignUpDetailsPhone(selectedCountryCode.title+'-'+localPhone))
            navigation.navigate('VerificationOtpPage')
          }} width={80} />

        </View>
      </View>
      {countryListModal(countryCode,selectedCountryCode,setSelectedCountryCode,countryModal,setCountryModal)}
    </View>
  );
};

export default ForgotPassword;
