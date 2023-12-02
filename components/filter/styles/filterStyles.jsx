import {StyleSheet} from 'react-native';

const filterStyles = StyleSheet.create({
  Container: {
    height: '100%',
    marginHorizontal: 24,
    marginVertical: 24,
  },
  homeSubtitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  filterContainer: {
    backgroundColor: '#71c3ca',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  buyButton: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    flex: 2,
  },
  rentButton: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
  },
  filterIcon: {
    flex: 1,
  },
});

export default filterStyles;