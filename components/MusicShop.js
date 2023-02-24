import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './listItem';

export default function MusicShop() {
    const [songs, setSongs] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setSongs(data)
        })
        .catch((error) => console.log(error));
    }, [])

    return(
        <View style={styles.container}>
            {songs.map(song => (
                <ListItem />
            ))}
            <ListItem />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    }
  });