import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Sobre() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/planetas2.jpeg")}
        style={styles.imageBackground}
      >
        <Image
          style={styles.imgPrincipal}
          source={require("../../../assets/ft.jpg")}
        />
        <Text style={styles.textPrincipal}>Sobre mim</Text>
        <Text style={styles.text}>
          Sou Enrico de Amorim Lona, desenvolvedor de sistemas e idealizador
          desse app. Curso DS pelo SENAI e conjuntamente estudo no terceiro ano
          do SESI, fazendo também atividades de vôlei, futebol, música e
          corriqueiramente pesca. Tive a ideia de um app mais interativo, então
          utilizei esse jogo de cores. Esse app é um exemplo e uma
          personificação de como seria um app sobre o Enem, dessa forma os
          conteúdos integrados as páginas não contém informações totalmente
          completas, sendo só observações resumidas, ainda sim, dentro do
          contexto apresentado.
        </Text>
        <View styles={styles.margin}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.textCategoriasCard}>
              Voltar para a página inicial
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
