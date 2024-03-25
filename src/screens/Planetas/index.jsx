import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Title from "../../components/Title";
import styles from "./styles";
import planetaRepositorio from "../../models/PlanetaRepositorio";

export default function Planetas() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanetas, setAllPlanetas] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planetas = planetaRepositorio.getAll();
      setAllPlanetas(planetas);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/planetas2.jpeg")}
        style={styles.imageBackground}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 300,
          }}
        >
          <Text style={styles.textPrincipal}>Planetas:</Text>

          {allPlanetas.length > 0 ? (
            <View style={styles.planetaList}>
              {allPlanetas.map((planeta) => (
                <View key={planeta.id} style={styles.planetaItem}>
                  <View>
                    <Text style={styles.planetaName}>{planeta.planet}</Text>
                  </View>

                  <View style={styles.planetaActions}>
                    <TouchableOpacity
                      style={styles.detailsButton}
                      onPress={() =>
                        navigation.navigate("Profile", { data: planeta })
                      }
                    >
                      <Text style={{ color: "white" }}>Detalhes</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <Text style={{ color: "red", fontSize: 17 }}>
              Não há planetas cadastrados
            </Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ color: "white" }}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
