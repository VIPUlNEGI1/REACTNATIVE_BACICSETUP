import { StyleSheet, View, Pressable } from "react-native";
import Ionicon from '@react-native-vector-icons/ionicons';
function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
    >
      <View>
        <Ionicon name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 10,         
    margin: 8,          
    marginRight: 16, 
    backgroundColor: "#ffffff20",  
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
