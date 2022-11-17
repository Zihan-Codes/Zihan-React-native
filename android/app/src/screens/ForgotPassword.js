import React, { useState } from 'react'

import Background from '../components/Background'
import BackButton from '../components/BackButton'
// import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { View, StyleSheet } from 'react-native'

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendForgotPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    
    navigation.navigate('LoginScreen')}
  

  

  return (
    <Background>

<View style={styles.loginbox}>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Header>Forgot Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendForgotPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
      </View>
    </Background>
  )
  }

const styles = StyleSheet.create({

loginbox:{
  backgroundColor:'white',
  padding:20,
  width:330,
  height:430,
  borderRadius:5,
  opacity: 0.9,
}
})