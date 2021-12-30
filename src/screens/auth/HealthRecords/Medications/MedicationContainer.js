import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../../componenets/organisms/settings";
import { style } from "../../../../componenets/organisms/style";

const MedicationContainer = ({ title,dose,desc,deleteModalState,SelectMedications }) => {
  let iconColor = SelectMedications.state.includes(title)?colors.dark :colors.blue
  let bckColor = SelectMedications.state.includes(title)?colors.lightBlue :colors.bckGreen
  return (
    <TouchableOpacity style={{
      flexDirection:'row',
      width:'100%',
      padding:'5%',
      borderRadius:10,
      alignItems:'center',
      marginTop:'2%',
      backgroundColor:bckColor }} onPress={()=> {

      let index= SelectMedications.state.indexOf(title);
      if (index === -1){
        SelectMedications.state.push(title)
      }else{
        SelectMedications.state.splice(index,1)
      }
      SelectMedications.setState(SelectMedications.state.length)
    }}>
      <View style={{ flex:.15 }}>
        <FontAwesome5
          name={'pills'}
          size={commonIconSize+10}
          color={iconColor}
        />
      </View>
      <View style={{ flex:.7 }}>
        <Text style={[style.commonTitle,{fontWeight:'bold'}]}>{title}</Text>
        <Text style={style.commonText}>
          <Text style={{ color:colors.blue,fontWeight:'bold' }}>
            {dose}
          </Text>
          {' '}{desc}</Text>
      </View>
      <View style={{ flex:.15,alignItems:'center' }}>
        <TouchableOpacity onPress={()=>deleteModalState.setState(true)}>
          <FontAwesome5
            name={'trash'}
            size={commonIconSize}
            color={colors.red}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default MedicationContainer;
