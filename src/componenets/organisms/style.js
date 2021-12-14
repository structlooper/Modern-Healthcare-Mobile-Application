import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const style = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.light,
    padding:'5%'
  },
  ImageButton:{
    width:30,height:60,
    flex:.4,
    borderRadius:10,
    borderColor:colors.lightWhite,
    elevation:10,
    backgroundColor:colors.light,
    padding:'3%',
    marginHorizontal:widthPercentageToDP(5)

  }

});
