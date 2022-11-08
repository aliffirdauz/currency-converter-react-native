import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import CalculateScreen from '../screens/CalculateScreen';
import HomeScreen from '../screens/HomeScreen';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabb = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Konversi') {
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          } else if (route.name === 'Teori') {
            iconName = focused
              ? 'bookmarks'
              : 'bookmarks-outline';
          } else if (route.name === 'Profil') {
            iconName = focused
              ? 'happy'
              : 'happy-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Konversi" component={CalculateScreen} />
        <Tab.Screen name="Teori" component={HomeScreen} />
        <Tab.Screen name="Profil" component={Profile} />
      </Tab.Navigator>
  )
}

export default Tabb