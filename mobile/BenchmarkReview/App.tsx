/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import MyProfile from './screens/MyProfile';
import {Styles} from './constants/styles.js';
import {Icon} from 'react-native-elements';

const BottomTabs = createBottomTabNavigator();

function AuthenticatedStack() {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: Styles.colors.vistaBlue,
        },
        headerShown: false,
      })}>
      <BottomTabs.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: Styles.colors.white,
          tabBarActiveTintColor: Styles.colors.darkBlue,
          tabBarIcon: ({color, size}) => (
            <Icon name="rowing" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: 'My profile',
          headerShown: false,
          tabBarInactiveTintColor: Styles.colors.white,
          tabBarActiveTintColor: Styles.colors.darkBlue,
          tabBarIcon: ({color, size}) => (
            <Icon name="rowing" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthenticatedStack />
    </NavigationContainer>
  );
}

function App(): JSX.Element {
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
