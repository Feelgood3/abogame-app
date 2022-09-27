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
              source={{uri: "https://media-exp1.licdn.com/dms/image/C4E03AQGJ4nOIuIcgXA/profile-displayphoto-shrink_800_800/0/1648782073928?e=1669852800&v=beta&t=YBd06iO5vbgfaLGOXdeUajeG2S2hyCQWp5llUIah2vQ"}} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              Juana Maria Denis
            </Text>
            <Text style={styles.subtitle}>
              Lawyer specialized in Work Law, Commercial Law, and Administrative Law
            </Text>
            <Text style={styles.body}>
              Graduated from the Universidad Nacional de Colombia, Juana has worked during all her university years in Investigation Groups, which led her to Asocapitales, where she gained experience in Strategic Litigation, Commercial and Administrative Law. Her practices in Work Law within the Circuit Law Courts also make her the best candidate for any consult you have.
            </Text>
            <View style={styles.contacting}>
            <Text style={styles.contactBody}>
              Contact her at  </Text> 
              <TouchableOpacity onPress={() => Linking.openURL('mailto:jmdenisc@unal.edu.co?subject=Aboga.me Work Law counseling&body=Hello, my name is __________ and I would like to make a consultation')}><Text style={styles.email}>jmdenisc@unal.edu.co</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
    );
  }
  