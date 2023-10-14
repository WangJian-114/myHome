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
    height: '75%',
    display: 'flex',
    justifyContent: 'space-between',
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
    marginTop: 200,
  },
  realStateButton: {
    backgroundColor: '#71c3ca',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 60,
  },
  realStateButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default loginStyles;
