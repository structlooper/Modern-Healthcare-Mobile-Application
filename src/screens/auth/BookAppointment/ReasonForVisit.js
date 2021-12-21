import React, { useState } from "react";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/HeaderVerifyIdentity";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { size } from "../../../theme/fonts";

const ReasonForVisit = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)

  const Item = ({ icon,name,action }) => {
    return (
      <TouchableOpacity style={{ flex:1,margin:'2%',padding:'1%',backgroundColor:colors.light,elevation:5,borderRadius:20,alignItems:'center',justifyContent:'center' }} onPress={action}>
        <Image source={icon} style={{ width:80, height:80, resizeMode:'contain' }} />
        <Text style={{ fontSize:size.text,color:colors.blue }}>
          {name}
        </Text>
      </TouchableOpacity>
    )
  }
  const ItemOne = ({ icon,name,action }) => {
    return (
      <TouchableOpacity style={{ width:'48%',margin:'1%',padding:'1%',
        backgroundColor:colors.light,elevation:2,borderRadius:20,alignItems:'center',justifyContent:'center',
        flexDirection:'row'
      }} onPress={action}>
        <View style={{ flex:.5 }}>
          <Image source={icon} style={{ width:80, height:80, resizeMode:'contain' }} />
        </View>
        <View style={{ flex:1 }}>
          <Text style={{ fontSize:size.text,color:colors.blue }}>
            {name}
          </Text>
        </View>
        </TouchableOpacity>
    )
  }
  const renderItem = ({ item }) =><Item icon={item.icon}  name={item.name} action={item.action}/>
  const renderItemOne = ({ item }) =><ItemOne icon={item.icon}  name={item.name} action={item.action}/>
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.4}
        backButton={true}
        titleText={'Reason for visit'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
        bottomTextShow={true}
        bottomText={'Select 1 or more'}
      />
      <View style={{ flex:.7,paddingHorizontal:widthPercentageToDP(5)}}>
        <View style={{ paddingTop:heightPercentageToDP(3) }}>
          <Text style={{ fontSize:size.label,color:colors.dark }}>Covered by OHIP (Free)</Text>
          <FlatList
            data={[
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/37.png'),
                name:'Symptoms',
                action:()=>console.log('Symptoms')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/38.png'),
                name:'Refill-medicines',
                action:()=>console.log('Refill-medicines')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/39.png'),
                name:'Consultations',
                action:()=>console.log('Consultations')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/40.png'),
                name:'Note/Forms',
                action:()=>console.log('Note/Forms')
              },

            ]}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            // extraData={refresh}
          />
        </View>
        <View style={{ paddingTop:heightPercentageToDP(.5) }}>
          <Text style={{ fontSize:size.label,color:colors.dark }}>Not Covered by OHIP (Charged)</Text>
          <FlatList
            data={[
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/41.png'),
                name:'Travel-Vaccine',
                action:()=>console.log('Travel-Vaccine')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/38.png'),
                name:"Driver's Physical",
                action:()=>console.log('Refill-medicines')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/42.png'),
                name:'Pre-employment Physical',
                action:()=>console.log('Pre-employment Physical')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/40.png'),
                name:'Third Party Assessment',
                action:()=>console.log('Third Party Assessment')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/44.png'),
                name:'Immigration Physical',
                action:()=>console.log('Immigration Physical')
              },

            ]}
            numColumns={2}
            renderItem={renderItemOne}
            keyExtractor={item => item.name}
            // extraData={refresh}
          />
        </View>
      </View>
      <View style={{ flex:.2 }} />
    </View>
  );
};

export default ReasonForVisit;
