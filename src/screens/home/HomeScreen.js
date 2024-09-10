import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

import React, {useEffect, useState} from 'react';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  // console.log('S%%%%%% SELECTED ID&&*&*&**', selectedId);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/coffee/hot');
      setProducts(response.data);
    } catch (error) {
      console.error('Error getting products', error);
    }
  };

  const category = [
    {id: 1, title: 'Cappuccino'},
    {id: 2, title: 'Machiato'},
    {id: 3, title: 'Latte'},
    {id: 4, title: 'Caffè mocha'},
    {id: 5, title: 'Caffè mocha'},
    {id: 6, title: 'Espresso'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#2C2C2C', '#202020', '#161616']}
          style={styles.linearGradient}>
          <Header />
          <SearchBar />
        </LinearGradient>
      </View>
      {/* <View style={{alignItems: 'center', backgroundColor: '#F9F9F9'}}>
        <Image
          style={{marginTop: -50, width: 330, height: 150}}
          source={require('../../assets/images/Frame.png')}
          resizeMode="contain"
        />
      </View> */}
      <View style={styles.bodyContainer}>
        <View style={styles.categoryContainer}>
          <FlatList
            data={category}
            renderItem={({item}) => (
              <Category
                title={item.title}
                isSelected={item.id === selectedId}
                onPress={() => setSelectedId(item.id)}
              />
            )}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.productList}>
          <FlatList
            data={products}
            renderItem={({item}) => (
              <ProductCard
                title={item.title}
                ingredients={item.ingredients}
                image={item.image}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.listContainer}
          />
        </View>
        <View style={{width: '100', height: 100}}></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: '#161616',
    // padding: 15,
  },
  linearGradient: {
    padding: 15,
    height: '100%',
  },
  bodyContainer: {
    flex: 2,
    backgroundColor: '#F9F9F9',
  },
  categoryContainer: {
    marginLeft: 17,
    padding: 10,
    paddingRight: 1,
  },
  productList: {
    marginLeft: 10,
    marginBottom: 55,
    paddingBottom: 10,
  },
  listContainer: {
    gap: 10,
    // paddingVertical: 5,
  },
});
