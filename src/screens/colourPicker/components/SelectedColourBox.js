import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SelectedColourBox = ({title, colour}) => {
  //   console.log('selectedColourBox', title, colour);

  return (
    <View style={styles.selectedContainer}>
      <Text style={{color: 'black', marginTop: 5}}>Selected Color</Text>
      <View style={styles.selectedDetails}>
        <View style={[styles.colorBox, {backgroundColor: colour}]}></View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default SelectedColourBox;

const styles = StyleSheet.create({
  selectedContainer: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 50,
    marginRight: 40,
  },
  selectedDetails: {
    alignItems: 'center',
    gap: 10,
  },
  colorBox: {
    height: 35,
    width: 100,
  },
  text: {
    color: 'black',
  },
});
