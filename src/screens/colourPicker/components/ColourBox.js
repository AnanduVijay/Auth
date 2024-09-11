import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ColourBox = ({title, colour, onPress}) => {
  return (
    <TouchableOpacity style={styles.colorContainer} onPress={onPress}>
      <View style={[styles.colorBox, {backgroundColor: colour}]}></View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ColourBox;

const styles = StyleSheet.create({
  colorContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginRight: 40,
  },
  colorBox: {
    height: 35,
    width: 100,
    // backgroundColor: 'blue',
  },
  text: {
    color: 'black',
  },
});
