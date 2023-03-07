import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile() {
    const { username } = useSelector((state) => (state && state.user && state.user.value ? state.user.value : []))
    const { isLogged } = useSelector((state) => (state && state.user && state.user.value ? state.user.value : []))

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <MaterialIcons size={48} name="person" color="black" backgroundColor='transparent' />
                <Text style={styles.name}>Jane Smith</Text>
                {isLogged ? <Text>{username}</Text> : <Text>You are not logged in!</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: '100%',
      alignItems: 'center',
    },
    content: {
        margin: 50,
        alignItems: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    }
  });