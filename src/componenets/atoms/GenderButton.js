import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { style } from "../organisms/style";
import { useDispatch, useSelector } from "react-redux";
import { SetDoctorGender } from "../../redux/actions";
import { commonIconSize } from "../organisms/settings";

const GenderButton = ({ text,icon,color }) => {
  const {DoctorGender} = useSelector(state => state.doctorFilterReducer);
  const dispatch = useDispatch()
  let backColor = DoctorGender===text?color:colors.light;
  return (
    <TouchableOpacity style={{
      padding:'3%',
      backgroundColor:backColor,
      elevation:5,
      borderRadius:10,
      width:widthPercentageToDP(15),
      alignItems:'center',
      marginRight:widthPercentageToDP(1)
    }} onPress={()=>{
      DoctorGender === text?
        dispatch(SetDoctorGender(''))
        :
      dispatch(SetDoctorGender(text))
    }}>
      <FontAwesome5
        name={icon}
        size={commonIconSize}
        color={DoctorGender===text?colors.light:colors.dark}
        style={{  }}
      />
      <Text style={style.commonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GenderButton;
