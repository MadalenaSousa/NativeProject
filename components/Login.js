import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { login } from '../reducers/userslice';

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) { 
        event.preventDefault()
        const userData = {
            username: username,
            password: password,
            isLogged: true
        }

        dispatch(login(userData))
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to your Shopping Cart!</Text>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor="white"
                    onChangeText={(val) => setUsername(val)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor="white"
                    onChangeText={(val) => setPassword(val)}
                />
                <Button 
                    title='ENTER' 
                    color={'mediumaquamarine'} 
                    onPress={handleSubmit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'teal',
    },
    input: {
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        color: 'white',
        width: 250,
        margin: 10,
        padding: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        width: '50%',
    }
  });