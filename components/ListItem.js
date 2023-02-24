import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ListItem() {
    return(
        <View style={styles.container}>
            <Text>Song Item</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',  
      flexDirection: 'row',
      backgroundColor: 'teal',
    }
  });