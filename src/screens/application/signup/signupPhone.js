import React, {  useState } from "react";
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import statusBar from "../../../componenets/molecules/statusBar";
import { colors } from "../../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import { Button, GradientButton, IconButton } from "../../../componenets/atoms/Buttons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { CheckPhone } from "../../../componenets/organisms/functions";
import { SetSignUpDetailsPhone } from "../../../redux/actions";
import { countryListModal } from "../../../componenets/molecules/selectCountryModal";
import { ExitModalConfirmation } from "../../../componenets/molecules/exitModalConfirmation";
import { useDispatch } from "react-redux";



const SignupPhone = ({ navigation }) => {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState([
    {
      iconUrl:'https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png',
      title:'+91',
      country:'ind',
      countryIcon:'🇮🇳 ',
    },
    {
      iconUrl:'https://cdn1.vectorstock.com/i/1000x1000/69/45/canada-flag-vector-5786945.jpg',
      title:'+1',
      country:'can',
      countryIcon:'🇨🇦 ',
    },
    {
      iconUrl:'https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg',
      title:'+61',
      country:'aus',
      countryIcon:'🇦🇺 ',
    }
  ]);
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
      <View style={{ flex:.8 }}>
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
                    <Text> {selectedCountryCode.title}</Text>
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
                  />


                </View>

              </View>
            </View>
          </View>
      </View>
      <View style={{ flex:.2 }}>
        <TouchableOpacity style={{ flexDirection:'row',alignItems:'center',justifyContent:'center' }}
                          onPress={()=>console.log('login')}
        >
          <Text style={{ color:colors.dark }}>Already have an account?</Text>
          <View style={{ borderBottomColor:colors.dark,borderBottomWidth:.5 }}

          >
            <Text style={{ color:colors.dark, }}> Sign in</Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(5) }}>
          {
            CheckPhone(localPhone)?
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
                { color:colors.light,textTransform:'capitalize' },
                'Send Verification Code',
                ()=>{
                  dispatch(SetSignUpDetailsPhone(selectedCountryCode.title+'-'+localPhone))
                  navigation.navigate('VerificationOtpPage')
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
                { color:colors.grey,textTransform:'capitalize' },
                'Send Verification Code',
                ()=>{}
              )
          }
        </View>
      </View>
      {countryListModal(countryCode,setSelectedCountryCode,countryModal,setCountryModal)}
      {ExitModalConfirmation(exitModal,setExitModal,navigation)}
    </View>
  );
};

export default SignupPhone;
