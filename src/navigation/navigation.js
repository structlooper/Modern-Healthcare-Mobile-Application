import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import introScreenPage from "../screens/application/introScreenPage";
import intro from "../componenets/templates/intro";

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

    </Stack.Navigator>
  );
}

export default function Navigation() {
  return <MyStack />
}
