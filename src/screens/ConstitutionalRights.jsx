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
              source={{uri: "https://scontent.fbog4-2.fna.fbcdn.net/v/t1.6435-9/54521413_10216164170515749_8016101921595064320_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=bSBjTx1H0DAAX-FZ4S-&_nc_ht=scontent.fbog4-2.fna&oh=00_AT8dE0-I0Js9HcJdCTk7uDn45KnToDmNmgNmBcP-vbC0AA&oe=635A5C75"}} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              Daniel Mateus
            </Text>
            <Text style={styles.subtitle}>
              Lawyer specialized in Administrative Law and Constitutional Law
            </Text>
            <Text style={styles.body}>
              Graduated from the Universidad Externado de Colombia, Daniel always thought of being a Lawyer as a way to help, and his background as a public servant will help you beat the system.
            </Text>
            <View style={styles.contacting}>
            <Text style={styles.contactBody}>
              Contact him at  </Text> 
              <TouchableOpacity onPress={() => Linking.openURL('mailto:dmatiu07@gmail.com.com?subject=Aboga.me Constitutional Rights Law counseling&body=Hello, my name is __________ and I would like to make a consultation')}><Text style={styles.email}>dmatiu07@gmail.com</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
    );
  }
  