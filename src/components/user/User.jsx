import React from 'react';
import {Text, View, Pressable, TextInput, ScrollView} from 'react-native';

import userStyles from './style/userStyles';

const User = ({navigation}) => {
  const loginRealState = () => {
    console.log('CONSOLE ejecute');
    navigation.navigate('login-real-state');
  };

  return (
    <ScrollView style={userStyles.userContainer}>
      <Text style={userStyles.title}>Datos de la cuenta</Text>
      <View style={userStyles.inputContainer}>
        <Text style={userStyles.text}>Nombre inmobiliaria</Text>
        <TextInput
          placeholder="Nombre Inmobiliaria"
          style={userStyles.textInput}
        />
      </View>
      <View style={userStyles.inputContainer}>
        <Text style={userStyles.text}>Email</Text>
        <TextInput
          placeholder="Nombre Inmobiliaria"
          style={userStyles.textInput}
        />
      </View>
      <View style={userStyles.inputContainer}>
        <Text style={userStyles.text}>Contraseña</Text>
        <TextInput
          placeholder="Nombre Inmobiliaria"
          style={userStyles.textInput}
        />
      </View>
      <View style={userStyles.inputContainer}>
        <Text style={userStyles.text}>Email de contacto</Text>
        <TextInput
          placeholder="Nombre Inmobiliaria"
          style={userStyles.textInput}
        />
      </View>
      <View style={userStyles.inputContainer}>
        <Text style={userStyles.text}>Telefono</Text>
        <TextInput
          placeholder="Nombre Inmobiliaria"
          style={userStyles.textInput}
        />
      </View>

      <View>
        <Pressable
          onPress={() => loginRealState()}
          style={userStyles.deleteButton}>
          <Text style={userStyles.deleteButtonText}>Eliminar cuenta</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => loginRealState()}
          style={userStyles.quanlificationButton}>
          <Text style={userStyles.quanlificationButtonText}>
            Ver mis calificacion
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => loginRealState()}
          style={userStyles.continueButton}>
          <Text style={userStyles.continueButtonText}>Guardar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default User;
