import { React, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerScreen } from "./NavigationScreens/DrawerScreen";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Config";


const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);


    const handleSignIn = async () => {
        try {
            const auth = getAuth(app);
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate("DrawerScreen");
            console.log("User log-in.");
            alert("           Welcome   ");

            setEmail('');
            setPassword('');

        } catch (error) {
            alert("Error Login");
            console.error("Error Login", error);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity >
                <Ionicons name="arrow-back" size={25} color="grey" style={{ marginTop: 35, marginLeft: "5%" }} />
            </TouchableOpacity>
            <Text style={styles.heading}>Let's sign you in!</Text>
            {/* Email */}
            <View>
                <Text style={{ color: "black", marginLeft: 25, fontSize: 16 }}>E-mail</Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput placeholder="Enter your E-mail" placeholderTextColor={'grey'} style={styles.input} keyboardType='default' value={email} onChangeText={setEmail} />
                    <Ionicons name="mail-outline" size={25} color="grey" style={{ marginTop: 10, marginRight: "7%" }}></Ionicons>
                </View>
            </View>
            {/* Password */}
            <View>
                <Text style={{ color: "black", marginLeft: 25, fontSize: 16 }}>Password</Text>
                <View style={{ flexDirection: "row" }}>
                    <TextInput secureTextEntry={!passwordVisible} placeholder="Enter your Password" placeholderTextColor={'grey'} style={styles.input} keyboardType='default' value={password} onChangeText={setPassword} />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={{ marginTop: 10, marginRight: "7%" }}>
                        <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={25} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Forgot Password */}
            <View style={{ marginLeft: 225 }}>
                <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}><Text style={{ color: "blue" }}>Forget Password?</Text></TouchableOpacity>
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.loginbutton} onPress={handleSignIn}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Sign-in</Text>
            </TouchableOpacity>

            <Text style={{ textAlign: "center", marginTop: 7, color: "black" }}>Don't have an account ?
                <Text style={{ color: "blue" }} onPress={() => navigation.navigate("SignUp")}>  Sign-Up</Text>
            </Text>

        </View>
    )
}
export default SignIn;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    heading: {
        marginBottom: 70,
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 80,
        textAlign: "center",
        // color:"#fff"
    },
    input: {
        color: 'black',
        marginLeft: "5%",
        marginRight: "-9%",
        marginBottom: 15,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 0.5,
        paddingHorizontal: 9,
        padding: 10,
        flexGrow: 1,
    },
    loginbutton: {
        backgroundColor: 'black',
        marginLeft: "25%",
        marginRight: "25%",
        marginTop: 60,
        padding: 10,
        borderRadius: 10,
    },
})