import React from "react";
import DropDownContainer from "../../../../componenets/atoms/DropDownAtoms/DropDownContainer";
import { FlatList,  View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import { DeleteModalAuthConfirmation } from "../../../../componenets/molecules/Modals/exitModalConfirmation";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import RemoveItemButton from "../../../../componenets/atoms/MedicalHistoryButtons/RemoveItemButton";
import AddNewDataButton from "../../../../componenets/atoms/MedicalHistoryButtons/AddNewDataButton";
import { heightPercentageToDP } from "react-native-responsive-screen";
import DropDownContainerInput from "../../../../componenets/atoms/DropDownAtoms/DropDownContainerInput";

const AllergiesList = ({ navigation }) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [addNewItem, setAddNewItem] = React.useState(false);
  const [newInputName, setNewInputName] = React.useState('');
  const deleteModalState = { state:deleteModal, setState:setDeleteModal };
  const NewInputState = { state:newInputName, setState:setNewInputName };

  const CommonItemRender = ({ item }) => <DropDownContainer title={item.text} ModalState={deleteModalState} cameraAction={()=>navigation.navigate('UploadFilesAndImages')} />

  return (
    <View style={style.mainContainer}>
      <DeleteModalAuthConfirmation ModalState={deleteModalState} />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Allergies'} backButton={true} />
      <View style={{ flex:.1,justifyContent:'center' }}>
        {
          addNewItem?
            <RemoveItemButton text={'Delete Allergy'} action={()=>setAddNewItem(false)} />
            :<AddNewDataButton text={'Add Allergy'} action={()=>setAddNewItem(true)} />

        }
      </View>
      <View style={{ flex:1,paddingVertical:heightPercentageToDP(2) }}>
         {
            addNewItem?
              <DropDownContainerInput NewInputState={NewInputState} />
              :null
          }
          <FlatList
            data={[
              {
                text:'Airborne',
              },
              {
                text:'Certain',
              },
              {
                text:'Insect stings',
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

export default AllergiesList;
