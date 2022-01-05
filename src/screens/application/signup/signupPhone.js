import React, {  useState } from "react";
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import { Button, GradientButton, IconButton } from "../../../componenets/atoms/Buttons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { CheckEmail, CheckPhone } from "../../../componenets/organisms/functions";
import { SetSignUpDetailsEmail, SetSignUpDetailsPhone } from "../../../redux/actions";
import { countryListModal } from "../../../componenets/molecules/Modals/selectCountryModal";
import { ExitModalConfirmation } from "../../../componenets/molecules/Modals/exitModalConfirmation";
import { useDispatch } from "react-redux";
import SignInNavigation from "../../../componenets/molecules/signInNavigation";
import { CountryList } from "../../../componenets/atoms/DummyData";
import ColoredButton from "../../../componenets/atoms/ColoredButton";



const SignupPhone = ({ navigation }) => {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState(CountryList);
  const [localPhone, setPhone] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    iconUrl:'https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png',
    title:'+91',
    country:'ind',
    countryIcon:'🇮🇳 ',
  });
  const [countryModal, setCountryModal] = useState(false);
  const [exitModal, setExitModal] = useState(false);


  return (
    <View style={style.mainContainer}>
      {statusBar(colors.light) }
      <View style={{ flex:.85 }}>
        <View style={{ alignItems:'flex-end' }}>
          {IconButton(
            {
              backgroundColor:colors.bckRed,
              width:60,height:60,borderRadius:100,
              justifyContent:'center',alignItems:'center'
            },
            'times',
            30,
            colors.red,
            {  },
            ()=> setExitModal(true)
          )}
        </View>
        <Text style={{ fontSize:size.heading,fontFamily:fonts.family,fontWeight:'bold',color:colors.dark }}>Sign up</Text>

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
                    placeholderTextColor={colors.grey}
                    keyboardType={'numeric'}
                    placeholder={'1234567890'}
                  />


                </View>

              </View>
            </View>
          </View>
      </View>
      <View style={{ flex:.15,justifyContent:'center' }}>
        <SignInNavigation navigation={navigation} />
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5) }}>

          <ColoredButton gradientColors={style.GradientColors} showButton={ CheckPhone(localPhone)} text={'Send Verification Code'} action={()=>{
            dispatch(SetSignUpDetailsPhone(selectedCountryCode.title+'-'+localPhone))
            navigation.navigate('VerificationOtpPage')
          }} width={80} />
        </View>
      </View>
      {countryListModal(countryCode,selectedCountryCode,setSelectedCountryCode,countryModal,setCountryModal)}
      {ExitModalConfirmation(exitModal,setExitModal,navigation)}
    </View>
  );
};

export default SignupPhone;
