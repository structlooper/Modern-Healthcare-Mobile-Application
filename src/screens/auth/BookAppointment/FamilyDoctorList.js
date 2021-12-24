import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import statusBar from "../../../componenets/molecules/statusBar";
import HeaderVerifyIdentity from "../../../componenets/molecules/HeaderVerifyIdentity";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import ButtomButton from "../../../componenets/molecules/ButtomButton";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SearchAndFilter from "../../../componenets/molecules/SearchAndFilter";
import { fonts, size } from "../../../theme/fonts";
import { style } from "../../../componenets/organisms/style";
import NoPreferences from "../../../componenets/atoms/NoPreferences";
import DoctorDetailsRender from "../../../componenets/atoms/DoctorDetailsRender";

const FamilyDoctorList = ({ navigation }) => {
  const [exitModal,SetExitModal] = useState(false)
  const [showNextButton,SetShowNextButton] = useState(false)
  const [searched,SetSearched] = useState('');
  const [selectedDoctor,SetSelectedDoctor] = useState(null);



  return (
    <View style={{ flex:1,backgroundColor:colors.light }}>
      {statusBar(colors.light)}
      <HeaderVerifyIdentity
        barPercent={.7}
        backButton={true}
        titleText={'Select a Family Doctor'}
        navigation={navigation}
        modalState={exitModal}
        SetModalSate={SetExitModal}
        bottomTextShow={false}
      />
      <View style={{ flex:.8,paddingHorizontal:widthPercentageToDP(5)}}>

        {/*
        search view
        */}
        <SearchAndFilter Search={searched} SetSearch={SetSearched} color={colors.lightBlue}/>

       <NoPreferences />

        {/*
        Doctor list
        */}
        <View style={{ marginTop:heightPercentageToDP(2) }}>
          <Text style={style.commonTitle}>Past family doctors</Text>
          <ScrollView style={{ height:heightPercentageToDP(35) }} >


            <DoctorDetailsRender activeColor={colors.ltnGreen} SetState={SetSelectedDoctor} activeSate={selectedDoctor} doctorName={'Dr. Willi Bor'} doctorType={'Family doctor'} icon={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdzcQ0LAua19fRkXgHRZ-D-6aJtgnYtJgxg&usqp=CAU'} />
            <DoctorDetailsRender activeColor={colors.ltnGreen} SetState={SetSelectedDoctor} activeSate={selectedDoctor} doctorName={'Dr. Voilet hag'} doctorType={'Family doctor'} icon={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhAVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHx8rLS0rLS0tLSstLSstLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAA/EAACAQIDBAcHAQYFBQEAAAAAAQIDEQQFIQYSMVETIkFhcYGRBzJCUqGxwfAUI3KC0eEzYnOy8TRTY5KiJP/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAwACAQMEAwAAAAAAAAABAgMREiExBEFREyIyYRQjcf/aAAwDAQACEQMRAD8A9jQbAQSBkIQgAiAIAQQDZTSAHMDkZ+KzWnTTlKaSXNpfc8/2i9qcINww8Oklr1r2ivNJ38hdD06UyCriorjJJeOp8+Y7bfF1eNacb/JKUdPIyKmd1223WqO/G85PQXkfK+k6uZ0YLrVYL+ZfpkNPPKEr7tSLtx1WnifNlTHTm25Tcu9tv7hpYlx4N+TF5H4vp+hjISV1JWLEJo+cMv2oxNL3Kz87PQ6XLPabiISXSU4S5uPVb77cLjmRcr2y4kczs7thhsUrQqJStrGWkl+DpIyJQjxCCAAARAAFYIBgADhoAUECEICIQgBCuBsjqVbACq1bHEbYbb0cNeClv1O2MXw8X2FH2h7XuiujpO05dt9Yrn468O88Yr4i7bbu27tvtfeQt/CUjaz/AGnrYp2nK0flV7efMwHVa7QSbZFJC4Z7m3/cKTIg2/Wowl3mv+R0ao2nf9Me4/q4jPjVRIqnf+vMqumOp0n+kHAv4fFuDUoyakuDWjR6z7Otu+lthsQ+v8FS/v8AOMuT7zxqMySFVxd07NaprT7BPRWdfVyYbnmHs1246VRw2ImlUWlOT+NfLfnxPTabLJeoHCEIYIQhAAAEAAEEagiAgEBsAbUZy+2e0MMLS3m9X7sVxk+5ckdJiq8YQlOTtGKbb7kfNu1+eSxeInU3uqm1TV9Iwvp5kac9s/N8ynWqSnKV3Jt6/YoNieniBd5FIlIdu3FZE9Kg3wQdSk6r2aE5GpTyuUuxliGRy5EbnFk1ZVkUpJkqga9PI3yZaWQtkbsiX6OTm3EkcbI2KmSSXYUsVgmuKCZyo3VYzW/JjlLmKpQaI4P0Jq7EkJNPR2a4M9r9l+2/7Qv2XES/fRX7uT4VIrjF/wCZfVHic1y/XkWMuxkqNSNWDtKElJNc07jlRyj6tTHGRszm0cXhqdePxRW8u2Mu1PzNcsQAQQDBACAAYhAQriBXBcFwNgHGe1XMnRwfVvecty/JNO/n/c8Cqy4s9a9teYq1Ggnq30j7kk4r/d9Dx+vIhflKGuepLRpOXAioUrs6jJcu4OxHPKYxZrw8qiy3I3LVnUYHI4R7C5gcOkuBq0KZky2Wt+GuRThl6S0RYhgVyL8KZNCkQXSRlywCfYPWBXI1oUSRUQPkYVTA9xm4vJ1K90ddOkVqtFClK4yvMcyymUOzTmYdahZnrGNwSa4HKZxlKSvb+xdhs/LPt0/eOLrcQJ9vqT47DuLKe8aYxZTj172G5o71sM32KpFX4a2lb1R66j509mOO6LMcPLsqb1KX80Xb6xR9FosxVUggESIgBAARJgYEJsQK42QRlR2T8AJ8/e1DGupjqut1G0V5RRxb4nS7cxtja67FPTw3Y/8ABz1KF2QTjUyfB7zOzwdG1tDHyGikjpKETJsy7W7VjyLmHRoUkUaJepFTVFykiZEFMliSNZih5DBj1IRjIr1ESSkRTFTirXiZmOoJqzNaoUcRAiVcLnmA08PscdXVmekZ9T6t+R57jY9ZmvTexz9+PK0tmKlsTQafCtT1/mR9SR4I+UMhlatT/wBSD9JJn1bRk2k3xsr+NtTRiyU8QhEyIaOGgECAxAbECuMrPT09LjiHFytF249gE+dNt6ieMrtSTXSPy7r93AwsMtTW2yoKGNrwTvab1/iSnf8A+jOwEbzS7yF+E8fl2GTQ6qN+lEzsDR3UjTVSMVq7GK+66GHpcoxLtFGXSzCn869S/SxEXwkn5i8V8saFNEsSlGr3k9OqHEllBRDGoPdQDPlEjlETqEcsTFcZJBYfTZxK1aJWxe0FCHGab7tSotoqLfG3iiPgjc4izSjeLR5pm9K0mer1HGcd6Lun2o8+2twu5O67S3T6vGX6idx6x8oTVWDSu9+OnPVH1Tg5Po4Nqz3VdcnbVHzJsnh+kxeHha960FbnaV/sj6eprQ2YufTmxIQiZCAKAAVkNYRrYgNyHFQTi1Lh36W8yQytp8zeHw86ul1ZK/C8nZNrtFbydOS28jwj2iQ3cxrcnuNPhdbkV+GZ+zNHfrcOGpo7bYiVacK0t1ytuuUUo7yvdXitLrUdsTRvOUuSRXllLj1bjhcc+V09ebhHqxvLgkZscqqVXvVKjTfYnqbNV2M3FZgoatmf/jXjPyjq5DTS6spebM6tgatPWFR/b6lfGbT2ulr3cX4vkivDafedm7eMLr6MnMc/wVz19+Wtgc9r05JVE2vX6nZYPHKSTOGpY5S4pcbb0dVfk+1PuZrZfjrOxXlF2F593Z0p3H1KliHL+sHMXuplfV3WFn2azh1aad+aOZlSxFV9epZeP4NXMMalr6Lmc5mGbSjrrrdJRXF8t58X3IswlvxFOyye8q6TL8nor325Pvf4NaOUYdr/AA149vqee0M2rOcYqnV3pK8U9HNNXTimtbrhzNfK9onfdk3de8pLdlB98eXeSywznuoYbdd9R1GFy7oH1JNwfGL7O9MwdvMP+6UuTOlwlfeRT2owu/h580r+hDG/ulGzH1ZHJezpxWPoOUlFRk5Nt2S3Yt6s+jsJiITjenOM1wvFpq/ij5q2VpR6VSlra9+49k9mteVR4iVrQW4ku+8tfQ1TP9/iyfof6rs78O4AEBczihXEC4BVGsI1iIjI2rwPT4StTtd7m9H+KHWX2Na4Lis7OJY5eNln2fNuY0nuKPZvPyt2G5sXRtGb70TbY5d0FWpTS92pK38MlvR+jRNshH93K/Mzd/bxu2SXPyn3aWLjdHH5xhZyfalzX4O63bkVbBJrgVzLlT8PTkqOVU5YWdOluqo7S1a3pNNOzb52MbB0sTU3sMordnKDlvU4xUXBOKk5tdXRu+utlxOzrZHGTvYkp5OlzZfNyr/G7TM9wdBqLpTTqRhGD3YuSqNWXXste134lD9m3d1q67nxXcb8KDiU6sLvUpzytvWiYTGcjpMin1V4EeeNtWGZPLQlzGNylfz05vG5etLqVn7ziru3LuKG02DhUpUuhluVKSaULODadneLeiaaXqdQo3IZ5dfvL9eVxinPXNny43ZzBTjVpVMXVtCirQUpKUrRbcYRSb3Y3bepezWhDE1t+nCz+ZXi3/U6WOSR+RF3C5Yo9g891qvD6eYqWUYSUUk+wvY6jvU5Ra4xf2LqhYirLR+DKJ8rsp6eeZPgrTn+uaPZfZ3gujwt7azm35RtFfk8ywGGtNd7PZNn6e7hqS/yJ+t3+TTq959Z/qJ4aZPzWgIQDU55CEIApjWFsaxEArgbAAea+0vBvpt5K+9CMv8A16r+yMPZip78O1WdvU9D22y51KKqRV5UrtrnB+96WT9TgcLBRrxaVt6Li/G119UZc5zJ0MMplqn9NaEi1HUz5MtUZlFjTh7iZIO6SQVxzQdWeKpXjoZtRGliXoZUZb0vMEbONjK4lrGIgwES1iYiXSelaii10K4lShPU04BKjxBCLRKkPlEawpzEJMrYiXVfgySpIhmrq364hir2M3DYazVtZP7vhbzPWsPT3YRj8sYx9El+DjNmcCp107dWmt5+Pwr118jtzX9Pj6t/LD9bn2zH8AAcA0MQIAQAFMDCNYiNYGwsYwBM4LaLZ+dKfSUYOdPeUrR1lDXVNcuNmd6xtyGWMyWYZ3D4eZYhWZJQmWM7o7tSS5NlGnIy5R0dOXY06MyaTKNGRNvldapVTNptQbKVFqNvA0sTTUk0+05vH5dNrdvddj7VyHEMp11mW4iJexlePYzicA6lJbsm5Lsl2+D5mjVpzqwtdpPjbi1y8AvDxrTlUV1bmaVKoYmVZfuJclwRrJEOrFtyGTkRxkKchjqOcy7lWWSxDaU1FKzk2r6X4JczNkdZsdT6k33peiv+SzVjMsuVk+p2XHHsbGW4CFGG7BcdW370nzZbAI3Sc9Ry7bb2iAQBkILiABKg1hGsAaxrHMZIQBsAWNAOQ2so2qX+ZJ+mjOfOy2rw29TU18L18H/c45ozbJ7bdGX7UkJEsJlcjnV3dWZq2TJobw1pMxqueU48ZIgltHH4bLxdyUwqUvXSdFG3Anw6VjmaW0bVlLdkvR+qJJbRct2K8n9Q8KtmDqIoczmae1MV71vJlyjn1Keilry4kbhYjbY17hZBRlcmYoVpqO12Yo7tBP5m5fW34OMpxu0l28D0TC0VCEYL4UkatE99YPqsvUiYQBXNTEIgXEAIQBXAlMDCNAAxjHMaIABochAEGJoKcZRfCSsed4yg6c5QlxTsektGBtXlqnDpV70Pe74/1RXsx7OrdWfjeOPUgVEmMkIxWOhjWfi8tg9d1X8ER0cHTv1oL0RpNDHRuTma3DLlNWT4d/CiSGUUIr3EMWBl2OxLDCSvq7j840/qzgfsEL2jFehoYPAwjwSuCjCxaiV5Z9VZZ9OgrD7jGBMUVZVubM4TfqqT4Q63n2L1+x2ZhbH26DetxnLzSskbhv1TmLl7svLOjcQBFishCEBFcAgAFQAkFgDGAcxrAA2K4GIQEpZ1H/8APWX/AI5fYuFTNv8AAq/6c/8AaxX4OfLzKFS+j4/cfFkNSA2Fa2j9f6mL5b56XYxLFKmU4yLNKtYjYvwsq1CmWI0kVo1kTRrCXziXoAOIOmGTqi4hleDOZDUmNvcdNaBaq+Xc7H/9LH+Kf3Nq5hbGVE8Pb5ZyT87P8m4dDX/CObs/nRTCNCTVjcQBXAxGiuICUwXBcIEDYxj2NYGAypWjH3nbxHxjcy9rMO/2eUlxg1J+HB/cQi8sXD54+pmbQ5lTVGcVJNyi4pLvOEeKfYxsptvV3KNm3k4vw1dvRsQ1KZOFozNSnG6JFWHygJQJdE6Ma5NCuMhTLNOmLqyWjCox8U29RyiSQRG0z4RFMkiNmRNd2ezd4eUrq8ZWuuFmuDOnpbQwlwX1OEaCm1qmXa93j6vwz7NHlex6bhMQqkd5c7ExQ2Ti3hqcpLWacvJt2fmrPzNKpT5G2e51isMYLguJjRG4rjRAFQFxrnYa5XAHhirihEloxHwH06Y6pRUk01dNNNdzJUgsfA8Zx+AdCvUpP4ZO3fF6xfp9gJHae0LKW4RxUFrT6tS3bTb0l5P6NnFwdznbMfHLjfry8senWEmOsCxBMJIUUMk7D4yGaWCLMEVYsnjIEk6Q9MgUySLEkluNkxCZEG2JMLhXWqQox41JKPhHjJ+SuNm7fhLVtvgku1nd7JbP9AnVqr99NWtx6OPHd8eZZq1+eX9Ktuzwx/tvU6SjFRirKKUUuSSshNEjGyOi5yq4kMnYsNcSGSEZtxXGyQ7dYEoSQYDJD4IZJkyWj2ESJ6KJQLMFoCUQ0R9QAryimmmk01Zp6pp6NNHmO0mz8sJUvFN0JvqP5H/25fhnqDKWb0YzozjJXVno+7VFW3XMos1Z3GvK0gJDYsec9vNqUxkUWERzQzgxRKkMRJAEj4IlUQQJCJwLBpxcpKMIuUm7KK1bYyo9Gd9sLgaccPGsoLpJ3Up8ZNX4Jvgu5FmvDzvFe3Z4TpmzGzHRNVq9nV+CK1jT779s+/s7Dp2FDWb8cJjORz8srle0GNkOkNqEkVeUtdORG0T0lqNkuIcCC2od4MRog//Z'} />
            <DoctorDetailsRender activeColor={colors.ltnGreen} SetState={SetSelectedDoctor} activeSate={selectedDoctor} doctorName={'Dr. Steve rozar'} doctorType={'Family doctor'} icon={'data:image/jpeg;base64,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'} />
            <DoctorDetailsRender activeColor={colors.ltnGreen} SetState={SetSelectedDoctor} activeSate={selectedDoctor} doctorName={'Dr. Edwark whatson'} doctorType={'Family doctor'} icon={'data:image/jpeg;base64,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'} />


          </ScrollView>
        </View>
      </View>

      <View style={{ flex:.2,alignItems:'center',justifyContent:'center' }}>
        <ButtomButton showButton={showNextButton} action={()=>{
          navigation.navigate('FamilyDoctorList')
        }} text={'Next'} />
      </View>
    </View>
  );
};

export default FamilyDoctorList;
