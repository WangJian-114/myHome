/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import cardStyles from './style/cardStyles';

const Card = ({navigation}) => {
  return (
    <View style={cardStyles.cardContainer}>
      <View style={cardStyles.card}>
        <Image
          style={cardStyles.cardImage}
          source={require('../../assets/img/photo/d1.jpg')}
        />
        <View style={cardStyles.actionContainer}>
          <View style={cardStyles.deleteAction}>
            <AntDesign name="delete" style={{fontSize: 20, color: 'red'}} />
          </View>
          <View style={cardStyles.editAction}>
            <FontAwesome6
              name="pencil"
              style={{fontSize: 20, color: 'black'}}
            />
          </View>
        </View>
      </View>
      <View style={cardStyles.cardContent}>
        <View>
          <Text style={cardStyles.price}>USD 1.000</Text>
          <Text style={cardStyles.itemState}>Departamento en Alquiler</Text>
          <Text style={cardStyles.itemDirection}>
            <EvilIcons name="location" style={{fontSize: 20}} /> Honduras 3900 -
            Palermo Viejo
          </Text>
        </View>

        <View style={cardStyles.iconContainer}>
          <View style={cardStyles.iconGroup}>
            <MaterialIcons name="bed" style={cardStyles.icon} />
            <Text style={cardStyles.iconDescription}>2 hab</Text>
          </View>
          <View style={cardStyles.iconGroup}>
            <FontAwesome5 name="toilet" style={cardStyles.icon} />
            <Text style={cardStyles.iconDescription}>2 baños</Text>
          </View>
          <View style={cardStyles.iconGroup}>
            <FontAwesome5 name="ruler" style={cardStyles.icon} />
            <Text style={cardStyles.iconDescription}>90 m2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
