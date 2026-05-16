import { ScrollView, Text, StyleSheet } from "react-native";

export default function StudentPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Welcome to the Student Page!</Text>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});