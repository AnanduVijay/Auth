import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({title, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected ? styles.selectedContainer : styles.unSelectedContainer,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.categoryListText,
          isSelected ? styles.selectedListText : styles.unSelectedListText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: 'auto',
    marginRight: 10,
  },
  categoryListText: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedContainer: {
    backgroundColor: '#C67C4E',
  },
  selectedListText: {
    color: 'white',
  },
  unSelectedContainer: {
    backgroundColor: 'white',
  },
  unSelectedListText: {
    color: 'black',
  },
});
