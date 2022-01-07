import React from "react";
import { FlatList, View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";
import NotificationContainer from "./NotificationContainer";

const NotificationList = ({ navigation }) => {

  const CommonItemRender = ({ item }) => <NotificationContainer text={item.text} icon={item.icon} time={item.time} />
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'Notifications'} navigation={navigation}  />
      <View style={{ flex:.85 }}>
        <View style={{ marginTop:'5%' }}>
         <FlatList
              data={[
                {
                  text:'Your 8 am appointment start in 5 min',
                  icon:require('../../../../assets/images/notifications/97.png'),
                  time:'1m'
                }, {
                  text:'Your request to refill "Avil" has been confirmed',
                  icon:require('../../../../assets/images/notifications/95.png'),
                  time:'2m'
                }, {
                  text:'Your appointment for april 21 has been canceled',
                  icon:require('../../../../assets/images/notifications/96.png'),
                  time:'10h'
                }, {
                  text:'Your test report is available',
                  icon:require('../../../../assets/images/notifications/94.png'),
                  time:'20h'
                },

              ]}
              style={{ overflow:'scroll' }}
              numColumns={1}
              renderItem={CommonItemRender}
              keyExtractor={item => item.text}
            />
        </View>
        </View>
    </View>
  );
};

export default NotificationList;
