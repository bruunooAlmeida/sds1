import React from 'react';

import { Text , StyleSheet} from 'react-native';

import Header from '../../componets/header';

import { useNavigation } from "@react-navigation/native"

const CreateRecord = () =>{
    const navigation = useNavigation();

    const handleOnPress = ( ) =>{
        navigation.navigate('Home'); 
     }

    return (
        <>
        <Header/>
        <Text style={styles.text}>Hello Create</Text>
        </>
    );
}     

const styles = StyleSheet.create({
        text: {
            color: '#FFF',
            fontSize: 50,
            textAlign: 'center',
            marginTop: 100
        }
});

export default CreateRecord;
