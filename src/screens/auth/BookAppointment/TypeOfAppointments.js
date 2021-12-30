import React, { useState } from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../componenets/organisms/settings";

const TypeOfAppointments = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity barPercent={.4} backButton={false} titleText={'Types of appointment'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal} color={colors.blue}/>
      <View style={{ flex:.7,alignItems:'center',justifyContent:'center' }}>
       <TouchableOpacity style={{ width:widthPercentageToDP(80),height:heightPercentageToDP(20),overflow:'hidden',alignItems:'center',justifyContent:'center' }}
       onPress={()=>navigation.navigate('ReasonForVisit')}
       >
         <ImageBackground source={require('../../../assets/images/64.png')} style={{ width:'100%',height:'100%',alignItems:'center',flexDirection:'row'}} imageStyle={{ resizeMode:'stretch'}} >
           <View style={{ flex:.6,paddingHorizontal:widthPercentageToDP(2) }}>
             <Image source={require('../../../assets/images/47.png')} style={{ width:100, height:100,resizeMode:'contain' }} />
           </View>
           <View style={{ flex:1 }}>
             <Text style={{ fontSize:size.label,fontFamily:fonts.family,fontWeight:'bold',color:colors.drkGreen }}>Family Doctor</Text>
             <Text style={{ fontSize:size.text,fontFamily:fonts.family,fontWeight:'bold',color:colors.lightGrey }}>54 Doctor Available</Text>
           </View>
           <View style={{ flex:.3 }}>
             <FontAwesome5
               name={'chevron-right'}
               size={commonIconSize+5}
               color={colors.drkGreen}
               style={{  }}
             />
           </View>
         </ImageBackground>
       </TouchableOpacity>
        <TouchableOpacity style={{ width:widthPercentageToDP(80),height:heightPercentageToDP(20),overflow:'hidden',alignItems:'center',justifyContent:'center' }}
                          onPress={()=>navigation.navigate('ServiceList')}>
         <ImageBackground source={require('../../../assets/images/65.png')} style={{ width:'100%',height:'100%',alignItems:'center',flexDirection:'row' }} imageStyle={{ resizeMode:'stretch'}}>
           <View style={{ flex:.6,paddingHorizontal:widthPercentageToDP(2) }}>
             <Image source={require('../../../assets/images/48.png')} style={{ width:100, height:100,resizeMode:'contain' }} />
           </View>
           <View style={{ flex:1 }}>
             <Text style={{ fontSize:size.label,fontFamily:fonts.family,fontWeight:'bold',color:colors.bDarkPurple }}>Specialist</Text>
             <Text style={{ fontSize:size.text,fontFamily:fonts.family,fontWeight:'bold',color:colors.lightGrey }}>23 Doctor Available</Text>
           </View>
           <View style={{ flex:.3 }}>
             <FontAwesome5
               name={'chevron-right'}
               size={commonIconSize+5}
               color={colors.bDarkPurple}
               style={{  }}
             />
           </View>
         </ImageBackground>
       </TouchableOpacity>
      </View>
      <View style={{ flex:.2 }} />
    </View>
  );
};

export default TypeOfAppointments;
