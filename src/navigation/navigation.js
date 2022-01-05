import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import introScreenPage from "../screens/application/introScreenPage";
import intro from "../componenets/templates/intro";
import signupEmailPage from "../screens/application/signup/signupEmailPage";
import signupEmailInfo from "../screens/application/signup/signupEmailInfo";
import signupEmailInfoConfirm from "../screens/application/signup/signupEmailInfoConfirm";
import signupPhone from "../screens/application/signup/signupPhone";
import verificationOtpPage from "../screens/application/signup/verificationOtpPage";
import createPassword from "../screens/application/signup/createPassword";
import loginScreen from "../screens/application/login/loginScreen";
import ForgotPassword from "../screens/application/signup/forgotPassword";
import PrivacyPage from "../screens/auth/Settings/Privacy/PrivacyPage";
import TermsCondition from "../screens/auth/Settings/Privacy/TermsCondition";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="StartScreen"
    >
      <Stack.Screen name="StartScreen"  component={intro} />
      <Stack.Screen name="IntroScreenPage"  component={introScreenPage} />
      <Stack.Screen name="SignUpEmail"  component={signupEmailPage} />
      <Stack.Screen name="SignUpEmailInfo"  component={signupEmailInfo} />
      <Stack.Screen name="SignUpEmailInfoConfirm"  component={signupEmailInfoConfirm} />
      <Stack.Screen name="SignPhone"  component={signupPhone} />
      <Stack.Screen name="VerificationOtpPage"  component={verificationOtpPage} />
      <Stack.Screen name="CreatePassword"  component={createPassword} />
      <Stack.Screen name="LoginScreen"  component={loginScreen} />
      <Stack.Screen name="ForgotPassword"  component={ForgotPassword} />
      <Stack.Screen name="PrivacyPage"  component={PrivacyPage} />
      <Stack.Screen name="TermsCondition"  component={TermsCondition} />


    </Stack.Navigator>
  );
}

export default function Navigation() {
  return <MyStack />
}
