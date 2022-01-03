import React from "react";
import { Image, Text, View } from "react-native";
import { style } from "../organisms/style";

const NoDataFound = ({ width='100%',height='100%',text='Data' }) => {
  return (
    <View style={{ alignItems:'center',justifyContent:'center',width:width,height:height }}>
      <Image source={require('../../assets/gifs/no_data_found.gif')} style={{ height:'100%',width:'100%',resizeMode:'cover' }} />
      <Text style={[style.commonTitle,{textAlign:'center'}]}>No {text} found!!</Text>
    </View>
  );
};

export default NoDataFound;
