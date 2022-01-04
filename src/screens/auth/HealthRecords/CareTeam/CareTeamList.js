import React, { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { LocalStyle, style } from "../../../../componenets/organisms/style";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import ColoredButton from "../../../../componenets/atoms/ColoredButton";
import { colors } from "../../../../theme/colors";


const CareTeamList = ({ navigation }) => {

  const [EditMode,SetEditMode] = useState(false);
  const [ContactPerson,SetContactPerson] = useState('');
  const [CareGiver,SetCareGiver] = useState('');
  const [PowerOfAuth,SetPowerOfAuth] = useState('');
  const [FamilyDoctor,SetFamilyDoctor] = useState('');
  const [Pharmacy,SetPharmacy] = useState('');
  const [Specialist,SetSpecialist] = useState('');
  const [Optometrist,SetOptometrist] = useState('');

  return (
    <View style={style.mainContainer}>
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Care Team'} backButton={true} />

      <View style={{ flex:.85 }}>
        <ScrollView>
        <View style={LocalStyle.itemContainer}>
          <View style={{ flex:1 }}>
            <Text style={LocalStyle.itemHeader}>Contact Person</Text>
            <Text style={LocalStyle.itemTitle}>Thomas van</Text>
          </View>
          <View style={{ flex:.2 }}>
            <TouchableOpacity style={{ alignItems:'center',backgroundColor:colors.grey,borderRadius:10 }} >
              <Text style={[style.commonTitle,{color:colors.light}]}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={LocalStyle.itemContainer}>
          <View style={{ flex:1 }}>
            <Text style={LocalStyle.itemHeader}>Care Giver</Text>
            <TouchableOpacity>
              <Text style={[style.commonText,{ color:colors.lightGreen,textTransform:'uppercase' }]}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>

          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Power of Attorney</Text>
              <Text style={LocalStyle.itemTitle}>Jenifer Van</Text>
            </View>
          </View>



          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Family doctor</Text>
              <TouchableOpacity>
                <Text style={[style.commonText,{ color:colors.lightGreen,textTransform:'uppercase' }]}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={LocalStyle.itemContainer}>
          <View style={{ flex:1 }}>
            <Text style={LocalStyle.itemHeader}>Pharmacy</Text>
            <Text style={LocalStyle.itemTitle}>Shoppers Drug Mart, 553 Eglinton Ave W</Text>
          </View>
        </View>

        <View style={LocalStyle.itemContainer}>
          <View style={{ flex:1 }}>
            <Text style={LocalStyle.itemHeader}>Specialist</Text>
            <Text style={LocalStyle.itemTitle}>John Doe</Text>
          </View>
        </View>

        <View style={LocalStyle.itemContainer}>
          <View style={{ flex:1 }}>
            <Text style={LocalStyle.itemHeader}>Dentist</Text>
            <Text style={LocalStyle.itemTitle}>Jamal james</Text>
          </View>
        </View>

        <View style={LocalStyle.itemContainer}>
          <View style={{ flex:1 }}>
            <Text style={LocalStyle.itemHeader}>Optometrist</Text>
            <Text style={LocalStyle.itemTitle}>Karen Smith</Text>
          </View>
        </View>


        </ScrollView>

      </View>
      <View style={{ flex:.15,alignItems:'center' }}>
        <ColoredButton text={'Save'} gradientColors={style.GradientColors} showButton={false} action={()=>navigation.goBack()} />
      </View>
    </View>
  );
};


export default CareTeamList;
