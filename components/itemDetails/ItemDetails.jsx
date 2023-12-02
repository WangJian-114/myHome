/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import itemDetailsStyles from './style/itemDetailsStyles';
import globalStyle from '../globalStyle/globalStyle';

const ItemDetails = ({navigation, type}) => {
  return (
    <SafeAreaView style={globalStyle.androidSafeArea}>
      <ScrollView>
        <View style={itemDetailsStyles.detailsContainer}>
          <View style={itemDetailsStyles.card}>
            <Image
              style={itemDetailsStyles.cardImage}
              source={require('../../assets/img/photo/d1.jpg')}
            />
          </View>
          <View style={itemDetailsStyles.cardContent}>
            <View>
              <View style={itemDetailsStyles.priceDescriptionContainer}>
                <Text style={itemDetailsStyles.price}>USD 1.000</Text>
                <Text style={itemDetailsStyles.managementPrice}>
                  + $37.000 EXPENSAS
                </Text>
              </View>
              <Text style={itemDetailsStyles.itemDirection}>
                <EvilIcons name="location" style={{fontSize: 20}} /> Honduras 3900 -
                Palermo Viejo
              </Text>
            </View>

            <View style={itemDetailsStyles.iconContainer}>
              <View style={itemDetailsStyles.iconGroup}>
                <MaterialIcons name="bed" style={itemDetailsStyles.icon} />
                <Text style={itemDetailsStyles.iconDescription}>2 hab</Text>
              </View>
              <View style={itemDetailsStyles.iconGroup}>
                <FontAwesome5 name="toilet" style={itemDetailsStyles.icon} />
                <Text style={itemDetailsStyles.iconDescription}>2 baños</Text>
              </View>
              <View style={itemDetailsStyles.iconGroup}>
                <FontAwesome5 name="ruler" style={itemDetailsStyles.icon} />
                <Text style={itemDetailsStyles.iconDescription}>90 m2</Text>
              </View>
            </View>

            <View style={itemDetailsStyles.iconContainer}>
              <View style={itemDetailsStyles.iconGroup}>
                <MaterialIcons name="bed" style={itemDetailsStyles.icon} />
                <Text style={itemDetailsStyles.iconDescription}>2 hab</Text>
              </View>
              <View style={itemDetailsStyles.iconGroup}>
                <FontAwesome5 name="toilet" style={itemDetailsStyles.icon} />
                <Text style={itemDetailsStyles.iconDescription}>2 baños</Text>
              </View>
              <View style={itemDetailsStyles.iconGroup}>
                <FontAwesome5 name="ruler" style={itemDetailsStyles.icon} />
                <Text style={itemDetailsStyles.iconDescription}>90 m2</Text>
              </View>
            </View>

            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View style={itemDetailsStyles.actionContainer}>
                <View style={itemDetailsStyles.actionButton}>
                  <Ionicons
                    name="star-outline"
                    style={{
                      fontSize: 35,
                      color: 'white',
                    }}
                  />
                </View>
                <View style={itemDetailsStyles.actionButton}>
                  <AntDesign
                    name="delete"
                    style={{fontSize: 35, color: 'white'}}
                  />
                </View>
                <View style={itemDetailsStyles.actionButton}>
                  <FontAwesome6
                    name="pencil"
                    style={{fontSize: 35, color: 'white'}}
                  />
                </View>
                <View style={itemDetailsStyles.actionButton}>
                  <FontAwesome6
                    name="pencil"
                    style={{fontSize: 35, color: 'white'}}
                  />
                </View>
              </View>
            </View>
            <View style={itemDetailsStyles.descriptionContainer}>
              <Text style={itemDetailsStyles.description}>
                Departamento en impecable estado. Cuenta con 3 ambientes, dos
                baños (uno en suite) y balcon luminoso. Ademas cuenta con
                cochera fija. Ubicado en un hermoso barrio, con facil acceso a
                transporte publico.
              </Text>
            </View>
            <View style={itemDetailsStyles.amenitiesContainer}>
              <Text style={itemDetailsStyles.amenities}>Amenities</Text>
              <Text>sum</Text>
              <Text>Qincho</Text>
            </View>

            <View style={itemDetailsStyles.featureContainer}>
              <Text style={itemDetailsStyles.feature}>
                Otras caracteristicas
              </Text>
              <Text>82m2 cubiertos</Text>
              <Text>8m2 descubiertos</Text>
              <Text>Contrafrente</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetails;
