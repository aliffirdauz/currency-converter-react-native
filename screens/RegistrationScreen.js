import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { Card } from 'react-native-paper';

export default function RegistrationScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  const handleSignUp = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email === '' || password === '' ? alert('Please fill all the fields') :
      email.match(reg) ?
          auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
              const user = userCredentials.user;
              console.log('Registered with:', user.email);
              alert('Registered!', `Registered with: ${user.email}`);
              navigation.navigate('Login');
            })
            .catch(error => alert(error.message))
        : alert('Please enter a valid email address')
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Konversi Mata Uang</Text>
        <Text style={styles.title}>Daftar</Text>
        <Text style={styles.label}>Alamat Email</Text>
        <TextInput
          placeholder="Masukkan alamat email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Masukkan password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, { backgroundColor: '#0782F9', margin: 10 }]}
        >
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={[styles.buttonText, { color: 'blue' }]}>Kembali Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
    borderWidth: 1

  },
  buttonContainer: {
    width: '59%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#ffffff',
    width: '50%',
    padding: 15,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  label: {
    color: 'black',
    fontWeight: '700',
    fontSize: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 48,
    marginBottom: 20,
    textAlign: 'center',

  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: '#000000',
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
  }
})