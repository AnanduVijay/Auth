import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Location</Text>
        <Text style={{fontWeight: 'bold'}}>Bitzen, Tanjungbali</Text>
      </View>
      <View>
        <Image
          style={{width: 50, height: 50, borderRadius: 14}}
          source={require('../../../assets/images/profile.jpg')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
