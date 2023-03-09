/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import MyProfile from './screens/MyProfile';
import {Styles} from './constants/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, StyleSheet} from 'react-native';
import GamePage from './screens/GamePage';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface IconProps {
  size: number;
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Styles.colors.white,
  },
};

const AddButton: React.FC<IconProps> = ({size}) => {
  return (
    <TouchableOpacity style={styles.addButton}>
      <Icon name="plus" size={size} color={'white'} />
    </TouchableOpacity>
  );
};

function FirstScreen() {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        tabBarStyle: {
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
          backgroundColor: Styles.colors.darkBlue,
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
          tabBarActiveTintColor: Styles.colors.white,

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
          tabBarActiveTintColor: Styles.colors.white,

          tabBarIcon: ({size}) => <AddButton size={size} />,
        }}
      />
      <BottomTabs.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          title: 'My profile',
          headerShown: false,
          tabBarActiveTintColor: Styles.colors.white,

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
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Styles.colors.plum,
          },
        }}>
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GamePage"
          component={GamePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
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
    backgroundColor: Styles.colors.mainBlue,
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
