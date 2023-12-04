import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create({
  cardContainer: {
    marginTop: 25,
    overflow: 'hidden',
    borderRadius: 15,
  },
  cardImage: {
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
    marginRight: 15,
  },
  editAction: {
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
  },
  cardContent: {
    backgroundColor: '#71C3CA',
    padding: 20,
  },
  price: {
    fontSize: 20,
  },
  itemState: {
    fontSize: 16,
    marginTop: 15,
  },
  itemDirection: {
    fontSize: 16,
    marginTop: 15,
  },
  iconContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    fontSize: 24,
  },
});

export default cardStyles;
