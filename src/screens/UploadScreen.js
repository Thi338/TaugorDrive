/* eslint-disable prefer-const */ /* eslint-disable max-len */ /* eslint-disable no-shadow */ /* eslint-disable no-unused-vars */ /* eslint-disable no-useless-return */ /* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Input, Text } from 'react-native'
import { ref, getStorage, uploadBytes } from 'firebase/storage'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import * as DocumentPicker from 'expo-document-picker'
import Background from '../components/Background'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { storage } from '../../FirebaseConfig'


export default function UploadScreen({ navigation }) {

        const pickDocument = async () => {
           let result = await DocumentPicker.getDocumentAsync({});
           console.log(result.uri);
           console.log(result);
            
           const storage = getStorage();
           const storageRef = ref(storage, 'arquivo');

            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, result).then((snapshot) => {
                alert('Upload feito com sucesso!')
                console.log('Uploaded a blob or file!');
            });
         };
            
       

    return (
        <Background>
            <Header>Tela de Upload</Header>
            <Paragraph>Lista de arquivos</Paragraph>

    
            <Button
                 mode="outlined"
                 onPress={pickDocument}
            >
            <Text>Upload</Text>
                </Button>
        </Background>
    )
 }
