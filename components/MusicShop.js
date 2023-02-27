import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { setAllSongs } from '../reducers/songslice';
import ListItem from './ListItem';

export default function MusicShop() {
    const [songs, setSongs] = useState([]);
    const dispatch = useDispatch();
    const { allSongs } = useSelector(state => state.song.value)
    
    useEffect(() => {
        fetch("https://itunes.apple.com/search?term=rock&entity=musicTrack&limit=10")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.results);
            //setSongs(data.results)
            
            dispatch(setAllSongs(data.results))
        })
        .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        setSongs(allSongs)
    }, [allSongs.length])

    return(
        <View style={styles.container}>
            <FlatList 
                keyExtractor={(item) => item.trackId}
                data={allSongs}
                renderItem={({item}) => (
                    <ListItem 
                        song={item}
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
    }
  });