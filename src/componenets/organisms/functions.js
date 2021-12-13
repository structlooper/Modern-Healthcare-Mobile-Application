import React from "react";
import { openInbox } from "react-native-email-link";

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
