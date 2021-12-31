import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import GetCurrentLocation from "../../../../componenets/organisms/Location/GetCurrentLocation";
import { LATITUD_DELTA, LONGITUDE_DELTA } from "../../../../componenets/organisms/settings";
import GooglePaceInput from "../../../../componenets/organisms/Location/GooglePaceInput";


const window = Dimensions.get('window');
const {width, height} = window;
const AddPharmacy = ({ navigation }) => {
  const [origin , setOrigin] = useState({
    latitude: 28.6196,
    longitude: 77.0550,
    latitudeDelta: LONGITUDE_DELTA,
    longitudeDelta: LATITUD_DELTA,
  });

  useEffect(()=>{
    GetCurrentLocation().then(result=>{
      if (result.status){
        console.log(result)

        setOrigin({
          latitude: parseFloat(result.currentLat),
          longitude: parseFloat(result.currentLng),
          latitudeDelta: LONGITUDE_DELTA,
          longitudeDelta: LATITUD_DELTA,
        })
      }
    })
  },[])
  return (
    <View style={style.mainContainer}>
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Add Pharmacy'} backButton={true} />
      <GooglePaceInput LocationState={{ state:origin,setState:setOrigin }} />

      <View style={{
        width:widthPercentageToDP(90),
        height:heightPercentageToDP(40),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        elevation:5
      }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ ...StyleSheet.absoluteFillObject,}}
          region={origin}
          onRegionChangeComplete={async region => {
            setOrigin({
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            })

          }}
          scrollEnabled={true}
          loadingEnabled={true}
          onMapReady={() => console.log('READY')}
          mapType="terrain"
          ref={mapRef => (mapRef === null ? null : mapRef.fitToElements(true))}>


        </MapView>
      </View>

    </View>
  );
};

export default AddPharmacy;
