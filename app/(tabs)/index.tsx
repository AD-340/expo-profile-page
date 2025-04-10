import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile Page</Text>
      </View>

      {/* Profile Image */}
      <Image
        source={require("../../assets/images/profile.png")}
        style={styles.profileImage}
        resizeMode="contain"
      />

      {/* Information Section */}
      <ScrollView style={styles.scrollSection}>
        <Text style={styles.infoText}>Hi there! 👋</Text>
        <Text style={styles.infoText}>
          I’m learning how to build mobile apps using React Native.
        </Text>
        <Text style={styles.infoText}>
          This project uses core components effectively.
        </Text>
        <Text style={styles.infoText}>
          It’s built with Expo, which simplifies the development process.
        </Text>
        <Text style={styles.infoText}>
          Keep scrolling to see the input form below ⬇️
        </Text>
        <Text style={styles.infoText}>This is a scrollable section.</Text>
      </ScrollView>

      {/* Input Form */}
      <View style={styles.formSection}>
        <TextInput style={styles.input} placeholder="Enter your name" />
        <TextInput style={styles.input} placeholder="Leave a comment" />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  header: {
    backgroundColor: "#4682B4",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  profileImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  scrollSection: {
    maxHeight: 150,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 4,
  },
  formSection: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#4682B4",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 6,
    fontWeight: "bold",
  },
});
