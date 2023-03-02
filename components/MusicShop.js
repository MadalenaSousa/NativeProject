import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import { setAllSongs, filterSongs } from '../reducers/songslice';
import ListItem from './ListItem';
import Pagination from './Pagination';

export default function MusicShop() {
    const dispatch = useDispatch();
    const { cartSongs } = useSelector((state) => (state && state.song && state.song.value ? state.song.value : []))
    const { filteredSongs } = useSelector((state) => (state && state.song && state.song.value ? state.song.value : []))
    const songsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [splitSongs, setSplitSongs] = useState(filteredSongs);
    
    useEffect(() => {
        fetch("https://itunes.apple.com/search?term=rock&entity=musicTrack&limit=200")
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.results);

            dispatch(setAllSongs(data.results)) 
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        handlePageChange(1)
    }, [filteredSongs]);

    function handlePageChange(page) {
        const from = (page - 1) * songsPerPage;
        const to = (page - 1) * songsPerPage + songsPerPage;
        setCurrentPage(page);

        const newSongs = filteredSongs.slice(from, to)
        setSplitSongs(newSongs)
    }

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
                style={styles.list}
                keyExtractor={(item) => item.trackId}
                data={splitSongs}
                renderItem={({item}) => (
                    <ListItem 
                        song={item}
                        isAdded={cartSongs.find(cartSong => cartSong.trackId === item.trackId) !== undefined}
                    />
                )}
            />
            <Pagination
                totalItems={filteredSongs.length}
                itemsPerPage={songsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
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
    },
    list: {
        alignContent: 'stretch',
        width: '100%'
    }
  });