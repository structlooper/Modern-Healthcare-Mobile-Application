import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from "../../../../componenets/organisms/style";
import HealthRecordsHeader from "../../../../componenets/molecules/Headers/HealthRecordsHeader";
import UploadImageModal from "../../../../componenets/molecules/Modals/UploadImageModal";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { colors } from "../../../../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { commonIconSize } from "../../../../componenets/organisms/settings";
import { ThemeTextInput } from "../../../../componenets/atoms/Inputs";
import ColoredButton from "../../../../componenets/atoms/ColoredButton";
import HelpButton from "../../../../componenets/atoms/HelpButton";

const AddNewMedication = ({ navigation }) => {
  const [uploadedPictures,SetUploadedPictures] = useState([]);
  const [uploadedPicturesCount,SetUploadedPicturesCount] = useState(0);
  const [imagePickerModal,SetImagePickerModal] = useState(false);

  const [title,SetTitle] = useState('')
  const [dose,SetDose] = useState('')
  const [desc,SetDesc] = useState('')

  return (
    <View style={style.mainContainer}>
      <UploadImageModal
        modalState={imagePickerModal}
        SetModalState={SetImagePickerModal}
        uploadedPictures={uploadedPictures}
        SetUploadedPictures={SetUploadedPictures}
        SetUploadedPicturesCount={SetUploadedPicturesCount}
      />
      <HealthRecordsHeader action={()=>navigation.goBack()} header={'Add Medication'} backButton={true} iconType={'red'} />
      <View style={{ flex:.85,marginTop:heightPercentageToDP(1) }}>
        <View style={{ alignItems:'center',marginVertical:heightPercentageToDP(2) }}>
          <TouchableOpacity style={{
            width:70,height:70,
            borderRadius:100,
            borderColor:colors.dark,
            elevation:20,
            backgroundColor:colors.light,
            alignItems:'center',
            justifyContent:'center'
          }} onPress={()=>SetImagePickerModal(true)}>
            <FontAwesome5
              name={'camera'}
              size={commonIconSize}
              color={colors.dark}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop:heightPercentageToDP(2),
          paddingHorizontal:widthPercentageToDP(5)
        }}>
          <View style={{ marginTop:heightPercentageToDP(1) }}>
            {
              ThemeTextInput(
                title,SetTitle,'Name of medication',
              )
            }
          </View>
          <View style={{ marginTop:heightPercentageToDP(1) }}>
            {
              ThemeTextInput(
                dose,SetDose,'Dosage',
              )
            }
          </View>
          <View style={{ marginTop:heightPercentageToDP(1) }}>
            {
              ThemeTextInput(
                desc,SetDesc,'Instruction',
              )
            }
          </View>

          <View style={{ marginVertical:heightPercentageToDP(5),alignItems:'center' }}>
            <HelpButton />
          </View>

        </View>

      </View>
      <View style={{ flex:.15,alignItems:'center' }}>
        <ColoredButton action={()=>navigation.goBack()}
                      text={'Save'} showButton={(title !== '' && dose !== '' && desc !== '')} gradientColors={style.GradientColors} width={78} />

      </View>
    </View>
  );
};

export default AddNewMedication;
