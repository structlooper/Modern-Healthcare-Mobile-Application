import React from "react";
import { ScrollView, Text, View } from "react-native";
import { colors } from "../../../../theme/colors";
import SettingHeader from "../../../../componenets/molecules/Headers/SettingHeader";
import { style } from "../../../../componenets/organisms/style";

const PrivacyPage = ({ navigation }) => {
  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      <SettingHeader headerTitle={'Privacy'} navigation={navigation}  />
      <View style={{ flex:.85,alignItems:'center' }}>
        <ScrollView style={{ padding:'10%' }}>
          <Text style={[style.commonText,{ textAlign:'center' }]}>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit

          </Text>
          <Text style={[style.commonText,{ textAlign:'center',marginTop:'2%' }]}>
            eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit

          </Text>
        </ScrollView>

      </View>
    </View>
  );
};

export default PrivacyPage;
