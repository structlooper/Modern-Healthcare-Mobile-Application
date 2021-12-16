import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import intro from "../componenets/templates/intro";
import ProfilePage from "../screens/auth/ProfilePage";
import SelectProfileScreen from "../screens/auth/SelectProfileScreen";


const Stack = createStackNavigator();

function MyStackOne() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CreateProfile"
    >
      <Stack.Screen name="CreateProfile"  component={ProfilePage} />
      <Stack.Screen name="ShowProfile"  component={SelectProfileScreen} />


    </Stack.Navigator>
  );
}

export default function MidNavigation() {
  return <MyStackOne />
}
