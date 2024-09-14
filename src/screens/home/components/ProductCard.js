import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProductCard = ({title, ingredients, image}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          style={{
            width: 150,
            height: 140,
            borderRadius: 10,
            borderColor: 'white',
          }}
          source={{uri: image}}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            position: 'absolute',
            alignSelf: 'flex-start',
            margin: 5,
            marginLeft: 10,
          }}>
          ⭐4.5
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
          {title}
        </Text>
        <Text style={{color: 'grey', fontSize: 12}}>with {ingredients}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>$ 450</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={{margin: 10, fontSize: 15, fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 15,
    width: 160,
    borderRadius: 10,
  },
  imagecontainer: {
    alignItems: 'center',
  },

  addButton: {
    borderRadius: 10,
    backgroundColor: '#C67C4E',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    padding: 5,
  },
  detailsContainer: {
    marginTop: 5,
  },
});
