import React from "react";
import { StyleSheet } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";

const RenderMapViewData = ({ LocationState }) => {
  return (
   <MapView
              provider={PROVIDER_GOOGLE}
              style={{ ...StyleSheet.absoluteFillObject,}}
              region={LocationState.state}
              onRegionChangeComplete={async region => {
                LocationState.setState({
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
  );
};

export default RenderMapViewData;
