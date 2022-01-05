import React, { useEffect, useState } from "react";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { size } from "../../../theme/fonts";
import { Button, GradientButton } from "../../../componenets/atoms/Buttons";
import BottomButton from "../../../componenets/molecules/BottomButton";

const ReasonForVisit = ({ navigation }) => {
  const [SelectedItems,SetSelectedItems] = useState([
    'Symptoms',
  ]);
  const [SelectedOneItems,SetSelectedOneItems] = useState([
  ]);
  const [exitModal,SetExitModal] = useState(false)
  const [showNextButton,SetShowNextButton] = useState(false)

  useEffect(()=> {
    setTimeout(()=>{
      SetShowNextButton(true)
    },5000)
  },[])

  const Item = ({ icon,name,action }) => {
    return (
      <TouchableOpacity style={{ flex:1,margin:'2%',padding:'.5%',backgroundColor:colors.light,elevation:5,borderRadius:20,alignItems:'center',justifyContent:'center' }} onPress={action}>
        <Image source={icon} style={{ width:60, height:60, resizeMode:'contain' }} />
        <Text style={{ fontSize:size.text,color:colors.blue }}>
          {name}
        </Text>
      </TouchableOpacity>
    )
  }
  const ItemSelected = ({ icon,name,action }) => {
    return (
      <TouchableOpacity style={{ flex:1,margin:'2%',padding:'.5%',backgroundColor:colors.blue,elevation:5,borderRadius:20,alignItems:'center',justifyContent:'center' }} onPress={action}>
        <Image source={icon} style={{ width:60, height:60, resizeMode:'contain' }} />
        <Text style={{ fontSize:size.text,color:colors.light }}>
          {name}
        </Text>
      </TouchableOpacity>
    )
  }
  const ItemOne = ({ icon,name,action }) => {
    return (
      <TouchableOpacity style={{ width:'47%',margin:'1%',padding:'1%',
        backgroundColor:colors.light,elevation:2,borderRadius:20,alignItems:'center',justifyContent:'center',
        flexDirection:'row'
      }} onPress={action}>
        <View style={{ flex:.5 }}>
          <Image source={icon} style={{ width:60, height:60, resizeMode:'contain' }} />
        </View>
        <View style={{ flex:1 }}>
          <Text style={{ fontSize:size.text,color:colors.blue }}>
            {name}
          </Text>
        </View>
        </TouchableOpacity>
    )
  }
  const ItemOneSelected = ({ icon,name,action }) => {
    return (
      <TouchableOpacity style={{ width:'48%',margin:'1%',padding:'1%',
        backgroundColor:colors.blue,elevation:2,borderRadius:20,alignItems:'center',justifyContent:'center',
        flexDirection:'row'
      }} onPress={action}>
        <View style={{ flex:.5 }}>
          <Image source={icon} style={{ width:60, height:60, resizeMode:'contain' }} />
        </View>
        <View style={{ flex:1 }}>
          <Text style={{ fontSize:size.text,color:colors.light }}>
            {name}
          </Text>
        </View>
        </TouchableOpacity>
    )
  }
  const renderItem = ({ item }) => SelectedItems.includes(item.name)?
    <ItemSelected icon={item.icon}  name={item.name} action={item.action}/> :
    <Item icon={item.icon}  name={item.name} action={item.action}/>
  const renderItemOne = ({ item }) => SelectedOneItems.includes(item.name)?
    <ItemOneSelected icon={item.icon}  name={item.name} action={item.action}/>:
    <ItemOne icon={item.icon}  name={item.name} action={item.action}/>
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.5}
        backButton={true}
        titleText={'Reason for visit'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
        bottomTextShow={true}
        bottomText={'Select 1 or more'}
      />
      <View style={{ flex:.8,paddingHorizontal:widthPercentageToDP(5)}}>
        <View style={{ paddingTop:heightPercentageToDP(3) }}>
          <Text style={{ fontSize:size.label,color:colors.dark }}>Covered by OHIP (Free)</Text>
          <FlatList
            data={[
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/37.png'),
                name:'Symptoms',
                action:()=>navigation.navigate('SymptomsPage')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/38.png'),
                name:'Refill-medicines',
                action:()=>navigation.navigate('RefillMedicines')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/39.png'),
                name:'Consultations',
                action:()=>navigation.navigate('Consultation')
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/40.png'),
                name:'Note/Forms',
                action:()=>navigation.navigate('NoteFormsScreen')
              },

            ]}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            // extraData={refresh}
            style={{ overflow:'scroll' }}
          />
        </View>
        <View style={{ paddingTop:heightPercentageToDP(.5) }}>
          <Text style={{ fontSize:size.label,color:colors.dark }}>Not Covered by OHIP (Charged)</Text>
          <FlatList
            data={[
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/41.png'),
                name:'Travel-Vaccine',
                action:()=>navigation.navigate('CommonPage',{name:'Travel-Vaccine'})
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/85.png'),
                name:"Driver's Physical",
                action:()=>navigation.navigate('CommonPage',{name:"Driver's Physical"})
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/42.png'),
                name:'Pre-employment Physical',
                action:()=>navigation.navigate('CommonPage',{name:'Pre-employment Physical'})
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/43.png'),
                name:'Third Party Assessment',
                action:()=>navigation.navigate('CommonPage',{name:'Third Party Assessment'})
              },
              {
                icon:require('../../../assets/images/familyDoctorServicesIcons/44.png'),
                name:'Immigration Physical',
                action:()=>navigation.navigate('CommonPage',{name:'Immigration Physical'})
              },

            ]}
            numColumns={2}
            renderItem={renderItemOne}
            keyExtractor={item => item.name}
            // extraData={refresh}
            style={{ overflow:'scroll' }}
          />
        </View>
      </View>
      <View style={{ flex:.2,alignItems:'center',justifyContent:'flex-end',marginBottom:heightPercentageToDP(2) }} >
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.navigate('FamilyDoctorList')
        }} text={'Next'} />
      </View>
    </View>
  );
};

export default ReasonForVisit;
