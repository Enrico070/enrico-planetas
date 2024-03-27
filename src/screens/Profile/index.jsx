import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import planetaRepositorio from "../../models/PlanetaRepositorio";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editUser = () => {
    navigation.navigate("Cadastro", { planeta: data, edit: true });
  };

  const deleteUser = () => {
    planetaRepositorio.remove(data.id);
    navigation.navigate("Planetas");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textPrincipal}>Profile</Text>

      {data ? (
        <Text>Detalhes do Planeta</Text>
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
          <TouchableOpacity style={styles.editButton} onPress={editUser}>
            <Text
              style={{
                color: "#f0f0f0",
                fontSize: 16,
              }}
            >
              Editar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteUser}>
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
    </View>
  );
}
