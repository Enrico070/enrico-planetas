import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import planetaRepositorio from "../../models/PlanetaRepositorio"

export default function Planetas(){
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [allPlanetas, setAllPlanetas] = useState([])

    useEffect(() => {
        if (isFocused){
            const planetas = planetaRepositorio.getAll();
            setAllPlanetas(planetas)
        }
    }, [isFocused])

    return(
        <View style={styles.container}>
            <Text style={styles.textPrincipal}>Planetas</Text>
            <Text>Tela de listagem de todos os planetas</Text>

            {allPlanetas.length > 0 ? (
        <View style={styles.planetaList}>
          {allPlanetas.map((planeta) => (
            <View key={planeta.id} style={styles.planetaItem}>
              <View>
                <Text style={styles.planetaName}>{planeta.name}</Text>
              </View>

              <View style={styles.planetaActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Profile", { data: planeta })}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há planetas cadastrados</Text>
      )}
        </View>
    )
}