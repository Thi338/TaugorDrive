/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable prettier/prettier */

import React, {useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { promptAsync } from '../../App'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { GoogleAuthProvider, 
  signInWithCredentials,
  onAuthStateChanged
} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

WebBrowser.maybeCompleteAuthSession()

export default function StartScreen({ navigation }) {

  const [userInfo, setUserInfo] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
     androidClientId: "428453817030-qhbi3s8t7h73f65dks0hflobehom571t.apps.googleusercontent.com",
  })

  useEffect(() => {
     if (response?.type === "success") {
       const { id_token } = response.params
       const credential = GoogleAuthProvider.credential(id_token)
       signInWithCredentials(FIREBASE_AUTH, credential)
     }
  }, [response])
  
  return (
    <Background>
      <Logo />
      <Header>Taugor Drive</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
      <Button mode="outlined" onPress={() => promptAsync()}> 
        <Text style={{color: 'red', fontSize: 24}}>G</Text>
        Entrar com Google
      </Button>
    </Background>
  )
}
