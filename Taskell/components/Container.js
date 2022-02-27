import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Container = (props) => {
  return (
    <SafeAreaView style={styles.global}>
      <View style={styles.container}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    height: "95%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
  },
});
