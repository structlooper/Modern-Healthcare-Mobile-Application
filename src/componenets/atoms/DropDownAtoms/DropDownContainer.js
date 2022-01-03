import React from "react";
import { Collapse, CollapseBody, CollapseHeader } from "accordion-collapse-react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "../../organisms/style";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../organisms/settings";

const DropDownContainer = ({title,ModalState,cameraAction,desc,notShowImageUpload =false}) => {
  return (
    <View>
      <Collapse style={{
        marginVertical:heightPercentageToDP(1),
        marginHorizontal:widthPercentageToDP(1),
        backgroundColor:colors.light,
        elevation:5,
        borderRadius:10
      }} >
        <CollapseHeader>
          <View style={{
            padding:heightPercentageToDP(2),
            flexDirection:'row',
            alignItems:'center'
          }} >
            <View style={{ flex:1 }}>
              <Text style={[style.commonTitle,{textTransform:'capitalize'}]}>{title}</Text>
              {desc === '' || desc === undefined?null :<Text style={style.commonText}>{desc}</Text>}
            </View>
            <View style={{ flex:.1,alignItems:'center' }}>
              <TouchableOpacity onPress={()=>ModalState.setState(true)}>
                <FontAwesome5
                  name={'trash'}
                  size={commonIconSize}
                  color={colors.red}
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
            justifyContent:'center'
          }}>
            <TouchableOpacity style={{ flexDirection:'row',alignItems:'center' }} >
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
            {
              notShowImageUpload?
                null:
                <TouchableOpacity style={{ marginTop:heightPercentageToDP(2),flexDirection:'row',alignItems:'center' }} onPress={cameraAction}>
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
            }

          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default DropDownContainer;
