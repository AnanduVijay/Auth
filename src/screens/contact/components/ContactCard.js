import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ContactCard = ({name, contact, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={{gap: 15}}>
        <Text style={{color: 'black'}}>{name}</Text>
        <Text style={{color: 'green'}}>{contact}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize: 18}}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2AB508',
    padding: 10,
  },
});
