import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from 'react-native-heroicons/outline';

import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          gap: 4,
        }}>
        <MagnifyingGlassIcon size="25" color="white" />
        <TextInput placeholder="Search coffee" />
      </View>
      <TouchableOpacity style={styles.settings}>
        <AdjustmentsHorizontalIcon size="25" color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313131',
    alignItems: 'center',
    padding: 5,
    margin: 15,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settings: {
    backgroundColor: '#C67C4E',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
});

// #313131
