import React, { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Button, GradientButton } from "../../../../componenets/atoms/Buttons";
import { fonts, size } from "../../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import { commonIconSize } from "../../../../componenets/organisms/settings";

const SymptomsPage = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [showNextButton,SetShowNextButton] = useState(false)
  const [searched,SetSearched] = useState('');

  useEffect(()=> {
    setTimeout(()=>{
      SetShowNextButton(true)
    },5000);
  },[]);


  const TextBadge = ({ text }) => {
    return (
      <View style={{ width:widthPercentageToDP(40),
        padding:'2%',alignItems:'center',justifyContent:'center',paddingVertical:heightPercentageToDP(1),
        backgroundColor:colors.lightBlue,borderRadius:50,margin:widthPercentageToDP(1) }}>
        <View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center' }}>

          <View style={{ flex:1,alignItems:'center' }}>
            <Text style={{ fontSize:size.text,color:colors.light,fontWeight:'bold' }}>{text}</Text>
          </View>
          <TouchableOpacity style={{ flex:.4,alignItems:'flex-end' }} onPress={()=>console.log('remove item')}>
            <FontAwesome5
              name={'times'}
              size={20}
              color={colors.light}
              style={{  }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const CommonBadge = ({ text }) => {
    return (
      <TouchableOpacity style={{ width:widthPercentageToDP(25),margin:'1%',backgroundColor:colors.blue,borderRadius:10,padding:'5%',alignItems:'center',justifyContent:'center' }}>
        <Text style={{ color:colors.light,fontSize:size.text}}>{text}</Text>
      </TouchableOpacity>
    )
  }

  const renderItem = ({ item }) => <TextBadge text={item.text} />
  const CommonItemRender = ({ item }) => <CommonBadge text={item.text} />
  return (
    <View style={{ flex:1,backgroundColor:colors.light }} >
      {statusBar(colors.light)}
        <HeaderVerifyIdentity
          barPercent={.5}
          backButton={true}
          titleText={'Symptoms'}
          navigation={navigation}
          modalState={exitModal}
          SetModalSate={SetExitModal}
        />
      <View style={{ flex:.8,paddingHorizontal:widthPercentageToDP(5)}}>
        <View style={{ marginVertical:heightPercentageToDP(2) }}>
          <View style={{ alignItems:'center',justifyContent:'center' }}>
            <Text style={{ fontSize:size.label, color:colors.grey,fontFamily:fonts.family }}>What are your symptoms?</Text>
          </View>

          {/*
           Search Input
          */}
          <View style={{
            flexDirection:'row',
            borderRadius:100,
            backgroundColor:colors.lightGrey,
            height:heightPercentageToDP(6),
            marginVertical:heightPercentageToDP(2),
            paddingHorizontal:widthPercentageToDP(3),
            alignItems:'center',
            elevation:5
          }}>
            <FontAwesome5
              name={'search'}
              size={commonIconSize}
              color={colors.grey}
              style={{  }}
            />
            <TextInput
              style={{
                flex:1,
                marginLeft:widthPercentageToDP(2),
                color:colors.dark
                // color:colors.dark
              }}
              placeholderTextColor={colors.grey}
              onChangeText={SetSearched}
              value={searched}
              autoFocus={false}
              placeholder={'Search ex .., Headache'}
            />
          </View>
          <ScrollView style={{ height:heightPercentageToDP(13),borderBottomColor:colors.grey,borderBottomWidth:.5 }}>
            <FlatList
              data={[
                {
                  text:'Red eye',
                },
                {
                  text:'Mouth concern',
                },
                {
                  text:'Nausea',
                },
              ]}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={item => item.text}
            />
          </ScrollView>

        {/*
         Common suggestion list
        */}
          <View style={{ flexDirection:'row',paddingVertical:heightPercentageToDP(1),borderBottomWidth:.5 }}>
            <View style={{ flex:.7 }}>
              <View style={{ width:widthPercentageToDP(32),height:heightPercentageToDP(37),overflow:'hidden' }}>
                <Image source={require('../../../../assets/images/familyDoctorServicesIcons/45.png')}  style={{ width:'100%',height:'100%',resizeMode:'contain' }} />
              </View>

            </View>
            <View style={{ flex:1 }}>
              <View style={{ marginVertical:heightPercentageToDP(1) }}>
                <Text style={{ fontSize:size.text,color:colors.dark, fontFamily:fonts.family }}>Common Symptoms</Text>
              </View>
              <View style={{ height:heightPercentageToDP(32)}}>
                <FlatList
                  data={[
                    {
                      text:'Confusion',
                    },
                    {
                      text:'Spinning',
                    },
                    {
                      text:'Light head',
                    },
                    {
                      text:'Nausea',
                    },
                    {
                      text:'Headache',
                    },
                    {
                      text:'Red Eye',
                    },
                    {
                      text:'unconscious',
                    },
                  ]}
                  numColumns={2}
                  renderItem={CommonItemRender}
                  keyExtractor={item => item.text}

                />
              </View>

            </View>
          </View>
        </View>
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.goBack()
        }} text={'Save'} />

      </View>

      <View style={{ flex:.1,alignItems:'center',justifyContent:'center' }} >
      </View>
    </View>
  );
};

export default SymptomsPage;
