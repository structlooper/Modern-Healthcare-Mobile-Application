import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { fonts, size } from "../../../../theme/fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../../componenets/organisms/settings";

const VerifyIdentityList = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const ListButton = (icon,text) => {
    return (
      <TouchableOpacity style={{ flexDirection:'row',borderBottomColor:colors.lightGrey,borderBottomWidth:1,padding:heightPercentageToDP(1),alignItems:'center' }} onPress={()=>navigation.navigate('VerifyDetailsUploadDoc')}>
        <View style={{ flex:.5 }}>
          <Image source={icon} style={{ width:80, height:80, resizeMode:'contain'  }} />
        </View>
        <View style={{ flex:1,alignItems:'center' }}>
          <Text style={{ fontSize:size.label,color:colors.blue,fontFamily:fonts.family,textTransform:'uppercase' }}>{text}</Text>
        </View>
        <View style={{ flex:.5,alignItems:'flex-end' }}>
          <FontAwesome5
            name={'chevron-circle-right'}
            size={commonIconSize+5}
            color={colors.blue}
            style={{  }}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity barPercent={.2} backButton={true} titleText={'Verify Identity'} navigation={navigation} modalState={exitModal} SetModalSate={SetExitModal} color={colors.blue} />
      <View style={{ flex:.8,padding:'5%' }}>
        <View style={{ alignItems:'center' }}>
          <Text style={{ fontSize:size.subTitle,fontWeight:'bold',fontFamily:fonts.family,color:colors.dark }}>Select a document</Text>
        <Text style={{ marginVertical:heightPercentageToDP(1),fontSize:size.text,color:colors.grey,fontFamily:fonts.family }}>You will take a picture of it in the next step</Text>
        </View>
        <View style={{ marginTop:heightPercentageToDP(2) }}>
          <ScrollView>
            {ListButton(require('../../../../assets/images/verifyDetailsIcons/19.png'),'Health card')}
            {ListButton(require('../../../../assets/images/verifyDetailsIcons/20.png'),"Driver's licences")}
            {ListButton(require('../../../../assets/images/verifyDetailsIcons/21.png'),"Social")}
            {ListButton(require('../../../../assets/images/verifyDetailsIcons/22.png'),"Passport")}
          </ScrollView>
        </View>
      </View>
      <View style={{ flex:.2 }} />
    </View>
  );
};

export default VerifyIdentityList;
