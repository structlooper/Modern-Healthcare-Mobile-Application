import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

export const style = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:colors.light,
    padding:'5%'
  },
  linearGradientContainer:{
    flex:1,
    backgroundColor:colors.light,
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
  },
  linearGradient: {
    flex: 1,
    padding:'5%'
  },
  linearGradientHorizontal: {
    flex: 1,
    width:widthPercentageToDP(38),
    borderRadius:20,alignItems:'center'
  },
  bottomDisableButtonContainer:
    {
      backgroundColor:colors.light,
      width:widthPercentageToDP(88),
      height:heightPercentageToDP(5),
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:3,
      borderWidth:.5,
      borderColor:colors.lightGrey,
    },
  bottomDisableButton:{ color:colors.grey,textTransform:'uppercase' },
  GradientButtonContainer:{
    width:widthPercentageToDP('88%'),
    height:heightPercentageToDP(5),
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:.5,
    borderColor:'transparent',
  },
  GradientButton:{
    width:widthPercentageToDP('88%'),
    height:heightPercentageToDP(5),
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
  GradientColors:[colors.ltnGreen, colors.lightGreen],
  GradientTextStyle:{ color:colors.light,textTransform:'uppercase' }

});
