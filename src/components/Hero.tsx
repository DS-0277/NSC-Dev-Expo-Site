import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HeroCTAButton from "./HeroCTAButton";

type HeroProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonPress?: () => void;
  pageName?: string;
  infoHeading?: string;
  infoDescription?: string;
};

function defaultAction() {
  console.log("CTA button pressed");
}

export default function Hero({
  title = "North Seattle Application Development",
  subtitle = "Developing IT students of the future",
  buttonLabel = "Join Us",
  onButtonPress = defaultAction,
  pageName = "home",
  infoHeading,
  infoDescription,
}: HeroProps) {
  const isStudentStory = pageName === "student-story";

  return (
    <View style={styles.hero}>
      <LinearGradient
        colors={
            isStudentStory
            ? ["#3a3a3a", "#5a5a5a"]
            : ["#1A1A1A", "#808080"]
        }
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.headingText}>{title}</Text>
          <Text style={styles.subHeadingText}>{subtitle}</Text>
        </View>
      </LinearGradient>

      {isStudentStory && (
        <View style={styles.infoSection}>
            <Text style={styles.infoHeading}>{infoHeading}</Text>
            <Text style={styles.infoDescription}>{infoDescription}</Text>
        </View>
      )}

      {!isStudentStory && (
        <HeroCTAButton
          accessibilityRole="button"
          label={buttonLabel}
          onPress={onButtonPress}
          style={styles.floatingButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "white",
    paddingTop: 60,
  },
  textContainer: {
  paddingLeft: 24,
  paddingVertical: 32,
  },
  headingText: {
  fontSize: 32,
  color: "#E5E5E5",
  fontWeight: "600",
  marginBottom: 12,
  letterSpacing: 0.5,
  },
  subHeadingText: {
    fontSize: 16,
    color: "#E5E5E5",
  },
  gradientBackground: {
    width: "100%",
  },
  infoSection: {
    backgroundColor: "#EDEDED",
    padding: 20,
  },
  infoHeading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  infoDescription: {
  fontSize: 14,
  lineHeight: 20,
  color: "#333",
  },
  floatingButton: {
    margin: 24,
  },
});
 