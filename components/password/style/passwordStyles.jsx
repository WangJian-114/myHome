import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#159690',
    height: '100%',
  },
  passwordContainer: {
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
    textAlign: 'center',
  },
  messageText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  topSection: {
    marginTop: 50,
  },
  continueButton: {
    backgroundColor: '#71c3ca',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 60,
    marginBottom: 50,
  },
  continueButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  passwordTextInput: {
    fontSize: 16,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    width: 'auto',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeTextInput: {
    fontSize: 22,
    marginTop: 25,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderColor: 'gray',
    width: '22%',
    textAlign: 'center',
  },
});

export default loginStyles;
