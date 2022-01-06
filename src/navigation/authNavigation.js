import React  from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colors } from "../theme/colors";
import Testing from "../screens/auth/Testing";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { heightPercentageToDP } from "react-native-responsive-screen";
import ProfilePage from "../screens/auth/ProfilePage";
import SelectProfileScreen from "../screens/auth/SelectProfileScreen";
import HomePage from "../screens/auth/HomePage";
import VerifyDetailsInfo from "../screens/auth/BookAppointment/VerifyDocument/VerifyDetailsInfo";
import VerifyIdentityList from "../screens/auth/BookAppointment/VerifyDocument/VerifyIdentityList";
import VerifyDetailsUploadDoc from "../screens/auth/BookAppointment/VerifyDocument/VerifyDetailsUploadDoc";
import VerifyIdentityConfirm from "../screens/auth/BookAppointment/VerifyDocument/VerifyIdentityConfirm";
import TypeOfAppointments from "../screens/auth/BookAppointment/TypeOfAppointments";
import ReasonForVisit from "../screens/auth/BookAppointment/ReasonForVisit";
import SymptomsPage from "../screens/auth/BookAppointment/FamilyDoctorServicesScreens/SymptomsPage";
import RefillMedicines from "../screens/auth/BookAppointment/FamilyDoctorServicesScreens/RefillMedicines";
import Consultation from "../screens/auth/BookAppointment/FamilyDoctorServicesScreens/Consultation";
import NoteFormsScreen from "../screens/auth/BookAppointment/FamilyDoctorServicesScreens/NoteFormsScreen";
import CommonPage from "../screens/auth/BookAppointment/FamilyDoctorServicesScreens/ChargedServices/CommonPage";
import FamilyDoctorList from "../screens/auth/BookAppointment/FamilyDoctorList";
import ServiceList from "../screens/auth/BookAppointment/SpecialistServices/ServiceList";
import SpecialistDoctorList from "../screens/auth/BookAppointment/SpecialistDoctorList";
import DateTimeSelection from "../screens/auth/BookAppointment/DateTimeSelection";
import AppointmentConfirmPage from "../screens/auth/BookAppointment/AppointmentConfirmPage";
import AppointmentDetailsPage from "../screens/auth/BookAppointment/AppointmentDetailsPage";
import HealthRecordList from "../screens/auth/HealthRecords/HealthRecordList";
import MedicalHistoryList from "../screens/auth/HealthRecords/MedicalHistory/MedicalHistoryList";
import UploadFilesAndImages from "../screens/auth/HealthRecords/MedicalHistory/UploadFilesAndImages";
import MedicationsList from "../screens/auth/HealthRecords/Medications/MedicationsList";
import AddNewMedication from "../screens/auth/HealthRecords/Medications/AddNewMedication";
import VaccinationsList from "../screens/auth/HealthRecords/Vaccinations/VaccinationsList";
import AllergiesList from "../screens/auth/HealthRecords/Allergies/AllergiesList";
import PharmaciesList from "../screens/auth/HealthRecords/Pharmacy/PharmaciesList";
import AddPharmacy from "../screens/auth/HealthRecords/Pharmacy/AddPharmacy";
import CareTeamList from "../screens/auth/HealthRecords/CareTeam/CareTeamList";
import TestsList from "../screens/auth/HealthRecords/Tests/TestsList";
import OthersList from "../screens/auth/HealthRecords/Others/OthersList";
import FaqHomeScreen from "../screens/auth/FaqScreens/FaqHomeScreen";
import FaqQuestionHistory from "../screens/auth/FaqScreens/FaqQuestionHistory";
import FaqsList from "../screens/auth/FaqScreens/FaqsList";
import SettingsList from "../screens/auth/Settings/SettingsList";
import UserAccount from "../screens/auth/Settings/MyAccount/UserAccount";
import { commonIconSize } from "../componenets/organisms/settings";
import SecurityHome from "../screens/auth/Settings/Security/SecurityHome";
import ChangePassword from "../screens/auth/Settings/Security/ChangePassword";
import PrivacyPage from "../screens/auth/Settings/Privacy/PrivacyPage";
import NotificationSettings from "../screens/auth/Settings/NotificationSettings/NotificationSettings";
import NotificationList from "../screens/auth/Settings/NotificationSettings/NotificationList";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const BottomStack = () => {
  let iconsSize = commonIconSize+8;
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        keyboardHidesTabBar: true,
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
        component={MainScreenStack}
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
        name="HeathRecordList"
        component={HealthRecordListStack}
        options={{
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
        name="FaqStackScreen"
        component={FaqStackScreen}
        options={{
          tabBarLabel: 'faq',

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
        name="settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'settings',

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
const MainScreenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeTab'}
    >
      <Stack.Screen name="HomeTab"  component={HomePage} />
      <Stack.Screen name="UserAccountGeneral"  component={UserAccount} />
      <Stack.Screen name="NotificationList"  component={NotificationList} />


    </Stack.Navigator>
      )
}
const SettingsStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SettingsList'}
    >
      <Stack.Screen name="SettingsList"  component={SettingsList} />
      <Stack.Screen name="UserAccount"  component={UserAccount} />
      <Stack.Screen name="SecurityHome"  component={SecurityHome} />
      <Stack.Screen name="ChangePassword"  component={ChangePassword} />
      <Stack.Screen name="PrivacyPage"  component={PrivacyPage} />
      <Stack.Screen name="NotificationSettings"  component={NotificationSettings} />

    </Stack.Navigator>
      )
}
const FaqStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'FaqHomeScreen'}
    >
      <Stack.Screen name="FaqHomeScreen"  component={FaqHomeScreen} />
      <Stack.Screen name="FaqQuestionHistory"  component={FaqQuestionHistory} />
      <Stack.Screen name="FaqsList"  component={FaqsList} />
    </Stack.Navigator>
      )
}
const HealthRecordListStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HealthRecordListMainTab'}
    >
      <Stack.Screen name="HealthRecordListMainTab"  component={HealthRecordList} />
      <Stack.Screen name="MedicalHistoryList"  component={MedicalHistoryList} />
      <Stack.Screen name="MedicationsList"  component={MedicationsList} />
      <Stack.Screen name="AddNewMedication"  component={AddNewMedication} />
      <Stack.Screen name="VaccinationsList"  component={VaccinationsList} />
      <Stack.Screen name="AllergiesList"  component={AllergiesList} />
      <Stack.Screen name="PharmaciesList"  component={PharmaciesList} />
      <Stack.Screen name="AddPharmacy"  component={AddPharmacy} />
      <Stack.Screen name="CareTeamList"  component={CareTeamList} />
      <Stack.Screen name="TestsList"  component={TestsList} />
      <Stack.Screen name="OthersList"  component={OthersList} />
    </Stack.Navigator>
  );
};

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
      <Stack.Screen name="VerifyDetailsConfirmation"  component={VerifyIdentityConfirm} />
      <Stack.Screen name="TypesOfAppointments"  component={TypeOfAppointments} />
      <Stack.Screen name="ReasonForVisit"  component={ReasonForVisit} />
      <Stack.Screen name="SymptomsPage"  component={SymptomsPage} />
      <Stack.Screen name="RefillMedicines"  component={RefillMedicines} />
      <Stack.Screen name="Consultation"  component={Consultation} />
      <Stack.Screen name="NoteFormsScreen"  component={NoteFormsScreen} />
      <Stack.Screen name="CommonPage"  component={CommonPage} />
      <Stack.Screen name="FamilyDoctorList"  component={FamilyDoctorList} />
      <Stack.Screen name="ServiceList"  component={ServiceList} />
      <Stack.Screen name="SpecialistDoctorList"  component={SpecialistDoctorList} />
      <Stack.Screen name="DateTimeSelection"  component={DateTimeSelection} />
      <Stack.Screen name="AppointmentConfirmPage"  component={AppointmentConfirmPage} />
      <Stack.Screen name="AppointmentDetailsPage"  component={AppointmentDetailsPage} />


      <Stack.Screen name="UploadFilesAndImages"  component={UploadFilesAndImages} />

      <Stack.Screen name="Profile"  component={ProfilePage} />
      <Stack.Screen name="SelectProfile"  component={SelectProfileScreen} />
      <Stack.Screen name="Test"  component={Testing} />


    </Stack.Navigator>
  );
};

export const AuthNavigation = () => <HomeScreenStack />


export default AuthNavigation;
