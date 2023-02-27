import React from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
    const { cartSongs } = useSelector(state => state.song.value)

    const priceSum = () => {
        let price = 0;
        for(let i = 0; i < cartSongs.length; i++) {
            price = price + cartSongs[i].trackPrice;
        }
        return price;
    }

    return(
        <View style={styles.container}>
            <View>
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
            <View style={styles.cartDetails}>
                <View style={styles.cartDetailsRow}>
                    <Text style={styles.title}>Song Amount</Text>
                    <Text>{cartSongs.length}</Text>
                </View>
                <View style={styles.cartDetailsRow}>
                    <Text style={styles.title}>Price Total</Text>
                    <Text>{priceSum()} $</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>PURCHASE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      height: '100%'
    },
    cartDetails: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    cartDetailsRow: {
        alignItems: 'center',
        margin: 10,
    },
    title: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'mediumaquamarine',
        padding: 10,
        margin: 10,
        width: '95%',
        alignItems: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontWeight: 'bold'
    }
  });