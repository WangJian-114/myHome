import {StyleSheet} from 'react-native';

const cardStyles = StyleSheet.create({
  detailsContainer: {
    marginTop: 24,
    marginHorizontal: 25,
  },
  cardImage: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  cardContent: {
    paddingVertical: 20,
  },
  priceDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  managementPrice: {
    marginLeft: 30,
  },
  itemState: {
    fontSize: 16,
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
  actionContainer: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#159690',
    width: 'auto',
    borderRadius: 100,
    padding: 15,
    marginRight: 15,
  },
  descriptionContainer: {
    marginTop: 25,
  },
  description: {
    fontSize: 16,
  },
  amenitiesContainer: {
    marginTop: 25,
  },
  amenities: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  featureContainer: {
    marginTop: 25,
  },
  feature: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default cardStyles;
