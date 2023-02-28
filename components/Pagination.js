import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Pagination ({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const createPageButtons = () => {
    const pageButtons = [];

    if(totalPages > 6) {
        if(currentPage > 3 && currentPage < totalPages - 2) {
            pageButtons.push(
                <TouchableOpacity
                  key={1}
                  style={1 === currentPage ? styles.activeButton : styles.button}
                  onPress={() => onPageChange(1)}
                >
                  <Text>{1}</Text>
                </TouchableOpacity>
              );
            
            pageButtons.push(
                <View key="dots1" style={styles.button}>
                <Text>...</Text>
                </View>
            );

            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                if (i > 3 && i < totalPages - 2) {
                pageButtons.push(
                    <TouchableOpacity
                    key={i}
                    style={i === currentPage ? styles.activeButton : styles.button}
                    onPress={() => onPageChange(i)}
                    >
                        <Text>{i}</Text>
                    </TouchableOpacity>
                );
                }
            }
    
            pageButtons.push(
                <View key="dots2" style={styles.button}>
                <Text>...</Text>
                </View>
            );
    

            pageButtons.push(
                <TouchableOpacity
                key={totalPages}
                style={totalPages === currentPage ? styles.activeButton : styles.button}
                onPress={() => onPageChange(totalPages)}
                >
                    <Text>{totalPages}</Text>
                </TouchableOpacity>
            );

        } else {
            for (let i = 1; i <= 3; i++) {
                pageButtons.push(
                  <TouchableOpacity
                    key={i}
                    style={i === currentPage ? styles.activeButton : styles.button}
                    onPress={() => onPageChange(i)}
                  >
                    <Text>{i}</Text>
                  </TouchableOpacity>
                );
              }
    
            pageButtons.push(
                <View key="dots" style={styles.button}>
                <Text>...</Text>
                </View>
            );
    
            for (let i = totalPages - 2; i <= totalPages; i++) {
                pageButtons.push(
                    <TouchableOpacity
                    key={i}
                    style={i === currentPage ? styles.activeButton : styles.button}
                    onPress={() => onPageChange(i)}
                    >
                        <Text>{i}</Text>
                    </TouchableOpacity>
                );
            }
        }
        
    } else {
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
              <TouchableOpacity
                key={i}
                style={i === currentPage ? styles.activeButton : styles.button}
                onPress={() => onPageChange(i)}
              >
                <Text>{i}</Text>
              </TouchableOpacity>
            );
          }
    }

    return pageButtons;
  };

  return (
    <View style={styles.pagination}>
      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text>{'<'}</Text>
      </TouchableOpacity>

      {createPageButtons()}

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: 'mintcream'
  },
  button: {
    padding: 8,
    margin: 4,
  },
  activeButton: {
    padding: 8,
    margin: 4,
    backgroundColor: 'mediumaquamarine',
    borderRadius: 50,
  },
  arrowButton: {
    padding: 8,
    margin: 4,
  },
});
