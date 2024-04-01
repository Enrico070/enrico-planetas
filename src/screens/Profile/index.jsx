import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import planetaRepositorio from "../../models/PlanetaRepositorio";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("Cadastro", { planeta: data, edit: true });
  };

  const deletePlanet = () => {
    planetaRepositorio.remove(data.id);
    navigation.navigate("Planetas");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/planetas2.jpeg")}
        style={styles.imageBackground}
      >
        {data ? (
          <Text style={styles.textPrincipal}>Detalhes do Planeta</Text>
        ) : (
          <Text>Selecione um planeta para exibir seus detalhes</Text>
        )}

        <View style={styles.planeta}>
          <View style={styles.planetaDetail}>
            <Text style={styles.text}>{data.planet}</Text>
            <Text style={styles.text}>{data.date}</Text>
            <Text style={styles.text}>{data.color1}</Text>
            <Text style={styles.text}>{data.color2}</Text>
            <Text style={styles.text}>{data.populacao}</Text>
            <Text style={styles.text}>{data.recursos}</Text>
            <Text style={styles.text}>{data.assentamentos}</Text>
            <Text style={styles.text}>{data.galaxia}</Text>
            <Text style={styles.text}>{data.sistema}</Text>
            <Text style={styles.text}>{data.coordenadas}</Text>
            <Text style={styles.text}>{data.frequencia}</Text>
            <Text style={styles.text}>{data.codificacao}</Text>
            <Text style={styles.text}>{data.name}</Text>
            <Text style={styles.text}>{data.cargo}</Text>
          </View>

          <View style={styles.planetaActions}>
            <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
              <Text
                style={{
                  color: "#f0f0f0",
                  fontSize: 16,
                }}
              >
                Editar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={deletePlanet}
            >
              <Text
                style={{
                  color: "#f0f0f0",
                  fontSize: 16,
                }}
              >
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
