import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';
//icon
import { Ionicons } from '@expo/vector-icons';
//component
import Home from '../components/Home';
import DetailScreen from "../Screen/DetailScreen";
import Products from "../Screen/ProductScreen";
import FavScreen from "../Screen/FavScreen";
import CartScreen from "../Screen/CartScreen";
import ShowTabScreen from "../Screen/ShowTabScreen";
import FillTabScreen from "../Screen/FillTabScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

///////////////////////////////////////
const HomeStack = () =>{
  return(
    <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="DetailScreen" component={DetailScreen}  />
          <Stack.Screen name="ProductScreen" component={Products}  />
    </Stack.Navigator>
  );
};

const FavStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="FavScreen" component={FavScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const CartStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}


//////////////////////////////////
const HomeTab = () =>{
  return(
    <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'HomeStack') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'FavStack') {
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
              }
              else if (route.name === 'CartStack') {
                iconName = focused ? 'cart' : 'cart-outline';
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={32} color={color}/>;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: {backgroundColor: '#9333ea', height: 70},
            tabBarLabelStyle: {fontSize: 15}
          })}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="FavStack" component={FavStack} options={{headerShown: false}}/>
            <Tab.Screen name="CartStack" component={CartStack} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};


const FillTab = () =>{
  return(
    <Stack.Navigator >
      <Stack.Screen name="FillTabScreen" component={FillTabScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

const ShowTab = () =>{
  return(
    <Stack.Navigator >
      <Stack.Screen name="ShowTabScreen" component={ShowTabScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
};


///////////////////
const Navigation = () => {
    return (
    <NavigationContainer>
      <Draw.Navigator>
        <Draw.Screen name="HomeTab" component={HomeTab} options={{headerShown: false}} />
        <Draw.Screen name="FillTab" component={FillTab} options={{headerShown: false}} />
        <Draw.Screen name="ShowTab" component={ShowTab} options={{headerShown: false}} />
      </Draw.Navigator>
    </NavigationContainer>
    )
};

export default Navigation;