import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1d1d1',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: '350',
    height: '500',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: '100',
    height: '100',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 70,
    marginVertical: 30
  },
  formText: {
    fontSize: '17',
    fontWeight: '400',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 70,
  },
  input: {
    width: '250',
    height: '40',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  input: {
    width: '250',
    height: '40',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: '#00CFEB90',
    alignItems: 'center',
    justifyContent: 'center'
  },
});