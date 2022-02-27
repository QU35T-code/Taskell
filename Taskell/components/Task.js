import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React from "react";

const Task = (props) => {
  const handleDelete = () => {
    alert("Are you sure to delete this note ?");
  };
  return (
    <TouchableOpacity onPress={handleDelete}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.firstElement}>
            <View style={styles.icon} />
            <Text style={styles.task}>{props.text}</Text>
          </View>
          <View style={styles.iconCircle} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 352,
    height: 67,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
  },
  task: {
    fontSize: 18,
    fontWeight: "normal",
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#EE3C3C",
  },
  subContainer: {
    width: "95%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "#EE3C3C",
    borderWidth: 2,
  },
  firstElement: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
