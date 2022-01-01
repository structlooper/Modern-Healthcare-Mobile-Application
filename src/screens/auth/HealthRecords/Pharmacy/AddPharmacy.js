import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import GetCurrentLocation from "../../../../componenets/organisms/Location/GetCurrentLocation";
import { commonIconSize, LATITUD_DELTA, LONGITUDE_DELTA } from "../../../../componenets/organisms/settings";
import GooglePaceInput from "../../../../componenets/organisms/Location/GooglePaceInput";
import { colors } from "../../../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import RenderMapViewData from "../../../../componenets/organisms/Location/RenderMapView";



const AddPharmacy = ({ navigation }) => {
  const [origin , setOrigin] = useState({
    latitude: 28.6196,
    longitude: 77.0550,
    latitudeDelta: LONGITUDE_DELTA,
    longitudeDelta: LATITUD_DELTA,
  });
  const [showNearMeLocations,SetShowShowNearMeLocation] = useState(false);

  useEffect(()=>{
    GetCurrentLocation().then(result=>{
      if (result.status){
        setOrigin({
          latitude: parseFloat(result.currentLat),
          longitude: parseFloat(result.currentLng),
          latitudeDelta: LONGITUDE_DELTA,
          longitudeDelta: LATITUD_DELTA,
        })
      }
    })
  },[])

  const RenderNearLocationContainer = ({text,desc}) => {
    return (
      <TouchableOpacity style={{ flex:1,padding:'4%',marginTop:heightPercentageToDP(1),borderBottomWidth:.5,borderBottomColor:colors.grey }} onPress={()=>navigation.goBack()}>
        <Text style={[style.commonTitle,{fontWeight:'bold'}]}>{text}</Text>
        <Text style={style.commonText}>{desc}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={style.mainContainer}>
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Add Pharmacy'} backButton={true} />
      <View style={{ flex:1 }}>
        <View style={{ paddingHorizontal:widthPercentageToDP(2.5) }}>
          <GooglePaceInput LocationState={{ state:origin,setState:setOrigin }} />
        </View>

        <ScrollView nestedScrollEnabled={true}>
          <View style={{
            width:widthPercentageToDP(85),
            height:heightPercentageToDP(40),
            alignItems:'center',
            justifyContent:'center',
            borderRadius:20,
            backgroundColor:colors.light,
            elevation:5,
            margin:'2%'
          }}>
            <RenderMapViewData LocationState={{ state:origin, setState:setOrigin }} />
          </View>
          <View style={{ alignItems:'flex-end',paddingHorizontal:widthPercentageToDP(5) }}>
            <TouchableOpacity style={{
              flexDirection:'row',
              backgroundColor: showNearMeLocations? colors.light : colors.lightBlue,
              paddingHorizontal:widthPercentageToDP(5),
              paddingVertical:heightPercentageToDP(1),
              marginBottom:heightPercentageToDP(1),
              borderRadius:10,
              alignItems:'center',
              elevation:5,
            }} onPress={()=>SetShowShowNearMeLocation(!showNearMeLocations)}>
              <View style={{  }}>
                <FontAwesome5
                  size={commonIconSize-5}
                  name={'map-marker-alt'}
                  color={showNearMeLocations? colors.dark:colors.light}
                />
              </View>
              <View style={{ marginLeft:widthPercentageToDP(1) }}>
                <Text style={[style.commonTitle,{color:showNearMeLocations? colors.dark: colors.light}]}>Near me</Text>
              </View>
            </TouchableOpacity>
          </View>
          {
            showNearMeLocations?
              <View style={{ flex:1,backgroundColor:colors.light,elevation:5,margin:'1%',borderRadius:10,padding:'1%',marginBottom:heightPercentageToDP(6) }}>
                  <RenderNearLocationContainer desc={'550 Ellington Ave W'} text={'Shoppers Drug Mart Ellington'} />
                  <RenderNearLocationContainer desc={'550 Ellington Ave W'} text={'Uptown Pharmacy'} />
                  <RenderNearLocationContainer desc={'550 Ellington Ave W'} text={'Forest Hill pharmacy'} />
              </View>
              :null
          }
        </ScrollView>

      </View>

    </View>
  );
};

export default AddPharmacy;
