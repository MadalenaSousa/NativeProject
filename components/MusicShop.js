import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { setAllSongs, filterSongs } from '../reducers/songslice';
import ListItem from './ListItem';

export default function MusicShop() {
    const dispatch = useDispatch();
    const { allSongs } = useSelector(state => state.song.value)
    const { cartSongs } = useSelector(state => state.song.value)
    const { filteredSongs } = useSelector(state => state.song.value)
    
    useEffect(() => {
        fetch("https://itunes.apple.com/search?term=rock&entity=musicTrack&limit=100")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.results);
            //setSongs(data.results)

            dispatch(setAllSongs(data.results))
        })
        .catch((error) => console.log(error));
    }, [])

    return(
        <View style={styles.container}>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder='Search songs by title'
                    onChangeText={(val) => dispatch(filterSongs(val))}
                />
            </View>
            <FlatList 
                keyExtractor={(item) => item.trackId}
                data={filteredSongs}
                renderItem={({item}) => (
                    <ListItem 
                        song={item}
                        isAdded={cartSongs.find(cartSong => cartSong.trackId === item.trackId) !== undefined}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'grey',
        width: 350,
        margin: 10,
        padding: 5
    }
  });