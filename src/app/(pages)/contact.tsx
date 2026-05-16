import { ScrollView, Text, StyleSheet } from "react-native";

export default function ContactPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Welcome to the contact Page!</Text>
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