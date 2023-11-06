/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import Checkbox from 'react-native-check-box';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import newRealStateStyles from './style/newRealStateStyles';

const NewRealState = ({navigation}) => {
  const [tempUri, setTempUri] = useState('');
  const [isSelected, setSelection] = useState(false);

  const takePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      response => {
        console.log(response);
        if (response.didCancel) return;
        if (!response.assets[0].uri) return;
        setTempUri(response.uri);
      },
    );
  };

  const takePhotoFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.5,
      },
      response => {
        console.log('HOLA', response);
        if (response.didCancel) return;
        if (!response.assets[0].uri) return;
        setTempUri(response.assets[0].uri);
      },
    );
  };

  return (
    <ScrollView>
      <View style={newRealStateStyles.realStateContainer}>
        <View style={{position: 'relative'}}>
          <Image
            style={newRealStateStyles.image}
            source={
              tempUri === ''
                ? require('../../assets/img/upload-image.webp')
                : {uri: tempUri}
            }
          />
          <View style={newRealStateStyles.actionContainer}>
            <Pressable
              style={newRealStateStyles.editAction}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="camera"
                style={{fontSize: 20, color: 'black'}}
              />
            </Pressable>
            <Pressable
              style={newRealStateStyles.deleteAction}
              onPress={() => takePhotoFromGallery()}>
              <AntDesign name="picture" style={{fontSize: 20, color: 'red'}} />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>Ubicacion: </Text>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Calle</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Altura</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Piso</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Depto</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Pais</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Provincia</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Localidad</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
          <View style={newRealStateStyles.inputGroup}>
            <Text style={newRealStateStyles.text}>Barrio</Text>
            <TextInput style={newRealStateStyles.textInput} />
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>Tipo de propiedad: </Text>
          <View style={newRealStateStyles.typeIconRow}>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="building"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>Depto</Text>
            </Pressable>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="house"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>Casa</Text>
            </Pressable>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="house"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>PH</Text>
            </Pressable>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="shop"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>
                Terreno
              </Text>
            </Pressable>
          </View>
          <View style={newRealStateStyles.typeIconRow}>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="house"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>Local</Text>
            </Pressable>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="house"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>
                Oficina
              </Text>
            </Pressable>
            <Pressable
              style={newRealStateStyles.typeIconContainer}
              onPress={() => takePhoto()}>
              <FontAwesome6
                name="house"
                style={{fontSize: 20, color: 'black', marginBottom: 5}}
              />
              <Text style={newRealStateStyles.typeIconDescription}>Galpon</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>Estado: </Text>
          <View style={newRealStateStyles.checkboxContainer}>
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'En alquiler'}
            />
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'En venta'}
            />
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>Precio: </Text>
          <View style={newRealStateStyles.priceCheckBoxGroup}>
            <Checkbox
              style={{width: 100, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'USD'}
            />
            <TextInput style={newRealStateStyles.priceInput} />
          </View>
          <View style={newRealStateStyles.priceCheckBoxGroup}>
            <Checkbox
              style={{width: 100, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'ARS'}
            />
            <TextInput style={newRealStateStyles.priceInput} />
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>
            Caracteristica Principales:
          </Text>
          <View style={newRealStateStyles.featureRow}>
            <View style={newRealStateStyles.featureContainer}>
              <FontAwesome6
                name="ruler-combined"
                style={newRealStateStyles.featureIcon}
              />
              <TextInput style={newRealStateStyles.featureInput} />
            </View>
            <View style={newRealStateStyles.featureContainer}>
              <Ionicons name="bed" style={newRealStateStyles.featureIcon} />
              <TextInput style={newRealStateStyles.featureInput} />
            </View>
            <View style={newRealStateStyles.featureContainer}>
              <FontAwesome6 name="car" style={newRealStateStyles.featureIcon} />
              <TextInput style={newRealStateStyles.featureInput} />
            </View>
          </View>
          <View style={newRealStateStyles.featureRow}>
            <View style={newRealStateStyles.featureContainer}>
              <FontAwesome6
                name="calendar"
                style={newRealStateStyles.featureIcon}
              />
              <TextInput style={newRealStateStyles.featureInput} />
            </View>
            <View style={newRealStateStyles.featureContainer}>
              <FontAwesome6
                name="shower"
                style={newRealStateStyles.featureIcon}
              />
              <TextInput style={newRealStateStyles.featureInput} />
            </View>
            <View style={newRealStateStyles.featureContainer}>
              <FontAwesome6 name="sun" style={newRealStateStyles.featureIcon} />
              <TextInput style={newRealStateStyles.featureInput} />
            </View>
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>Descripcion: </Text>
          <TextInput
            style={newRealStateStyles.textArea}
            placeholder="Ingresa tu texto aquí"
            multiline={true} // Habilita múltiples líneas
            numberOfLines={4} // Número de líneas visibles (ajusta según tus necesidades)
            // value={text}
            // onChangeText={(newText) => setText(newText)}
          />
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>Amenities: </Text>
          <View style={newRealStateStyles.checkboxContainer}>
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Pileta'}
            />
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Jacuzzi'}
            />
          </View>
          <View style={newRealStateStyles.checkboxContainer}>
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Sauna'}
            />
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'SUM'}
            />
          </View>
          <View style={newRealStateStyles.checkboxContainer}>
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Quincho'}
            />
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Sala de juegos'}
            />
          </View>
        </View>
        <View>
          <Text style={newRealStateStyles.titleText}>
            Otras caracteristicas:
          </Text>
          <View style={newRealStateStyles.checkboxContainer}>
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Frente'}
            />
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Contrafrente'}
            />
          </View>
          <View style={newRealStateStyles.checkboxContainer}>
            <Checkbox
              style={{flex: 1, padding: 10}}
              onClick={() => {
                setSelection(!isSelected);
              }}
              isChecked={isSelected}
              rightText={'Baulera'}
            />
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => console.log('Ingreso Inmobiliarias --')}
            style={newRealStateStyles.addButton}>
            <Text style={newRealStateStyles.addButtonText}>
              Agregar Propiedad
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewRealState;
