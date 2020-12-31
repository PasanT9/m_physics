import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login  from './src/components/Login';
import Home from './src/components/Home';
import MediaPlayer from './src/components/MediaPlayer'
import Media from './src/components/Media';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Media: Media,
    MediaPlayer: MediaPlayer
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
    
  },
  
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {

  render(){
    return <AppContainer />;
  }
}
