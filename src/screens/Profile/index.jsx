import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";


export default function Profile({route}) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}
