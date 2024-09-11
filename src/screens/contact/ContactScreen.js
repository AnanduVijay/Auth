import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Linking,
} from 'react-native';
import React from 'react';
import ContactCard from './components/ContactCard';

const ContactScreen = () => {
  const data = [
    {id: 1, name: 'Ziya', contact: 9845235845},
    {id: 2, name: 'Stephin', contact: 8952455258},
    {id: 3, name: 'Shameem', contact: 8289423661},
    {id: 4, name: 'Anoop', contact: 123456789},
  ];

  const total = data.length;

  const handleCall = contactNumber => {
    Linking.openURL(`tel:${contactNumber}`);
    console.log('Dialing to ', contactNumber);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: '#B6B6B6',
          fontSize: 15,
          alignSelf: 'center',
          margin: 15,
        }}>
        Total contacts {total}
      </Text>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ContactCard
              name={item.name}
              contact={item.contact}
              onPress={() => handleCall(item.contact)}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    padding: 10,
  },
});
