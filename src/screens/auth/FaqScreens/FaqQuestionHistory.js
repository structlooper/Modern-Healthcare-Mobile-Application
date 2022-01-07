import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { style } from "../../../componenets/organisms/style";
import FaqScreenHeader from "../../../componenets/molecules/Headers/FaqScreenHeader";

import FaqDropDownContainer from "./FaqDropDownContainer";
import { customState } from "../../../componenets/organisms/functions";

const FaqQuestionHistory = ({ navigation }) => {
  const [collapse,setCollapse] = useState([]);
  const [collapseCount,setCollapseCount] = useState();
  const CollapseState = {state:collapse,setState:setCollapse}

  const CommonItemRender = ({ item }) => <FaqDropDownContainer
    question={item.question}
    answer={item.answer}
    isAns={item.isAns}
    time={item.time}
    countUpdate={customState(collapseCount,setCollapseCount)}
    CollapseStatus={CollapseState} />;

  return (
    <View style={style.mainContainer}>
      <FaqScreenHeader
        header={'Question history'}
        backButton={true}
        navigation={navigation}
        active={'history'} />

        <View style={{ flex:1,marginTop:'4%',padding:'1%' }}>

          <FlatList
            data={[
              {
                question:"My referral hasn't arrived yet?",
                isAns:false,
                answer:'',
                time:'2m'
              },
              {
                question:'When will my prescription arrive?',
                isAns:true,
                answer:'Sorry for the delay they will arrive shortly.',
                time:'6d'
              },
              {
                question:'Can doctor view any medical History?',
                isAns:true,
                answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                  'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n',
                time:'1W'
              },
              {
                question:'When will my travel vaccine follow up be?',
                isAns:true,
                answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                  'molestiae quas vel sint commodi repudiandae laborum\n',
                time:'7W'
              },

            ]}
            numColumns={1}
            renderItem={CommonItemRender}
            keyExtractor={item => item.question}
            style={{ overflow:'scroll',marginBottom:'10%' }}
          />
        </View>

    </View>
  );
};

export default FaqQuestionHistory;
