import { React, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = ({navigation}) => {
    const [email, setEmail] = useState('');

    const auth = getAuth();

    const handleForgotPassword = async () => {
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset email sent!");
          setEmail('');
        } catch (error) {
          console.error(error);
        }
      };
    
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Ionicons name="arrow-back" size={25} color="black" style={{marginTop:35, marginLeft:"5%"}}/>
            </TouchableOpacity>
            
            <Text style={styles.heading}>Reset Password</Text>
            {/* Email */}
            <View style={{marginTop:"20%"}}>
                <Text style={{ color: "black", marginLeft: 25, fontSize:16 }}>E-mail</Text>
                 <View style={{flexDirection:"row"}}>
                    <Ionicons name="mail-outline" size={25} color="grey" style={{marginTop:12, marginLeft:"5%"}}></Ionicons>
                    <TextInput placeholder="Enter your E-mail" placeholderTextColor={'grey'} style={styles.input} keyboardType='default' value={email} onChangeText={setEmail} />
                </View>
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.loginbutton} onPress={handleForgotPassword}>
                <Text style={{color:"white", textAlign: "center", fontSize: 20, fontWeight:"bold" }}>Reset</Text>
            </TouchableOpacity>

        </View>
    )
}
export default ResetPassword;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
    },
    heading:{
        // marginBottom: 70,
        fontSize:30,
        marginTop:80,
        textAlign:"center",
    },
    input: {
        color: 'black',
        marginLeft: "-8%",
        marginRight:"4%",
        // marginBottom: 15,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 0.5,
        paddingHorizontal:33,
        padding:10,
        flexGrow:1,
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