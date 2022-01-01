import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import { style } from "../../../componenets/organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const HealthRecordList = ({ navigation }) => {
  const SingleItemContainer = ({ icon,title,action }) => {
    return (
      <TouchableOpacity style={{
        // height:heightPercentageToDP(17),
        // width:widthPercentageToDP(37),
        backgroundColor:colors.light,
        elevation:5,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:'2%',
        padding:'1%',
        width:widthPercentageToDP(40),
        height:heightPercentageToDP(20)
      }} onPress={action}>
        <Image source={icon} style={{ width:100, height:100, resizeMode:'stretch'  }} />
        <View style={{ marginTop:heightPercentageToDP(1) }}>
          <Text style={style.commonTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const RenderItemContainer =({ item }) => <SingleItemContainer title={item.title}  icon={item.icon} action={item.action}/>
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <View style={{
        backgroundColor:colors.light,
        flex:.15,
        elevation:5,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
      }}>
        {statusBar(colors.light)}
        <Text style={style.headerHeading}>Health Records</Text>
      </View>
      <View style={{ flex:.8,padding:'5%'}}>
        <ScrollView style={{ borderBottomColor:colors.grey,borderBottomWidth:.5 }}
        contentContainerStyle={{ alignItems:'center'  }}
        >
          <FlatList
            data={[
              {
                title:'Medical History',
                icon:require('../../../assets/images/HealthRecordsImages/186.png'),
                action:()=>navigation.navigate('MedicalHistoryList')
              },
              {
                title:'Medications',
                icon:require('../../../assets/images/HealthRecordsImages/87.png'),
                action:()=>navigation.navigate('MedicationsList')
              },
              {
                title:'Vaccinations',
                icon:require('../../../assets/images/HealthRecordsImages/88.png'),
                action:()=>navigation.navigate('VaccinationsList')
              },
              {
                title:'Allergies',
                icon:require('../../../assets/images/HealthRecordsImages/89.png'),
                action:()=>navigation.navigate('AllergiesList')
              },
              {
                title:'Tests',
                icon:require('../../../assets/images/HealthRecordsImages/90.png'),
                action:()=>console.log('yhid')
              },
              {
                title:'Others',
                icon:require('../../../assets/images/HealthRecordsImages/91.png'),
                action:()=>console.log('yhid')
              },
              {
                title:'Pharmacies',
                icon:require('../../../assets/images/HealthRecordsImages/92.png'),
                action:()=>navigation.navigate('PharmaciesList')
              },
              {
                title:'Care Team',
                icon:require('../../../assets/images/HealthRecordsImages/93.png'),
                action:()=>navigation.navigate('CareTeamList')
              },
            ]}
            numColumns={2}
            renderItem={RenderItemContainer}
            keyExtractor={item => item.title}
          />
        </ScrollView>

      </View>

    </View>
  );
};

export default HealthRecordList;
