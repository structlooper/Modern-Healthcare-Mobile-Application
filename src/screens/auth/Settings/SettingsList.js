import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { colors } from "../../../theme/colors";
import SettingButton from "./SettingButton";
import SettingHeader from "../../../componenets/molecules/Headers/SettingHeader";
import { SetAuthProfileSkipped, SetAuthUserToken } from "../../../redux/actions";
import { useUserContext } from "../../../redux/context";
import { useDispatch } from "react-redux";
import { CommonConfirmationModalAuth } from "../../../componenets/molecules/Modals/exitModalConfirmation";
import { customState } from "../../../componenets/organisms/functions";


const SettingsList = ({ navigation }) => {
  const dispatch = useDispatch();
  const {SignOut}= useUserContext();
  const {ProfileSkipped}= useUserContext();
  const CommonItemRender = ({ item }) => <SettingButton title={item.title} icon={item.icon} action={item.action}   />
  const [logoutConfirmationModal,setLogoutConfirmationModal] = useState(false)
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <CommonConfirmationModalAuth
        modalState={customState(logoutConfirmationModal,setLogoutConfirmationModal)}
        title={'Confirmation'}
        text={'Are you sure want to logout?'}
        YesFunction = {()=>{
          setLogoutConfirmationModal(false)
          dispatch(SetAuthUserToken(''))
          dispatch(SetAuthProfileSkipped(false))
          SignOut()
          ProfileSkipped(false)
        }}
      />
      <SettingHeader headerTitle={'Settings'} />
      <View style={{ flex:.8,padding:'5%'}}>

        <FlatList
          data={[
            {
              title:'my account',
              icon:'home',
              action:()=>navigation.navigate('UserAccount')
            },
            {
              title:'security',
              icon:'lock',
              action:()=>navigation.navigate('SecurityHome')
            },
            {
              title:'privacy',
              icon:'shield',
              action:()=>navigation.navigate('PrivacyPage')
            },
            {
              title:'notifications',
              icon:'bell',
              action:()=>navigation.navigate('NotificationSettings')
            },
            {
              title:'payment',
              icon:'currency-usd-circle',
              action:()=>console.log('this')
            },
            {
              title:'logout',
              icon:'logout',
              action:()=>{
                setLogoutConfirmationModal(true)
              }
            },

          ]}
          numColumns={1}
          renderItem={CommonItemRender}
          keyExtractor={item => item.title}
          style={{ overflow:'scroll' }}
        />

      </View>

    </View>
  );
};

export default SettingsList;
