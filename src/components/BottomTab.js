import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ContactScreen from '../screens/contact/ContactScreen';
import {
  HomeIcon,
  HeartIcon,
  ShoppingBagIcon,
  BellIcon,
} from 'react-native-heroicons/outline';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          } else if (route.name === 'Favorite') {
            return <HeartIcon color={color} size={size} />;
          } else if (route.name === 'Cart') {
            return <ShoppingBagIcon color={color} size={size} />;
          } else if (route.name === 'Notification') {
            return <BellIcon color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#C67C4E',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={ContactScreen} />
      <Tab.Screen name="Cart" component={HomeScreen} />
      <Tab.Screen name="Notification" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
