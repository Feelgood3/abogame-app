import { Text, View, Image, ScrollView , TouchableOpacity} from 'react-native';
import BlurHome from '../utilities/BlurHome';
import * as Linking from 'expo-linking';
import { styles } from './stylesContact';
  
  export default function CriminalLaw() {

    return (
    <>
    <BlurHome />
    <ScrollView style={styles.appContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.profileImage}
              source={{uri: "https://scontent.fbog4-1.fna.fbcdn.net/v/t1.6435-9/53423661_10217818670275747_4527603624062222336_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=TU401exsJgkAX9nnWUh&tn=ehqRRFBn06oHmZAK&_nc_ht=scontent.fbog4-1.fna&oh=00_AT9YAke2xe2kGDt1jiwnMfjsqSOd4qJvMxnXqh1S7as9bw&oe=63585FD8"}} />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              Sergio Moncada Ojara
            </Text>
            <Text style={styles.subtitle}>
              Lawyer Criminal Law, Founder of Aboga.me
            </Text>
            <Text style={styles.body}>
              Graduated from the Universidad Nacional de Colombia and specialized in Criminal Law. As the founder of Aboga.me, he has the goal to provide proper legal counsel to people without economic means.
            </Text>
            <View style={styles.contacting}>
            <Text style={styles.contactBody}>
              Contact him at  </Text> 
              <TouchableOpacity onPress={() => Linking.openURL('mailto:sergiomoncadao@gmail.com?subject=Aboga.me Work Law counseling&body=Hello, my name is __________ and I would like to make a consultation')}><Text style={styles.email}>sergiomoncadao@gmail.com</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
    );
  }
  