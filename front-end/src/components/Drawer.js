import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';
import Papers from './Papers';
import Media from './Media';

const Drawer = createDrawerNavigator();

export default () => {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Media" component={Media} />
            <Drawer.Screen name="Papers" component={Papers} />
        </Drawer.Navigator>
    )
}
