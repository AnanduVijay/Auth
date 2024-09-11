import {StyleSheet, Text, SafeAreaView, View, FlatList} from 'react-native';
import ColourBox from './components/ColourBox';
import SelectedColourBox from './components/SelectedColourBox';
import React, {useState} from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState({title: '', colour: ''});
  const data = [
    {id: 1, colour: 'red', title: 'Red'},
    {id: 2, colour: 'green', title: 'Green'},
    {id: 3, colour: 'yellow', title: 'Yellow'},
    {id: 4, colour: 'orange', title: 'Orange'},
    {id: 5, colour: 'blue', title: 'Blue'},
    {id: 6, colour: 'black', title: 'Black'},
  ];

  const handleColourSelection = item => {
    setSelectedColor({
      title: item.title,
      colour: item.colour,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SelectedColourBox
        title={selectedColor.title}
        colour={selectedColor.colour}
      />
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ColourBox
              title={item.title}
              colour={item.colour}
              onPress={() => handleColourSelection(item)}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
