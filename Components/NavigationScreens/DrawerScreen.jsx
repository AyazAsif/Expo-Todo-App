import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";

const DrawerScreen = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>

    )
}
export default DrawerScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})