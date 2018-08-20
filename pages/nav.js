import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cover from "./cover";
import Login from './login';
import Register from './register';
import Home from "./home";
import NewsDetail from "./home/components/detail";

import Info from "./info";
import Chat from './info/chat'

import Add from "./add";

import Fav from "./fav";

import More from "./more";

const MainStack = createStackNavigator(
  {
    home: {
      screen: Home
    },
    newsDetail: {
      screen: NewsDetail
    }
  },
  {
    initialRouteName: "home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#1b82d1"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {}
    }
  }
);

const BottomTab = createBottomTabNavigator(
  {
    home: MainStack,
    info: Info,
    add: Add,
    fav: Fav,
    more: More
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: (navigation1) => {
        const { routeName } = navigation.state;
        if (routeName == 'info') {
          navigation1.navigation.push('Chat')
        }
        else {
          navigation1.navigation.navigate(routeName);
        }
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let Img = null;
        switch (routeName) {
          case "home":
            Img = <Icon name={`home${focused ? '' : '-outline'}`} size={30} color={tintColor} />;
            break;
          case "info":
            Img = <Icon name={`comment${focused ? '' : '-outline'}`} size={30} color={tintColor} />;
            break;
          case "add":
            Img = <Icon name={`plus-box${focused ? '' : '-outline'}`} size={30} color={tintColor} />;
            break;
          case "fav":
            Img = <Icon name={`heart${focused ? '' : '-outline'}`} size={30} color={tintColor} />;
            break;
          case "more":
            Img = <Icon name={`account${focused ? '' : '-outline'}`} size={30} color={tintColor} />;
            break;
        }
        return Img;
      },
      tabBarOptions: {
        showLabel: false,
        activeTintColor: '#333',
        inactiveTintColor: '#333'
      }
    })
  }
);

const RootStack = createStackNavigator(
  {
    cover: {
      screen: Cover
    },
    Login,
    Register,
    Main: {
      screen: BottomTab
    },
    Chat
  },
  {
    mode: "card",
    headerMode: "none"
  }
);

export default RootStack;
