import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayCard}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.buttomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDecrement(count)}>
            <Text style={styles.buttonText}>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleIncrement(count)}>
            <Text style={styles.buttonText}>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#E3E3E3',
  },
  displayCard: {
    alignItems: 'center',
    gap: 50,
    padding: 5,
  },
  count: {
    fontSize: 90,
    color: 'black',
  },
  buttomContainer: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'space-between',
  },

  button: {
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});
