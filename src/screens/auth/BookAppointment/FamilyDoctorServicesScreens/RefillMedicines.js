import React, { useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/HeaderVerifyIdentity";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ButtomButton from "../../../../componenets/molecules/ButtomButton";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const RefillMedicines = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  const [showNextButton,SetShowNextButton] = useState(false);
  const [SelectedMedications,SetSelectedMedications] = useState([]);
  const [SelectedMedicationCount,SetSelectedMedicationsCount] = useState(0)
  const ListButton = ({text}) => {
    let iconColor = SelectedMedications.includes(text)?colors.light :colors.blue
    let bckColor = SelectedMedications.includes(text)?colors.lightBlue :colors.bckGreen
    let icon = SelectedMedications.includes(text)?'check-circle':'circle';
    return (
      <TouchableOpacity style={{
        flexDirection:'row',
        backgroundColor:bckColor,
        padding:'4%',
        borderRadius:10,
        alignItems:'center',
        marginVertical:heightPercentageToDP(1),
      }} onPress={()=>{
        let index= SelectedMedications.indexOf(text);
        if (index === -1){
          SelectedMedications.push(text)
        }else{
          SelectedMedications.splice(index,1)
        }
        SetSelectedMedicationsCount(SelectedMedications.length)
      }}>
        <View style={{ flex:.5 }}>
          <FontAwesome5
            name={'pills'}
            size={30}
            color={iconColor}
            style={{  }}
          />
        </View>
        <View style={{ flex:1,alignItems:'center' }}>
          <Text style={{ fontSize:size.label,fontFamily:fonts.family,fontWeight:'bold',color:iconColor }}>{text}</Text>
        </View>
        <View style={{ flex:.5,alignItems:'flex-end' }}>
          <FontAwesome5
            name={icon}
            size={25}
            color={iconColor}
            style={{  }}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.light }} >
      {statusBar(colors.light)}

      <HeaderVerifyIdentity
        barPercent={.5}
        backButton={true}
        titleText={'Refill Medications'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
      />

      <View style={{ flex:.8,paddingVertical:heightPercentageToDP(2),paddingHorizontal:widthPercentageToDP(10) }}>
        <View style={{  }}>
          <Text style={{ fontSize:size.label,color:colors.dark,fontFamily:fonts.family }}>Would you like to re-fill any of these medications?</Text>
        </View>
          <View style={{ height:heightPercentageToDP(50),overflow:'hidden' }}>
            <ScrollView style={{ marginVertical:heightPercentageToDP(2) }} >
              <ListButton text={'Advil'} />
              <ListButton text={'Vitamin D'} />
              <ListButton text={'Norvase'} />
              <ListButton text={'Amoxil'} />
              <ListButton text={'Combiflame'} />
            </ScrollView>

          </View>
        </View>

      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
        <ButtomButton showButton={showNextButton} action={()=>{
          navigation.goBack()
        }} text={'Save'} />

      </View>

    </View>
  );
};

export default RefillMedicines;
