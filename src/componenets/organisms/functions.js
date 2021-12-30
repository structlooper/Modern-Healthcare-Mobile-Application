import React from "react";
import { openInbox } from "react-native-email-link";
import ImagePicker from "react-native-image-crop-picker";
import { launchCamera } from "react-native-image-picker";

export const CheckEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const CheckPhone = (phone) => {
  return /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone);
}
export const CheckStringOneDigit = (string) => {
  return /(?=.*\d)/.test(string);
}
export const CheckStringOneUppercase = (string) => {
  return /(?=.*[A-Z])/.test(string);
}
export const CheckStringOneSymbol = (string) => {
  return /(?=.*\W)/.test(string);
}
export const CheckStringLength = (string) => {
  return string.length >= 10;
}
export const OpenMail = () => {
  openInbox().then(r => {
    console.log(r)
  })

}

export const ImagePickerFunction = (uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount) => {
  return new Promise(resolve => {
    ImagePicker.openPicker({
      includeBase64: true,
      multiple: true,
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
    }).then(image => {
      for (let i = 0; i < image.length; i++) {
        let state = uploadedPictures;
        let imageDetails = {
          base64:image[i].data,
          path:image[i].path
        }
        state.push(imageDetails)
        SetUploadedPictures(state)
        SetUploadedPicturesCount(state.length)
      }
      resolve(true)
    }).catch(error => {
      console.log(error)
      resolve(error)
    })
  })
}

export const LaunchCameraFunction = (uploadedPictures,SetUploadedPictures,SetUploadedPicturesCount) => {
  return new Promise(resolve => {
    launchCamera({
      includeBase64: true,
      mediaType: 'photo',
      maxHeight: 500,
      maxWidth: 500,
    }, (response) => {
      if (response["didCancel"] === undefined) {
        let state = uploadedPictures;
        let imageDetails = {
          base64:response.assets[0].base64,
          path:response.assets[0].uri
        }
        state.push(imageDetails)
        SetUploadedPictures(state)
        SetUploadedPicturesCount(state.length)
        resolve(true)
      } else {
        console.log('something went wrong!!')
        resolve('something went wrong')
      }
    }).then()
  })
}
