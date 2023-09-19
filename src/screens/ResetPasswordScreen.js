/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import Background from '../components/Background'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const resetPassword = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, email.value)
    .then(() => {

      alert(`Um email foi enviado para ${email.value} contendo instruções para recuperação da senha.`)
      navigation.navigate('LoginScreen')
     
      
    })
    .catch( error => console.log(error, (alert('Email inválido'))))

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
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
        onPress={resetPassword}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}
