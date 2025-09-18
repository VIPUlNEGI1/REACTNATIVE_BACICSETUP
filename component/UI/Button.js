import { Pressable, StyleSheet, View, Text } from "react-native";
import GlobalStyles from "../../constanta/style";

function Button({ children, onPress, mode }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        mode === "flat" && styles.flat,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
        {children}
      </Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    minWidth: 120,
    marginHorizontal: 8,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
  },
});
