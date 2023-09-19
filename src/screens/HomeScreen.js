/* eslint-disable prettier/prettier */
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'



export default function HomeScreen({ navigation }) {

  function logout() {
    alert('Deslogado com sucesso!')
    navigation.navigate('StartScreen')

  }

  

  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Olá! Seja bem-vindo ao app Taugor Drive.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('UploadScreen')
        }
      >
        Tela de Upload
      </Button>

      <Button
        mode="outlined"
        onPress={() =>
           logout()
        }
      >
        Logout
      </Button>
    </Background>
  )
}
