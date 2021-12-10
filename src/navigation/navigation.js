import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import introScreenPage from "../screens/application/introScreenPage";
import intro from "../componenets/templates/intro";
import signupEmailPage from "../screens/application/signup/signupEmailPage";
import signupEmailInfo from "../screens/application/signup/signupEmailInfo";
import signupEmailInfoConfirm from "../screens/application/signup/signupEmailInfoConfirm";

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

    </Stack.Navigator>
  );
}

export default function Navigation() {
  return <MyStack />
}
