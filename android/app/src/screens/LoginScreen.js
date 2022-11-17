import React, { useState, useEffect, Component } from 'react'
import { TouchableOpacity, StyleSheet, View, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import ResetPasswordScreen from '../screens/ForgotPassword'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import axios from 'axios';


import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'



export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [name, setName] = useState({ value: ''})

  
  const  onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      console.log('email or password error');

    }

    else{
      console.log('login success');
      console.log(email.value);
      console.log(password.value);
      

      

      
      navigation.navigate('welcome', {email: email.value, password: password.value});
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  };

  const [login, setLogin] = useState([]);

  const Login = () => {
   
    axios
      .post('http://localhost:8000/api/login11')
      .then(response => {
        console.log(response.data);
        setLogin(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
useEffect(() => {
    Login();
  }, []);

  return (
    <Background>
      
     <View style={styles.loginbox}>
      <Header >Companion</Header>
      {/* <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        
      /> */}
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
       
      </Button>
   

      
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    color:'#652C9E',
    fontSize: 13,
   
  },
  link: {
    fontWeight: 'bold',
 
  },

  loginbox:{
    backgroundColor:'white',
    padding:20,
    width:330,
    height:430,
    borderRadius:5,
    opacity: 0.9,
  }
})
