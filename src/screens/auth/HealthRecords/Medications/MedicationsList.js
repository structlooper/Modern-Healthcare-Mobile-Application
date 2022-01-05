import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import { DeleteModalAuthConfirmation } from "../../../../componenets/molecules/Modals/exitModalConfirmation";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import AddNewDataButton from "../../../../componenets/atoms/MedicalHistoryButtons/AddNewDataButton";
import BottomButton from "../../../../componenets/molecules/BottomButton";
import MedicationContainer from "./MedicationContainer";

const MedicationsList = ({ navigation }) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const deleteModalState = { state:deleteModal, setState:setDeleteModal };
  const [SelectedMedications,SetSelectedMedications] = useState([]);
  const [SelectedMedicationCount,SetSelectedMedicationsCount] = useState(0);
  const SelectMedications = { state:SelectedMedications, setState:SetSelectedMedicationsCount };

  const MedicationContainerList = ({ item }) => <MedicationContainer title={item.title} dose={item.dose} desc={item.desc} deleteModalState={deleteModalState} SelectMedications={SelectMedications} />
  return (
    <View style={style.mainContainer}>
      <DeleteModalAuthConfirmation ModalState={deleteModalState} />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Medications'} backButton={true} />

      <View style={{ flex:.1,justifyContent:'center' }}>
        <AddNewDataButton text={'Add Medication'} action={()=>navigation.navigate('AddNewMedication')} />
      </View>
      <View style={{ flex:.8 }}>
          <FlatList
            data={[
              {
                title:'Avail',
                dose:'2 pills',
                desc:'with one day and one night',
              },
              {
                title:'Vitamin D',
                dose:'1 tablet',
                desc:'after a meal everyday',
              },
              {
                title:'Amoxicillin',
                dose:'500 mg 1 cap',
                desc:'3 times per day',
              },
            ]}
            numColumns={1}
            renderItem={MedicationContainerList}
            keyExtractor={item => item.title}
            style={{ overflow:'scroll' }}
          />
      </View>
      <View style={{ flex:.15 }}>

        <BottomButton action={()=>navigation.goBack()}
                      text={'Request Refill'} showButton={SelectedMedications.length > 0} gradientColors={style.GradientColors} />
      </View>


    </View>
  );
};

export default MedicationsList;
