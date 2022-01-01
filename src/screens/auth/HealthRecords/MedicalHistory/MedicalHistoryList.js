import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import { style } from "../../../../componenets/organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { DeleteModalAuthConfirmation } from "../../../../componenets/molecules/Modals/exitModalConfirmation";
import DropDownContainer from "../../../../componenets/atoms/DropDownAtoms/DropDownContainer";
import DropDownContainerInput from "../../../../componenets/atoms/DropDownAtoms/DropDownContainerInput";
import AddNewDataButton from "../../../../componenets/atoms/MedicalHistoryButtons/AddNewDataButton";
import RemoveItemButton from "../../../../componenets/atoms/MedicalHistoryButtons/RemoveItemButton";

const MedicalHistoryList = ({ navigation }) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [addNewItem, setAddNewItem] = React.useState(false);
  const [newInputName, setNewInputName] = React.useState('');
  const deleteModalState = { state:deleteModal, setState:setDeleteModal };
  const NewInputState = { state:newInputName, setState:setNewInputName };

  const CommonItemRender = ({ item }) => <DropDownContainer title={item.text} ModalState={deleteModalState} cameraAction={()=>navigation.navigate('UploadFilesAndImages')} />

  return (
    <View style={style.mainContainer}>
      <DeleteModalAuthConfirmation ModalState={deleteModalState} />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Medical History'} backButton={true} />
      <View style={{ flex:.1,justifyContent:'center' }}>
        {
          addNewItem?
          <RemoveItemButton text={'Delete Medical History'} action={()=>setAddNewItem(false)} />
          :<AddNewDataButton text={'Add Medical History'} action={()=>setAddNewItem(true)} />

        }
      </View>
      <View style={{ flex:1 }}>
        {/*<ScrollView style={{ paddingVertical:heightPercentageToDP(2) }}>*/}
          {
            addNewItem?
              <DropDownContainerInput NewInputState={NewInputState} />
              :null
          }
          <FlatList
            data={[
              {
                text:'Broken Leg',
              },
              {
                text:'Type 2 diabetes',
              },
              {
                text:'Heart Surgery',
              },
            ]}
            style={{ overflow:'scroll' }}
            numColumns={1}
            renderItem={CommonItemRender}
            keyExtractor={item => item.text}
          />

        {/*</ScrollView>*/}
      </View>

    </View>
  );
};

export default MedicalHistoryList;
