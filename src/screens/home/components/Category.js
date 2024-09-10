import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({title}) => {
  // console.log('######Category######', title);
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.categoryListText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C67C4E',
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: 'auto',
    marginRight: 10,
  },
  categoryListText: {
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
