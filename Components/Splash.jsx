import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const Splash = () => {
    return(
        <View style={styles.container}>
            <LottieView source={require('../assets/Animie/Splash-Animie.json')}  style={styles.splashImg} />
        </View>
    )
}
export default Splash;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#000",
        alignItems:"center",
        justifyContent:"center",
    },
    splashImg:{
        height:"100%",
        width:"100%",
        backgroundColor:"#fff",
    },

})