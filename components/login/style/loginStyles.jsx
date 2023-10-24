import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#159690',
    height: '100%',
  },
  loginContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 41,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 41,
  },
  logo: {
    width: '100%',
    height: 205,
    marginBottom: 50,
  },
  message: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: 'white',
  },
  googleButton: {
    marginTop: 30,
    backgroundColor: '#71c3ca',
    paddingVertical: 15,
    borderRadius: 10,
  },
  googleButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  topSection: {
    marginTop: 50,
  },
  realStateButton: {
    backgroundColor: '#71c3ca',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 60,
    marginBottom: 50,
  },
  realStateButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  loginTextInput: {
    fontSize: 16,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: 'auto',
  },
  NoAcount: {
    marginBottom: 10,
    color: 'white',
  },
  forgetPass: {
    textAlign: 'right',
    marginTop: 10,
    color: 'white',
  },
});

export default loginStyles;
