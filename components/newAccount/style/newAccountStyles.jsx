import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#159690',
    height: '100%',
  },
  newAccountContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 41,
  },
  message: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'regular',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  topSection: {
    marginTop: 100,
  },
  continueButton: {
    backgroundColor: '#71c3ca',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 50,
  },
  continueButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  textInput: {
    fontSize: 16,
    marginTop: 20,
    padding: 15,
    borderRadius: 95,
    backgroundColor: '#FFF',
    width: 'auto',
  },
});

export default loginStyles;
