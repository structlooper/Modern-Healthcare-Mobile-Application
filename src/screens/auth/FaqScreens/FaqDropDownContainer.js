import React from "react";
import { Collapse, CollapseBody, CollapseHeader } from "accordion-collapse-react-native";
import { Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../componenets/organisms/settings";
import { colors } from "../../../theme/colors";
import { style } from "../../../componenets/organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const FaqDropDownContainer = ({ CollapseStatus,question,answer,isAns,time,countUpdate }) => {
  if (isAns){
    return (
      <Collapse
        isCollapsed={CollapseStatus.state.includes(question)}
        onToggle={isColl => {
          let index= CollapseStatus.state.indexOf(question);
          if (index === -1){
            CollapseStatus.state.push(question)
          }else{
            CollapseStatus.state.splice(index,1)
          }
          countUpdate.setState(CollapseStatus.state.length)

          // CollapseStatus.setState(isColl);
        }}
        style={{
          marginTop:heightPercentageToDP(2)
        }}
      >
        <CollapseHeader>
          <View style={{ flexDirection:"row",alignItems:'center' }}>
            <View style={{ flex:.1 }}>
              <FontAwesome5
                name={CollapseStatus.state.includes(question)?'arrow-circle-up':'arrow-circle-down'}
                size={commonIconSize-5}
                color={colors.grey}
              />
            </View>
            <View style={{ flex:time!==undefined?.7:.9 }}>
              <Text style={style.commonTitle}>{question}</Text>
            </View>

            {
              time !== undefined?
                <View style={{flex:.2,alignItems:'center' }}>
                  <Text style={style.commonText}>{time}</Text>
                </View>:
                null
            }
          </View>

        </CollapseHeader>

        <CollapseBody style={{ padding:'5%' }}>
          <View style={{
            backgroundColor:colors.light,
            elevation:10,
            width:widthPercentageToDP(60),
            minHeight: heightPercentageToDP(10),
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            padding:'5%'
          }}>
            <Text style={[style.commonTitle,{color:colors.bDarkPurple}]}>{answer}</Text>
          </View>
        </CollapseBody>
      </Collapse>
    );
  }else{
    return (
      <View style={{ marginTop:heightPercentageToDP(2) }}>
        <View style={{ flexDirection:"row",alignItems:'center' }}>
          <View style={{ flex:.1 }}>

          </View>
          <View style={{ flex:.7 }}>
            <Text style={style.commonTitle}>{question}</Text>
          </View>
          {
            time !== undefined?
              <View style={{flex:.2,alignItems:'center' }}>
                <Text style={style.commonText}>{time}</Text>
              </View>:
              null
          }

        </View>
      </View>
    )
  }

};

export default FaqDropDownContainer;
