import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import ProductCard from './components/ProductCard';
// import LinearGradient from 'react-native-linear-gradient';

import React from 'react';

const HomeScreen = () => {
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
        <Header />
        <SearchBar />
      </View>

      <View style={styles.bodyContainer}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{marginTop: -70}}
            source={require('../../assets/images/Frame.png')}
          />
        </View>
        <View style={styles.categoryContainer}>
          <FlatList
            data={category}
            renderItem={({item}) => <Category title={item.title} />}
            horizontal={true}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <ProductCard />
        <View></View>
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
    backgroundColor: '#161616',
  },
  bodyContainer: {
    flex: 2,
    backgroundColor: '#F9F9F9',
  },
  categoryContainer: {
    margin: 10,
    padding: 10,
  },
});
