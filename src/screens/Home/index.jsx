import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { ImageBackground } from "react-native";
import { Image } from "react-native";

export default function Category() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/planetas1.jpeg")}
        style={styles.imageBackground}
      >
        <Text style={styles.textPrincipal}>Bem-vindo Conquistador!!!</Text>
        <View style={styles.containerbuttons}>
          <TouchableOpacity
            style={styles.navButtonCadastro}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.textButtonsCard}>Cadastrar Planeta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButtonCadastro}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.textButtonsCard}>Planetas Cadastrados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButtonCadastro}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.textButtonsCard}>Sobre o Desenvolvedor</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
