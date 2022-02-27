import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import Task from "../components/Task";
import Container from "../components/Container";

const HomeScreen = () => {
  const navigation = useNavigation();
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
      <Text style={styles.title}>Today's tasks</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Task text="Learn React Native" />
        <Task text="Update my blog" />
        <Task text="Learn English" />
        <Task text="Create a new app" />
      </ScrollView>
      {/* <Text>HomeScreen : {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity> */}
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
    marginTop: 20
  }
});
