import { View, Text, TextInput, StyleSheet } from "react-native";
import GlobalStyles from "../../constanta/style";

function Input({ label,style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (

    <View style={[styles.inputContainer,style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginVertical:8,
   
  },
  label: {
    fontSize: 16,
    color: '#c9e3feff',
    marginBottom: 4,
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 16,
    backgroundColor: '#6a6a6a30',
    color: "white",
    borderRadius: 4,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
