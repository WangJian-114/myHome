import {StyleSheet} from 'react-native';

const newRealStateStyles = StyleSheet.create({
  realStateContainer: {
    height: '100%',
    marginHorizontal: 24,
    marginVertical: 24,
  },
  image: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  actionContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 10,
    flexDirection: 'row',
  },
  deleteAction: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    with: 200,
    borderRadius: 100,
    padding: 10,
  },
  editAction: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
    marginRight: 15,
  },
  titleText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginRight: 10,
    width: 80,
  },
  textInput: {
    fontSize: 16,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#F4f4f4',
    width: 200,
  },
  typeIconContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  typeIconDescription: {
    fontSize: 13,
  },
  typeIconRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceCheckBoxGroup: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  priceInput: {
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#F4f4f4',
    width: 100,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  featureInput: {
    backgroundColor: '#F4f4f4',
    width: 50,
  },
  featureIcon: {
    fontSize: 25,
    color: 'black',
    marginRight: 15,
  },
  textArea: {
    height: 150, // Altura del área de texto
    borderWidth: 1,
    backgroundColor: '#F4f4f4',
    padding: 10,
  },
  addButton: {
    backgroundColor: '#71c3ca',
    paddingVertical: 15,
    borderRadius: 10,
    paddingHorizontal: 60,
    marginVertical: 15,
  },
  addButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default newRealStateStyles;
