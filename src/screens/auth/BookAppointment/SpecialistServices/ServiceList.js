import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import {  widthPercentageToDP } from "react-native-responsive-screen";
import SearchInput from "../../../../componenets/atoms/SearchInput";
import { style } from "../../../../componenets/organisms/style";

const ServiceList = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [searched,SetSearched] = useState('');

  const ServiceBadge = ({icon,text}) => {
    return (
      <TouchableOpacity style={{
        width:130,
        height:130,
        borderRadius:10,
        backgroundColor:colors.light,
        elevation:5,
        alignItems:'center',
        justifyContent:'center',
        margin:'2%'
      }} onPress={()=> {
        navigation.navigate('SpecialistDoctorList',{serviceName:text})
      }}>
        <Image source={icon} style={{ height:90,width:90,resizeMode:'contain' }} />
        <Text style={style.commonTitle}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
  const ServiceListRender = ({ item }) => <ServiceBadge text={item.text} icon={item.icon} />
  return (
    <View style={{ flex:1,backgroundColor:colors.light }} >
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.5}
        backButton={true}
        titleText={'Select a speciality'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
        color={colors.pink}
        bckColor={colors.bckPink}
      />
      <View style={{ flex:1,paddingHorizontal:widthPercentageToDP(5)}}>
        <View>
          <SearchInput Search={searched} color={colors.pink} SetSearch={SetSearched} placeHolder={'Search speciality ...'} />
        </View>
        <ScrollView>

        <FlatList
          data={[
            {
              text:'Cardiology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/68.png'),
            },
            {
              text:'Orthopedic',
              icon:require('../../../../assets/images/SpecialistServiceIcons/69.png')
            },
            {
              text:'Dermatology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/70.png')
            },
            {
              text:'OBGYN',
              icon:require('../../../../assets/images/SpecialistServiceIcons/71.png')
            },
            {
              text:'Otology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/73.png')
            },
            {
              text:'Pulmonology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/74.png')
            },
            {
              text:'Nephrology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/75.png')
            },
            {
              text:'Radiology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/67.png')
            },
            {
              text:'Hematology',
              icon:require('../../../../assets/images/SpecialistServiceIcons/72.png')
            }
          ]}
          numColumns={3}
          renderItem={ServiceListRender}
          keyExtractor={item => item.text}

        />
        </ScrollView>

      </View>

      {/*<View style={{ flex:.2 }} />*/}

    </View>
  );
};

export default ServiceList;
