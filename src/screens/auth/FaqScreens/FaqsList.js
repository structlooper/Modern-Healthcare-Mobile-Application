import React, { useState } from "react";
import {  ScrollView, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import FaqScreenHeader from "../../../componenets/molecules/Headers/FaqScreenHeader";
import SearchInput from "../../../componenets/atoms/SearchInput";
import { colors } from "../../../theme/colors";
import RenderFaqContainer from "./RenderFaqContainer";
import { customState } from "../../../componenets/organisms/functions";

const FaqsList = ({ navigation }) => {
  const [searchQuestion,SetSearchQuestion] = useState('');

  const [collapseCount,setCollapseCount] = useState();
  const [collapse,setCollapse] = useState([]);
  const CollapseState = {state:collapse,setState:setCollapse}
  const [appointList,setAppointmentList] = useState([
    {
      question:'How do I book an appointment?',
      isAns:true,
      answer:'HomePage:\n Book Appointment.',
    },
    {
      question:'How do I cancel an appointment?',
      isAns:true,
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n',
    },
  ]);
  const [medicationsList,setMedicationsList] = useState([
    {
      question:'How do I refill my medication?',
      isAns:true,
      answer:'orem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      question:'How do I input any medication?',
      isAns:true,
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n',
    },
  ]);
  const [settingsList,setSettingsList] = useState([
    {
      question:'How do I change my password?',
      isAns:true,
      answer:'orem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      question:'How do I change my profile/account picture?',
      isAns:true,
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n',
    },
    {
      question:'How do I turn on/off any notification?',
      isAns:true,
      answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
        'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n',
    },
  ]);

  return (
    <View style={style.mainContainer}>
      <FaqScreenHeader
        header={'Frequently Asked Questions'}
        backButton={true}
        navigation={navigation}
        active={'faq'} />

      <View style={{ flex:1,marginTop:'4%',padding:'1%' }}>
        <SearchInput color={colors.grey} placeHolder={'Ask a question'} Search={searchQuestion} SetSearch={SetSearchQuestion} />
        <ScrollView>
          <RenderFaqContainer title={'Appointments'} CollapseState={CollapseState} list={appointList} countUpdate={customState(collapseCount,setCollapseCount)} />
          <RenderFaqContainer title={'Medications'} CollapseState={CollapseState} list={medicationsList} countUpdate={customState(collapseCount,setCollapseCount)} />
          <RenderFaqContainer title={'Settings'} CollapseState={CollapseState} list={settingsList} countUpdate={customState(collapseCount,setCollapseCount)} />

        </ScrollView>
        </View>

    </View>
  );
};

export default FaqsList;
