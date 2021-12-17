import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors } from "../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { appName } from "../componenets/organisms/settings";

import Testing from "../screens/auth/Testing";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { heightPercentageToDP } from "react-native-responsive-screen";
import ProfilePage from "../screens/auth/ProfilePage";
import { useSelector } from "react-redux";
import SelectProfileScreen from "../screens/auth/SelectProfileScreen";
import HomePage from "../screens/auth/HomePage";
import MidNavigation from "./MidNavigation";
import { useUserContext } from "../redux/context";
import VerifyDetailsInfo from "../screens/auth/VerifyDocument/VerifyDetailsInfo";
import VerifyIdentityList from "../screens/auth/VerifyDocument/VerifyIdentityList";
import VerifyDetailsUploadDoc from "../screens/auth/VerifyDocument/VerifyDetailsUploadDoc";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomStack = () => {
  let iconsSize = 33;
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: colors.dark,
        inactiveTintColor: colors.dark,
        style: {
          position:'absolute',
          bottom:0,
          right:0,
          left:0,
          elevation:15,
          height:heightPercentageToDP(8),
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
        },

        indicatorStyle: { backgroundColor: 'black'},
        showLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:({color , focused}) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={iconsSize}
            />
          ),
        }}

      />
      <Tab.Screen
        name="Orders"
        component={Testing}
        options={{
          tabBarLabel: 'Orders',

          tabBarIcon:({color , focused}) => (
            <MaterialCommunityIcons
              name={focused ? "folder" : "folder-outline"}
              color={color}
              size={iconsSize}
            />
          )
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Testing}
        options={{
          tabBarLabel: 'Offers',

          tabBarIcon:({color , focused}) => (
            <MaterialCommunityIcons
              name={focused ? "chat" : "chat-outline"}
              color={color}
              size={iconsSize}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Testing}
        options={{
          tabBarLabel: 'Profile',

          tabBarIcon:({color , focused}) => (
            <MaterialCommunityIcons
              name={focused ? "cog" : "cog-outline"}
              color={color}
              size={iconsSize}
            />
          )
        }}
      />


    </Tab.Navigator>
  )
}
const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeTab'}
    >
      <Stack.Screen name="HomeTab"  component={BottomStack} />
      <Stack.Screen name="VerifyDetailsInfo"  component={VerifyDetailsInfo} />
      <Stack.Screen name="VerifyDetailsList"  component={VerifyIdentityList} />
      <Stack.Screen name="VerifyDetailsUploadDoc"  component={VerifyDetailsUploadDoc} />
      <Stack.Screen name="Profile"  component={ProfilePage} />
      <Stack.Screen name="SelectProfile"  component={SelectProfileScreen} />
      <Stack.Screen name="Test"  component={Testing} />


    </Stack.Navigator>
  );
};

export const AuthNavigation = () => {
    return <HomeScreenStack />
}

export default AuthNavigation;
