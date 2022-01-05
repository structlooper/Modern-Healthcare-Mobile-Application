import React, { useState } from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";
import { LocalStyle, style } from "../../../../componenets/organisms/style";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { fonts, size } from "../../../../theme/fonts";
import CountryLanguageModal from "../../../../componenets/molecules/Modals/CountryLanguageModal";
import { useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { commonIconSize } from "../../../../componenets/organisms/settings";

const UserAccount = ({ navigation }) => {
  const [countryModal,SetCountryModal] = useState(false);
  const countryModalState={state:countryModal, setState:SetCountryModal};
  const {SelectedCountry} = useSelector(state => state.doctorFilterReducer);
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'My Account'} navigation={navigation} />
      <CountryLanguageModal modalShowState={countryModalState} />
      <View style={{ flex:.85 }}>

        <ScrollView style={{ paddingHorizontal:'5%',}} contentContainerStyle={{ paddingBottom:'10%'   }}>
          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <TouchableOpacity style={{
                width:widthPercentageToDP('40%'),
                height:heightPercentageToDP(5),

                backgroundColor:colors.bckGreen,
                borderRadius:10,
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row'
              }} onPress={()=>countryModalState.setState(true)}>
                <View style={{ flex:.1 }}>
                  <Image source={{ uri:SelectedCountry.iconUrl }} style={{ width:20,height:20,resizeMode:'contain' }} />
                </View>
                <View style={{ flex:.3}}>
                  <Text style={{ color:colors.grey,fontSize:size.text,fontFamily:fonts.family,marginLeft:widthPercentageToDP(1) }}> {SelectedCountry.language}</Text>
                </View>
                <View style={{ flex:.2 }}>
                  <MaterialCommunityIcons
                    name={"chevron-down"}
                    color={colors.blue}
                    size={commonIconSize+5}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flex:.2 }}>
              <TouchableOpacity style={{ alignItems:'center',backgroundColor:colors.grey,borderRadius:10 }} >
                <Text style={[style.commonTitle,{color:colors.light}]}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Email</Text>
              <Text style={LocalStyle.itemTitle}>Test@gmail.com</Text>
            </View>
          </View>

          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Phone number</Text>
              <TouchableOpacity>
                <Text style={[style.commonText,{ color:colors.lightGreen,textTransform:'uppercase' }]}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>first name</Text>
              <Text style={LocalStyle.itemTitle}>Alan</Text>
            </View>
          </View>



          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>middle name</Text>
              <TouchableOpacity>
                <Text style={[style.commonText,{ color:colors.lightGreen,textTransform:'uppercase' }]}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>last name</Text>
              <Text style={LocalStyle.itemTitle}>walker</Text>
            </View>
          </View>

          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>gender</Text>
              <Text style={LocalStyle.itemTitle}>male</Text>
            </View>
          </View>

          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Date of birth</Text>
              <Text style={LocalStyle.itemTitle}>January 4, 2003</Text>
            </View>
          </View>


          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Health province</Text>
              <Text style={LocalStyle.itemTitle}>Ontario</Text>
            </View>
          </View>
          <View style={LocalStyle.itemContainer}>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Health Card</Text>
              <Text style={LocalStyle.itemTitle}>*****</Text>
            </View>
            <View style={{ flex:1 }}>
              <Text style={LocalStyle.itemHeader}>Version</Text>
              <Text style={LocalStyle.itemTitle}>239</Text>
            </View>
          </View>
          <View style={{ marginTop:heightPercentageToDP(3),alignItems:'center',justifyContent:'center' }}>
            <TouchableOpacity>
              <Text style={[style.commonTitle,{color:colors.red, textTransform:'capitalize'}]}>Delete account</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>
      <View style={{ flex:.1,alignItems:'center',justifyContent:'center' }} />

    </View>
  );
};

export default UserAccount;
