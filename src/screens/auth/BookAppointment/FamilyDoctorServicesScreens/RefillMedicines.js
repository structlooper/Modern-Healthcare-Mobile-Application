import React, { useEffect, useState } from "react";
import { colors } from "../../../../theme/colors";
import statusBar from "../../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../../componenets/molecules/Headers/HeaderVerifyIdentity";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UploadImageModal from "../../../../componenets/molecules/Modals/UploadImageModal";
import { style } from "../../../../componenets/organisms/style";
import { ThemeTextInput } from "../../../../componenets/atoms/Inputs";
import { commonIconSize } from "../../../../componenets/organisms/settings";
import HelpButton from "../../../../componenets/atoms/HelpButton";

const RefillMedicines = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false);
  const [showNextButton,SetShowNextButton] = useState(false);
  const [SelectedMedications,SetSelectedMedications] = useState([]);
  const [SelectedMedicationCount,SetSelectedMedicationsCount] = useState(0);
  const [showOtherMedication,SetShowOtherMedications] = useState(false);
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);
  const [imagePickerModal,SetImagePickerModal] = useState(false);

  const [medicineName,setMedicineName] = useState('');
  const [medineDose,setMedicineDose] = useState('');
  const [instruction,setInstruction] = useState('');

  useEffect(()=> {
    setTimeout(()=>{
      SetShowNextButton(true)
    },5000);
  },[]);

  const otherMedicationView = () => {
    return (
      <View style={{ marginTop:heightPercentageToDP(5),height:heightPercentageToDP(80) }}>
        <UploadImageModal
          modalState={imagePickerModal}
          SetModalState={SetImagePickerModal}
          uploadedPictures={uploadedPictures}
          SetUploadedPictures={SetUploadedPictures}
          SetUploadedPicturesCount={SetUploadedPicturesCount}
        />
        <View>
          <Text style={style.commonTitle}>Add Photo</Text>
          <Text style={{ fontSize:size.text,fontFamily:fonts.family,color:colors.grey,marginVertical:heightPercentageToDP(1) }}>Upload a photo of your medication you would like to refill.</Text>
          <TouchableOpacity style={{
            width:80,height:80,
            borderRadius:10,
            borderColor:colors.dark,
            elevation:20,
            backgroundColor:colors.light,
            alignItems:'center',
            justifyContent:'center',
            // marginTop:heightPercentageToDP(1)
          }} onPress={()=>SetImagePickerModal(true)}>
            <FontAwesome5
              name={'camera'}
              size={commonIconSize+5}
              color={colors.blue}
              style={{  }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop:heightPercentageToDP(4) }}>
          <View style={{ flexDirection:'row',alignItems:'center' }}>
            <Text style={style.commonTitle}>Manual Entry</Text>
            <Text style={{ fontSize:size.text,fontFamily:fonts.family,color:colors.grey }}> (optional)</Text>
           <HelpButton />
          </View>
          <View style={{
            borderRadius:20,
            backgroundColor:colors.light,
            marginTop:heightPercentageToDP(1),
            elevation:10,padding:'5%' }} >
           <View style={{ marginTop:heightPercentageToDP(1) }}>
             {
               ThemeTextInput(
                 medicineName,setMedicineName,'Name of Medication',false,false
               )
             }
           </View>
            <View style={{ marginTop:heightPercentageToDP(1) }}>
             {
               ThemeTextInput(
                 medineDose,setMedicineDose,'Dosage',false,false
               )
             }
           </View>
          <View style={{ marginTop:heightPercentageToDP(1) }}>
             {
               ThemeTextInput(
                 instruction,setInstruction,'Instruction',false,false
               )
             }
           </View>
          </View>
          <View style={{ marginTop:heightPercentageToDP(2),alignItems:'center'}}>
            <TouchableOpacity style={{ flexDirection:'row',alignItems:'center' }}>
              <FontAwesome5
                name={'plus-circle'}
                size={commonIconSize+5}
                color={colors.blue}
                style={{  }}
              />
              <Text style={style.commonTitle}> Add Medication</Text>
            </TouchableOpacity>

          </View>
        </View>

      </View>
    )
  }
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
            size={commonIconSize+5}
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
            size={commonIconSize}
            color={iconColor}
            style={{  }}
          />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex:1,backgroundColor:colors.light  }}>


    <View style={{ flex:1 }} >
      {statusBar(colors.light)}

      <HeaderVerifyIdentity
        barPercent={.5}
        backButton={true}
        titleText={'Refill Medications'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
      />
      <View style={{ height:heightPercentageToDP(70),paddingBottom:heightPercentageToDP(1)}}>

      <ScrollView style={{paddingVertical:heightPercentageToDP(2)}} contentContainerStyle={{  paddingHorizontal:widthPercentageToDP(10),paddingBottom:heightPercentageToDP(5) }} nestedScrollEnabled = {true}>
        <View style={{  }}>
          <Text style={style.commonTitle}>Would you like to re-fill any of these medications?</Text>
        </View>
          <View style={{ height:heightPercentageToDP(46),overflow:'hidden' }}>
            <ScrollView style={{ marginVertical:heightPercentageToDP(2) }}  nestedScrollEnabled = {true}>
              <ListButton text={'Advil'} />
              <ListButton text={'Vitamin D'} />
              <ListButton text={'Norvase'} />
              <ListButton text={'Amoxil'} />
              <ListButton text={'Combiflame'} />
              <ListButton text={'Peracitamol'} />
              <ListButton text={'Peracitamol'} />
              <ListButton text={'Peracitamol'} />
              <ListButton text={'Peracitamol'} />
              <ListButton text={'Peracitamol'} />
              <ListButton text={'Peracitamol'} />
            </ScrollView>
          </View>
        <View style={{ justifyContent:'center',marginVertical:heightPercentageToDP(1) }}>
          <View style={{ alignItems:'center' }} >

          <TouchableOpacity style={[
            showOtherMedication?{backgroundColor:colors.blue}:{backgroundColor:colors.light},
            { elevation:5,borderRadius:100,width:widthPercentageToDP(80),alignItems:'center',height:heightPercentageToDP(5),flexDirection:'row' }]}
                            onPress={()=>SetShowOtherMedications(!showOtherMedication)}
          >
            <View style={{ flex:.35 }} />
            <Text style={[{ fontSize:size.text,fontFamily:fonts.family,flex:.55,fontWeight:'bold' },showOtherMedication? {color:colors.light}:{color:colors.blue}]}>Other Medications  </Text>
            <MaterialCommunityIcons
              name={showOtherMedication?"chevron-down":"chevron-up"}
              color={showOtherMedication?colors.light :colors.blue}
              size={commonIconSize+5}
            />
          </TouchableOpacity>
          </View>

          {/*
          Bottom container to show

          */}
          {
            showOtherMedication?
              otherMedicationView()
              :null
          }

        </View>
        </ScrollView>
      </View>

      <View style={{ alignItems:'center',justifyContent:'center' }}>
        <BottomButton showButton={showNextButton} action={()=>{
          navigation.goBack()
        }} text={'Save'} />
      </View>
    </View>
    </View>
  );
};

export default RefillMedicines;
