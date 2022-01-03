import React from "react";
import { Collapse, CollapseBody, CollapseHeader } from "accordion-collapse-react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../theme/colors";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { size } from "../../../theme/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../organisms/settings";
import { style } from "../../organisms/style";

const DropDownContainerInput = ({NewInputState}) => {

  return (
    <View>
      <Collapse style={{
        marginVertical:heightPercentageToDP(1),
        marginHorizontal:widthPercentageToDP(1),
        backgroundColor:colors.light,
        elevation:5,
        borderRadius:10
      }}  isExpanded={true} >
        <CollapseHeader>
          <View style={{
            padding:heightPercentageToDP(2),
            flexDirection:'row',
            alignItems:'center'
          }} >
            <View style={{ flex:1 }}>
              <TextInput
                style={{
                  // flex:2,
                  color:colors.dark,
                  borderRadius:10,
                  width:widthPercentageToDP(40),
                  fontSize:size.label,
                  padding:'1%'
                }}
                onChangeText={NewInputState.setState}
                value={NewInputState.state}
                autoFocus={true}
                placeholder={'Enter title'}
                placeholderTextColor={colors.grey}
              />
            </View>
            <View style={{ flex:.1,alignItems:'center' }}>
              <TouchableOpacity onPress={()=>console.log(true)}>
                <FontAwesome5
                  name={'check-circle'}
                  size={commonIconSize+5}
                  color={colors.ltnGreen}
                />
              </TouchableOpacity>
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={{
            borderRadius:10,
            backgroundColor:colors.light,
            elevation:10,
            padding:heightPercentageToDP(2),
          }}>
            <TouchableOpacity style={{ marginBottom:heightPercentageToDP(2) ,flexDirection:'row',alignItems:'center' }} >
              <View style={{ flex:.1}}>
                <FontAwesome5
                  name={'align-left'}
                  size={commonIconSize}
                  color={colors.grey}
                />
              </View>
              <View style={{ marginLeft:widthPercentageToDP(1) }}>
                <Text style={style.commonText}>Details</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:'row',alignItems:'center' }} >
              <View style={{ flex:.1}}>
                <FontAwesome5
                  name={'camera'}
                  size={commonIconSize}
                  color={colors.grey}
                />
              </View>
              <View style={{ marginLeft:widthPercentageToDP(1) }}>
                <Text style={style.commonText}>Photos</Text>
              </View>

            </TouchableOpacity>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default DropDownContainerInput;
