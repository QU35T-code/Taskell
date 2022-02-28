import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import Task from "../components/Task";
import Container from "../components/Container";
import { getTasks, addTask, deleteTask } from "../api/firestore";
import firebase from "firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showBox, setShowBox] = useState(true);
  const uid = firebase.auth().currentUser.uid;
  useEffect(() => {
    setIsLoading(true);
    getElements();
    setIsLoading(false);
  }, []);
  const showConfirmDialog = (docID) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this task ?",
      [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => {
            deleteTask(docID);
            getElements();
            setShowBox(false);
          },
        },
      ]
    );
  };
  const addElement = () => {
    if (task === "") {
      alert("You must type a task");
      return;
    }
    setTask("");
    addTask(task, uid);
    getElements();
  };
  async function getElements() {
    tasks = await getTasks(uid);
    setTaskList(tasks);
  }
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  if (isLoading == true) {
    taskItems = (
      <ActivityIndicator
        size="large"
        style={{ marginLeft: "50%", marginTop: 30 }}
      />
    );
  } else {
    taskItems = taskList.map((task) => (
      <Task
        key={task.id}
        press={() => showConfirmDialog(task.id)}
        text={task.name}
      />
    ));
  }
  return (
    <Container>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>My tasks</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={{ color: "#FFFFFF" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {taskItems}
      </ScrollView>
      <View style={styles.userInteract}>
        <TextInput
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={addElement}>
          <Image source={require("../assets/add.png")} style={styles.button} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  scrollView: {
    marginTop: 20,
    marginBottom: 20,
  },
  textInput: {
    width: 257,
    height: 44,
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
  },
  button: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  userInteract: {
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-between",
  },
});
