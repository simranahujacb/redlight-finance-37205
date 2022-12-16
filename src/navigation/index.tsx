import { createStackNavigator } from "@react-navigation/stack";
import React,{FC} from 'react'
import {Splash as SplashScreen} from "../screens/splash";
import {Signup as SignupScreen} from '../screens/signup';
import { Signin as SigninScreen } from "../screens/signin";

const RootStack = createStackNavigator();
const RootNavigator : FC = ()=>{
    return (
        <RootStack.Navigator 
            initialRouteName="SplashScreen"
            screenOptions={{
                headerShown : false
            }}
        >
            <RootStack.Screen 
                name="SplashScreen"
                component={SplashScreen}
            />
             <RootStack.Screen 
                name="SignupScreen"
                component={SignupScreen}
            />
            <RootStack.Screen
                name="SigninScreen"
                component={SigninScreen}/>
        </RootStack.Navigator>
    )
}

export default RootNavigator