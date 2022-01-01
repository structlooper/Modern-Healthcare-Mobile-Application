import React  from "react";
import { FlatList, ScrollView, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import { DeleteModalAuthConfirmation } from "../../../../componenets/molecules/Modals/exitModalConfirmation";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import AddNewDataButton from "../../../../componenets/atoms/MedicalHistoryButtons/AddNewDataButton";
import DropDownContainer from "../../../../componenets/atoms/DropDownAtoms/DropDownContainer";

const PharmaciesList = ({ navigation }) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const deleteModalState = { state:deleteModal, setState:setDeleteModal };

  const CommonItemRender = ({ item }) => <DropDownContainer
    title={item.text}
    desc={item.desc}
    notShowImageUpload={true}
    ModalState={deleteModalState}
    cameraAction={()=>navigation.navigate('UploadFilesAndImages')}
  />

  return (
    <View style={style.mainContainer}>
      <DeleteModalAuthConfirmation ModalState={deleteModalState} />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Pharmacies'} backButton={true} />

      <View style={{ flex:.1,justifyContent:'center' }}>
        <AddNewDataButton text={'Add Pharmacy'} action={()=>navigation.navigate('AddPharmacy')} />
      </View>
      <View style={{ flex:.8 }}>
          <FlatList
            data={[
              {
                text:'Shoppers Drug Mart Ellington',
                desc:'550 Ellington Ave W'
              },
              {
                text:'Valiant Drug Store',
                desc:'Street 45 wav road'
              },

            ]}
            numColumns={1}
            renderItem={CommonItemRender}
            keyExtractor={item => item.text}
            style={{ overflow:'scroll' }}
          />

      </View>



    </View>
  );
};

export default PharmaciesList;
