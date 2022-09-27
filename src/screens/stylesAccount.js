import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 140,
      justifyContent: 'center',
    },
    contacting: {
      flex: 1,
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 0,
      justifyContent: 'center',
    },
    imageContainer: {
      alignItems: 'center',
      paddingBottom: 20,
      paddingTop: 50
    },
    controlsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#f3f6f4',
      height: 60
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
        marginTop: 30,
        marginBottom: -100,
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
      },
    textControls: {
      paddingTop: 30
    },
    pageTitle: {
      paddingTop: 30,
      color: '#b2b2b2',
    },
    labelText: {
      color: '#b2b2b2',
      paddingTop: 10
    },
    formQuestions: {
      height: 30,
      margin: 4,
      borderBottomWidth: 1,
    },
    profileImage: {
      // resizeMode: 'cover',
      width: 200,
      height:200,
      paddingBottom: 80,
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100,
      borderBottomLeftRadius: 100,
      borderTopLeftRadius: 100,
    },
    title: {
        fontSize: 33,
        fontWeight: '750',
        lineHeight: 35,
        textAlign: 'center',
        color: '#353147',
        paddingBottom: 0
      },
      subtitle: {
        fontSize: 26,
        fontWeight: '750',
        lineHeight: 35,
        textAlign: 'center',
        color: '#353147',
        paddingBottom: 0
      },
    body: {
        padding: 20,
        fontSize: 20,
        lineHeight: 35,
        marginBottom: 20,
        fontWeight: '400',
        textAlign: 'center',
        color: '#353147',
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
  });