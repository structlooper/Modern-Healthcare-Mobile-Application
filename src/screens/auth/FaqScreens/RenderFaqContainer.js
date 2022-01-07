import React from "react";
import { FlatList, Text, View } from "react-native";
import FaqDropDownContainer from "./FaqDropDownContainer";
import { style } from "../../../componenets/organisms/style";

const RenderFaqContainer = ({ CollapseState,countUpdate,title,list = [] }) => {

  const CommonItemRender = ({ item }) => <FaqDropDownContainer
    question={item.question}
    answer={item.answer}
    isAns={item.isAns}
    countUpdate={countUpdate}
    CollapseStatus={CollapseState} />;
  return (
    <View style={{ marginTop:'2%' }}>
      <Text style={[style.commonTitle,{fontWeight:'bold',textTransform:'capitalize'}]}>{title}</Text>
      <FlatList
        data={list}
        numColumns={1}
        renderItem={CommonItemRender}
        keyExtractor={item => item.question}
        style={{ overflow:'scroll',marginBottom:'10%' }}
      />
    </View>
  );
};

export default RenderFaqContainer;
