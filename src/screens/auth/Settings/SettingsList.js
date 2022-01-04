import React from "react";
import { FlatList, Text, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import { style } from "../../../componenets/organisms/style";
import SettingButton from "./SettingButton";


const SettingsList = () => {
  const CommonItemRender = ({ item }) => <SettingButton title={item.title} icon={item.icon} action={item.action}   />

  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <View style={{
        backgroundColor:colors.light,
        flex:.15,
        elevation:5,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
      }}>
        {statusBar(colors.light)}
        <Text style={style.headerHeading}>Settings</Text>
      </View>
      <View style={{ flex:.8,padding:'5%'}}>

        <FlatList
          data={[
            {
              title:'my account',
              icon:'home',
              action:()=>console.log('this')
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
