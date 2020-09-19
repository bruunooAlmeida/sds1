import React from 'react';

import {NavigationContainer} from  "@react-navigation/native";
import {createStackNavigator } from  "@react-navigation/stack";
import Home from './pages/Home';
import CreateRecord from './pages/CreateRecord';

const stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <stack.Navigator  headerMode="none" screenOptions={ { cardStyle: { backgroundColor : '#0B1F34'}

            }}>
            <stack.Screen name="Home"  component={Home}/>
            <stack.Screen name="CreateRecord"  component={CreateRecord}/>
            </stack.Navigator>

        </NavigationContainer>
    )

}

export default Routes;