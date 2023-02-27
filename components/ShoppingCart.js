import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
    const { cartSongs } = useSelector(state => state.song.value)

    return(
        <View style={styles.container}>
            {cartSongs.length > 0 ?
            <FlatList 
                keyExtractor={(item) => item.trackId}
                data={cartSongs}
                renderItem={({item}) => (
                    <ListItem 
                        song={item}
                    />
                )}
            />
            : <Text>No songs have been added yet to your cart</Text>}
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