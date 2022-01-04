import React from "react";
import { FlatList, View } from "react-native";
import { colors } from "../../../theme/colors";
import SettingButton from "./SettingButton";
import SettingHeader from "../../../componenets/molecules/Headers/SettingHeader";


const SettingsList = ({ navigation }) => {
  const CommonItemRender = ({ item }) => <SettingButton title={item.title} icon={item.icon} action={item.action}   />

  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
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
              action:()=>console.log('this')
            },
            {
              title:'privacy',
              icon:'shield',
              action:()=>console.log('this')
            },
            {
              title:'notifications',
              icon:'bell',
              action:()=>console.log('this')
            },
            {
              title:'payment',
              icon:'currency-usd-circle',
              action:()=>console.log('this')
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
