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
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, StyleSheet} from 'react-native';

const BottomTabs = createBottomTabNavigator();

const AddButton = ({size}): JSX.Element => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <Icon name="plus" size={size} color={'white'} />
    </TouchableOpacity>
  );
};

function AuthenticatedStack() {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: Styles.colors.white,
          borderRadius: 50,
          width: '90%',
          position: 'absolute',
          height: 60,
          bottom: 10,
          left: 20,
          right: 20,
          paddingVertical: 10,
          alignSelf: 'center',
          elevation: 10,
          shadowColor: Styles.colors.mainBlue,
          shadowRadius: 3.5,
        },
        tabBarItemStyle: {marginBottom: 5},
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <BottomTabs.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarActiveTintColor: Styles.colors.darkBlue,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AddButton"
        component={MainScreen}
        options={{
          headerShown: false,

          tabBarActiveTintColor: Styles.colors.darkBlue,
          tabBarIcon: ({size}) => <AddButton size={size} />,
        }}
      />
      <BottomTabs.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: 'My profile',
          headerShown: false,
          tabBarActiveTintColor: Styles.colors.darkBlue,
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={size} color={color} />
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

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    backgroundColor: Styles.colors.darkBlue,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
    elevation: 5,
  },
});

export default App;
