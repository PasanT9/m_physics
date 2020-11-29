import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login  from './src/components/Login';
import Home from './src/components/Home';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: "Login",
    
  },
  
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  render(){
    return <AppContainer />;
  }
}
