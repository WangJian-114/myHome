import {StyleSheet} from 'react-native';

const userStyles = StyleSheet.create({
  userContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#159690',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    justifyContent: 'flex-start',
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
    textAlign: 'left',
  },
  textInput: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  deleteButton: {
    marginTop: 30,
    backgroundColor: '#FF4646',
    paddingVertical: 15,
    borderRadius: 10,
  },
  deleteButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  quanlificationButton: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
  },
  quanlificationButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  continueButton: {
    marginTop: 20,
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
});

export default userStyles;
