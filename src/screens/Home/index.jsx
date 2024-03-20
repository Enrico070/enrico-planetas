import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Category() {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrincipal}>Home</Text>

      <TouchableOpacity>
        <Text style={{ color: "black" }}>Cadastrar Planeta</Text>
      </TouchableOpacity>
    </View>
  );
}
