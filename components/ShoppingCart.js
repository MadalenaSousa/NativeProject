import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ShoppingCart() {
    return(
        <View style={styles.container}>
            <Text>Shopping Cart Items</Text>
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