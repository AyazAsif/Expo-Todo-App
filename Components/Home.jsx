import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, RefreshControl, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


const Home = () => {
    const [refresh, setRefresh] = useState(false);

    const [tasks, setTasks] = useState([
        
    ]);
    const [newTask, setNewTask] = useState("");

    const pullMe = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false)
        }, 3000)
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
            setNewTask("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <View style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />}>

                {tasks.map((task) => (
                    <View key={task.id} style={styles.taskBox}>
                        <View>
                            <Text style={styles.taskText}>{task.text}</Text>
                        </View>
                        <TouchableOpacity onPress={() => deleteTask(task.id)} style={{marginRight:"-10%"}}>
                            <Ionicons name='trash-outline' size={30} color="red" />
                        </TouchableOpacity>
                    </View>
                ))}

            </ScrollView>

            {/* Footer */}
            <SafeAreaView style={styles.input}>

                {/* Input Text Box */}
                <View style={styles.inputText}>
                    <TextInput placeholder='Enter your task' placeholderTextColor="grey" style={{ color: "#000", fontSize: 25, marginRight:"-5%" }} value={newTask}
                        onChangeText={setNewTask} />
                </View>

                {/* Add Button */}
                <TouchableOpacity onPress={addTask} style={{marginRight:"-17%"}}>
                    <Ionicons name='add-circle-sharp' size={50} color="green" />
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    taskBox: {
        color: "black",
        fontSize: 17,
        borderRadius: 12,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 7,
        marginLeft: "2%",
        marginRight: "10%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor:"pink",
    },
    taskText: {
        color: "black",
        padding: 12,
        fontSize: 20,
        marginRight: "0.5%",
    },
    input: {
        flexDirection: "row",
        marginLeft: "2%",
        marginRight: "14%",
        marginTop: "2%",
        marginBottom: "0.5%",
    },
    inputText: {
        marginRight: "0.5%",
        borderRadius: 12,
        borderColor: "green",
        borderWidth: 2,
        paddingHorizontal: 10,
        flexGrow: 1,
        justifyContent: "center"
    },
})