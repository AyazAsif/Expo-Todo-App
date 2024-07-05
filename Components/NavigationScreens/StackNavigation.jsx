import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ResetPassword from "../ResetPassword";
import Home from "../Home";
import DrawerScreen from "./DrawerScreen";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='SignIn' component={SignIn}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword}/>
            <Stack.Screen name='DrawerScreen' component={DrawerScreen}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}
export default StackNavigation;
const styles = StyleSheet.create({});