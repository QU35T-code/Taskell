import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";

const Container = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.global}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <View style={styles.container}>{props.children}</View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  global: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    minWidth: 352,
    height: "95%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "auto",
  },
});
