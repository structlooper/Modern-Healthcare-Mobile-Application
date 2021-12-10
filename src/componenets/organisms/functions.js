import React from "react";
import { Linking } from "react-native";
import { openInbox } from 'react-native-email-link'

export const CheckEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


export const OpenMail = () => {
  openInbox().then(r => {
    console.log(r)
  })

}
