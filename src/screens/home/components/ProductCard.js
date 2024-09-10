import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native-svg';

const ProductCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.imagecontainer}>
        <Image
          style={{width: 80, height: 80, borderRadius: 10}}
          source={require('../../../assets/images/coffee.jpg')}
        />
      </View>
      <View>
        {/* <Text>{title}</Text>
        <Text>{ingredients}</Text> */}
        <Text>Title demo</Text>
        <Text>ingredients, demos</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text>$450</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {},
  imagecontainer: {
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#C67C4E',
  },
  priceContainer: {
    flexDirection: 'row',
  },
});
