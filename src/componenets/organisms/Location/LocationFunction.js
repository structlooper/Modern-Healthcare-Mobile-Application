import Geolocation from '@react-native-community/geolocation';

export const getOneTimeLocation = () => {
  return new Promise(resolve => {
    // resolve({status:false,message:'Getting Location ...'});
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        //getting the Longitude from the location json
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude =
          JSON.stringify(position.coords.latitude);

        resolve({status:true,message:'You are Here',currentLat:currentLatitude,currentLng:currentLongitude});

      },
      (error) => {
        resolve({status:false,message:error.message});
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  })

};

export const subscribeLocationLocation = (setLocationStatus,setCurrentLatitude,setCurrentLongitude) => {
  const  watchID = Geolocation.watchPosition(
    (position) => {
      //Will give you the location on location change

      setLocationStatus('You are Here');
      console.log(position);

      //getting the Longitude from the location json
      const currentLongitude =
        JSON.stringify(position.coords.longitude);

      //getting the Latitude from the location json
      const currentLatitude =
        JSON.stringify(position.coords.latitude);

      //Setting Longitude state
      setCurrentLongitude(currentLongitude);

      //Setting Latitude state
      setCurrentLatitude(currentLatitude);
    },
    (error) => {
      setLocationStatus(error.message);
    },
    {
      enableHighAccuracy: false,
      maximumAge: 1000
    },
  );
};
