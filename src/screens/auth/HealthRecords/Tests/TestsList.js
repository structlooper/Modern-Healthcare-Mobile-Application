import React, { useState } from "react";
import DropDownContainer from "../../../../componenets/atoms/DropDownAtoms/DropDownContainer";
import { FlatList, Image, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import { DeleteModalAuthConfirmation } from "../../../../componenets/molecules/Modals/exitModalConfirmation";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import RemoveItemButton from "../../../../componenets/atoms/MedicalHistoryButtons/RemoveItemButton";
import AddNewDataButton from "../../../../componenets/atoms/MedicalHistoryButtons/AddNewDataButton";
import DropDownContainerInput from "../../../../componenets/atoms/DropDownAtoms/DropDownContainerInput";
import NoDataFound from "../../../../componenets/templates/NoDataFound";

const TestsList = ({ navigation }) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [addNewItem, setAddNewItem] = React.useState(false);
  const [newInputName, setNewInputName] = React.useState('');
  const [testList, SetTestList] = useState([
  ]);
  const deleteModalState = { state:deleteModal, setState:setDeleteModal };
  const NewInputState = { state:newInputName, setState:setNewInputName };

  const CommonItemRender = ({ item }) => <DropDownContainer title={item.text} ModalState={deleteModalState} cameraAction={()=>navigation.navigate('UploadFilesAndImages')} />

  return (
    <View style={style.mainContainer}>
      <DeleteModalAuthConfirmation ModalState={deleteModalState} />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Tests'} backButton={true} />
      <View style={{ flex:.1,justifyContent:'center' }}>
        {
          addNewItem?
            <RemoveItemButton text={'Delete Test'} action={()=>setAddNewItem(false)} />
            :<AddNewDataButton text={'Add Test'} action={()=>setAddNewItem(true)} />

        }
      </View>
      <View style={{ flex:1 }}>
        {/*<ScrollView style={{ paddingVertical:heightPercentageToDP(2) }}>*/}
        {
          addNewItem?
            <>
            <DropDownContainerInput NewInputState={NewInputState} />
              {testList.length > 0 ?
                <FlatList
                  data={testList}
                  style={{ overflow: 'scroll' }}
                  numColumns={1}
                  renderItem={CommonItemRender}
                  keyExtractor={item => item.text}
                /> :
                null
              }
            </>
            :(testList.length === 0?
            <View style={{ flex:.6,alignItems:'center',justifyContent:'center' }}>
              <NoDataFound text={'Tests'} height={'60%'} />
            </View>
              :<FlatList
                data={testList}
                style={{ overflow:'scroll' }}
                numColumns={1}
                renderItem={CommonItemRender}
                keyExtractor={item => item.text}
              />
          )
        }



        {/*</ScrollView>*/}
      </View>

    </View>
  );
};

export default TestsList;
