import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    appContainer: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
      paddingLeft: 60,
      paddingRight: 60,
      justifyContent: 'center',
    },
    contentContainer: {
      paddingHorizontal: 30,
    },
    contacting: {
      flex: 1,
      paddingLeft: 60,
      paddingRight: 60,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 35,
      textAlign: 'center',
      color: '#353147',
    },
    kbTitle: {
      fontSize: 32,
      fontWeight: '750',
      lineHeight: 35,
      textAlign: 'center',
      color: '#353147',
      paddingBottom: 10
    },
    body: {
      padding: 20,
      fontSize: 30,
      lineHeight: 35,
      marginBottom: 20,
      fontWeight: '400',
      textAlign: 'center',
      color: '#353147',
    },
    kbBody: {
      padding: 20,
      fontSize: 27,
      marginBottom: 20,
      fontWeight: '400',
      textAlign: 'center',
      color: '#353147',
      paddingBottom: 40
    },
    buttonsText: {
      fontWeight: '500',
      color: '#353147',
    },
    button1: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff70',
      padding: 16,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 16,
      marginHorizontal: 10,
    },
    button2: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
  
      backgroundColor: '#DFE3E630',
      marginTop: 40,
    },
    input: {
      backgroundColor: '#F7F7F7',
      padding: 20,
      borderRadius: 16,
      marginBottom: 10,
    },
    signInButton: {
      backgroundColor: 'seagreen',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginVertical: 30,
      shadowColor: '#FD6D6A',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
    },
    registerButton: {
      backgroundColor: 'darkcyan',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginVertical: -10,
      shadowColor: '#FD6D6A',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
    },
    kbButton: {
      backgroundColor: 'darkcyan',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginVertical: 10,
      shadowColor: '#FD6D6A',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
    },
    contactBody: {
      fontSize: 20,
      lineHeight: 35,
      marginBottom: 20,
      fontWeight: '400',
      textAlign: 'center',
      color: '#353147',
    },
    email: {
      color: 'blue',
      fontSize: 20,
      lineHeight: 35,
      marginBottom: 20,
      fontWeight: '400',
      textAlign: 'center',
    },
    map: {
      width: '90%',
      height: '90%',
    },
  });