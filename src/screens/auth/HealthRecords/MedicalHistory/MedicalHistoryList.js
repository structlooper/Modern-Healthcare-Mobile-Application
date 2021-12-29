import React from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import { style } from "../../../../componenets/organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../../theme/colors";
import { DeleteModalAuthConfirmation } from "../../../../componenets/molecules/Modals/exitModalConfirmation";
import DropDownContainer from "../../../../componenets/atoms/DropDownContainer";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../../componenets/organisms/settings";

const MedicalHistoryList = ({ navigation }) => {
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [addNewItem, setAddNewItem] = React.useState(false);
  const deleteModalState = { state:deleteModal, setState:setDeleteModal };

  const CommonItemRender = ({ item }) => <DropDownContainer title={item.text} ModalState={deleteModalState} />

  return (
    <View style={style.mainContainer}>
      <DeleteModalAuthConfirmation ModalState={deleteModalState} />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Medical History'} />
      <View style={{ flex:.1,justifyContent:'center' }}>
       <TouchableOpacity
         style={{
           height:heightPercentageToDP(5),
           width:widthPercentageToDP(50),
           borderRadius:10,
           backgroundColor:colors.ltnGreen,
           alignItems:'center',
           justifyContent:'center',
           flexDirection:'row',
           padding:'2%'
         }}
         >
         <View style={{ flex:.1 }} />
         <View style={{ flex:.2 }}>
           <FontAwesome5
             name={'plus'}
             size={commonIconSize - 5}
             color={colors.light}
           />
         </View>
         <View style={{ flex:1 }}>
           <Text style={[style.commonText,{color:colors.light,fontWeight:'bold'}]}>Add Medical History</Text>
         </View>
       </TouchableOpacity>
      </View>
      <View style={{ flex:1 }}>
        <ScrollView style={{ paddingVertical:heightPercentageToDP(2) }}>
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
            numColumns={1}
            renderItem={CommonItemRender}
            keyExtractor={item => item.text}

          />

        </ScrollView>
      </View>

    </View>
  );
};

export default MedicalHistoryList;
