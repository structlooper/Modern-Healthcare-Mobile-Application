import React from "react";
import { getOneTimeLocation } from "./LocationFunction";
import Platform from "react-native/Libraries/Utilities/Platform";
import { PermissionsAndroid } from "react-native";

const GetCurrentLocation = () => {
  return new Promise(async resolve => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation().then(locationDetails => {
        resolve(locationDetails);
      })
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation().then(locationDetails => {
            resolve(locationDetails);
          })
          // subscribeLocationLocation();
        } else {
          resolve({status:false,message:'Permission Denied'});
        }
      } catch (err) {
        console.warn(err);
      }
    }
  })

};

export default GetCurrentLocation;
