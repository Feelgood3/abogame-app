import { Text, View, Image, ScrollView , TouchableOpacity} from 'react-native';
import BlurHome from '../utilities/BlurHome';
import * as Linking from 'expo-linking';
import { styles } from './stylesContact';
  
  export default function WorkLaw() {

    return (
    <>
    <BlurHome />
    <ScrollView style={styles.appContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.profileImage}
              source={{uri: "https://media-exp1.licdn.com/dms/image/C4E03AQFH_NSP7gzsSA/profile-displayphoto-shrink_400_400/0/1620877294274?e=1669852800&v=beta&t=AR68Ioic1S3EXO-uyajL90mBlea7JXFXev0P6ATta_g"}} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              Juan Carlos Naranjo
            </Text>
            <Text style={styles.subtitle}>
              Lawyer specialized in Civil Law, Corporate Law, and Fintech
            </Text>
            <Text style={styles.body}>
              Graduated from the Universidad Nacional de Colombia, Juan found his way in Corporate Law being an investigator in the Financial Law observatory in the Universidad Nacional de Colombia.
            </Text>
            <View style={styles.contacting}>
            <Text style={styles.contactBody}>
              Contact him at  </Text> 
              <TouchableOpacity onPress={() => Linking.openURL('mailto:juancarlosnaranjo01@gmail.com?subject=Aboga.me Civil Law counseling&body=Hello, my name is __________ and I would like to make a consultation')}><Text style={styles.email}>juancarlosnaranjo01@gmail.com</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
    );
  }
  