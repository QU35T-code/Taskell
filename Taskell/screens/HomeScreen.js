import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import Task from "../components/Task";
import Container from "../components/Container";
import { getTasks, addTask } from "../api/firestore";
import firebase from "firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const uid = firebase.auth().currentUser.uid;

  // useEffect(() => {
  //   var tasks = getTasks(uid);
  //   setTaskList(tasks);
  // }, []);
  const addElement = () => {
    // addTask(task, uid);
    var tasks = getTasks(uid);
    console.log(tasks)
    // setTaskList(tasks)
    // console.log(taskList)
  };
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <Text style={styles.title}>My tasks</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          {/* {taskList} */}
          <Task text="Learn React Native" />
          <Task text="Update my blog" />
          <Task text="Learn English" />
          <Task text="Create a new app" />
        </ScrollView>
        <View style={styles.userInteract}>
          <TextInput
            placeholder="Write a task"
            value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={addElement}>
            <Image
              source={require("../assets/add.png")}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
        {/* <Text>HomeScreen : {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity> */}
      </KeyboardAvoidingView>
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
