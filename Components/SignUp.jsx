import { React, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SignIn from "./SignIn";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirnPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleSignUp = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          navigation.navigate('SignIn');
          alert("Account created successfully.        Let's log you in!");

          setEmail('');
          setPassword('');
          setConfirmPassword('');
      
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate(SignIn)}>
            <Ionicons name="arrow-back" size={25} color="grey" style={{marginTop:35, marginLeft:"5%"}}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Create your account</Text>
            {/* Email */}
            <View>
                <Text style={{ color: "black", marginLeft: 25, fontSize:16 }}>E-mail</Text>
                 <View style={{flexDirection:"row"}}>
                    <TextInput placeholder="Enter your E-mail" placeholderTextColor={'grey'} style={styles.input} keyboardType='default' value={email} onChangeText={setEmail} />
                    <Ionicons name="mail-outline" size={25} color="grey" style={{marginTop:10, marginRight:"7%"}}></Ionicons>
                </View>
            </View>
            {/* Password */}
            <View>
                <Text style={{ color: "black", marginLeft: 25, fontSize:16  }}>Password</Text>
                <View style={{flexDirection:"row"}}>
                    <TextInput secureTextEntry={!passwordVisible} placeholder="Enter your Password" placeholderTextColor={'grey'} style={styles.input} keyboardType='default' value={password} onChangeText={setPassword} />
                    <TouchableOpacity  onPress={() => setPasswordVisible(!passwordVisible)} style={{marginTop:10, marginRight:"7%"}}>
                       <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={25} color="grey"/>
                    </TouchableOpacity>
                </View>
            </View>
             {/* Confirm Password */}
             <View>
                <Text style={{ color: "black", marginLeft: 25, fontSize:16  }}>Confirm Password</Text>
                <View style={{flexDirection:"row"}}>
                    <TextInput secureTextEntry={!confirnPasswordVisible} placeholder="Confirm your Password" placeholderTextColor={'grey'} style={styles.input} keyboardType='default' value={confirmPassword} onChangeText={setConfirmPassword} />
                    <TouchableOpacity  onPress={() => setConfirmPasswordVisible(!confirnPasswordVisible)} style={{marginTop:10, marginRight:"7%"}}>
                       <Ionicons name={confirnPasswordVisible ? 'eye-off' : 'eye'} size={25} color="grey"/>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Button */}
            <TouchableOpacity style={styles.loginbutton} onPress={handleSignUp}>
                <Text style={{color:"white", textAlign: "center", fontSize: 20, fontWeight:"bold" }}>Sign-up</Text>
            </TouchableOpacity>

            <Text style={{ textAlign:"center", marginTop: 7, color: "black" }}>Already have an account ?
                <Text style={{ color: "blue" }} onPress={()=>navigation.navigate(SignIn)}>  Sign-In</Text>
            </Text>

        </View>
    )
}
export default SignUp;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
    },
    heading:{
        marginBottom: 70,
        fontSize:30,
        fontWeight:"bold",
        marginTop:80,
        textAlign:"center",
    },
    input: {
        color: 'black',
        marginLeft: "5%",
        marginRight:"-9%",
        marginBottom: 15,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 0.5,
        paddingHorizontal:9,
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