import React from "react";
import {  View } from "react-native";
import { commonIconSize, GOOGLE_MAPS_APIKEY } from "../settings";
import { colors } from "../../../theme/colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { getLatLngFromAddress } from "../functions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { size } from "../../../theme/fonts";



const GooglePaceInput = ({ LocationState }) => {
  return (
    <View style={{ flexDirection:'row',borderRadius:10,marginBottom:'1%',backgroundColor:colors.light,elevation:5,paddingHorizontal:'2%' }}>
      <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data.description, (details));
          getLatLngFromAddress(data.description).then(response => {
            const latitudeDelta= 0.0080;
            const  longitudeDelta= 0.008;
            if (response.lat !== '' && response.lat !== undefined && response.lat !== null){
              LocationState.setState({
                latitude: response.lat,
                longitude: response.lng,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
              })
            }
          })
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        renderLeftButton={()=>(
          <View style={{ alignSelf:'center' }}>
            <FontAwesome5
              name={'search'}
              size={commonIconSize}
              color={colors.grey}
            />
          </View>

        )}
        styles={{
          textInputContainer: {
            backgroundColor: colors.light,
            borderTopWidth: 0,
            borderBottomWidth:0,
          },
          description: {
            fontWeight: 'bold',
            color:colors.dark
          },
          textInput: {
            marginRight: 0,
            // height: 38,
            color: colors.dark,
            fontSize: size.label,
          },
          predefinedPlacesDescription: {
            color: colors.dark
          },
        }}
       placeholder={'Search Pharmacy near you..'}
      />
    </View>

  );
};
export default GooglePaceInput;
