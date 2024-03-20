import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  // const [task, setTask] = useState("");
  // const [list, setList] = useState([]);

  // const addTask = () => {
  //   if (task.trim().length > 0) {
  //     setList([...list, { id: Math.random().toString(), value: task }]);
  //     setTask("");
  //   }
  // };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/planetas2.jpeg")}
        style={styles.imageBackground}
      >
        <View style={{ alignItems: "center" }}>
          <View style={styles.containerinputs}>
            <Text style={styles.tituloPrincipal}>Cadastro</Text>
            <Text style={styles.tituloSecundario}>Dados do Planeta:</Text>

            <View style={styles.icondisplay}>
              <Ionicons
                margin={3}
                marginTop={6}
                name="planet"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite o nome do planeta"
              />
            </View>
            <View style={styles.icondisplay}>
              <MaterialIcons
                marginTop={4}
                name="date-range"
                size={24}
                margin={3}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite a data de conquista"
              />
            </View>

            <View style={styles.icondisplay}>
              <MaterialIcons
                marginTop={6}
                name="color-lens"
                size={24}
                color="black"
                margin={3}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite a cor primária do planeta"
              />
            </View>

            <View style={styles.icondisplay}>
              <MaterialIcons
                marginTop={6}
                name="invert-colors-on"
                size={24}
                margin={3}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite a cor secundária do planeta"
              />
            </View>
            <View style={styles.icondisplay}>
              <FontAwesome6
                name="people-roof"
                marginTop={6}
                size={20}
                margin={3}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite a população do planeta"
              />
            </View>
            <View style={styles.icondisplay}>
              <Icon
                marginTop={6}
                name="tree"
                size={20}
                color="#000"
                margin={6}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite os recursos naturais do planeta"
              />
            </View>
            <View style={styles.icondisplay}>
              <Icon
                marginTop={6}
                name="users"
                size={20}
                color="#000"
                margin={4}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite o número de assentamentos humanos"
              />
            </View>
            <Text style={styles.tituloSecundario}>Localização:</Text>
            <View style={styles.icondisplay}>
              <FontAwesome6
                name="galactic-republic"
                marginTop={6}
                size={20}
                margin={5}
                color="black"
              />
              <TextInput style={styles.inputs} placeholder="Digite a galáxia" />
            </View>
            <View style={styles.icondisplay}>
              <Feather
                margin={5}
                name="sun"
                marginTop={6}
                size={20}
                color="black"
              />
              <TextInput style={styles.inputs} placeholder="Digite o sistema" />
            </View>
            <View style={styles.icondisplay}>
              <FontAwesome
                marginTop={6}
                name="space-shuttle"
                size={19}
                margin={4}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite as coordenadas espaciais"
              />
            </View>
            <Text style={styles.tituloSecundario}>Comunicação:</Text>
            <View style={styles.icondisplay}>
              <Feather
                margin={5}
                marginTop={6}
                name="radio"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite a frequência de transmissão"
              />
            </View>
            <View style={styles.icondisplay}>
              <Icon
                name="phone"
                marginTop={6}
                size={24}
                color="#000"
                margin={6}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite a codificação de comunicação"
              />
            </View>
            <Text style={styles.tituloSecundario}>Governante do Planeta:</Text>
            <View style={styles.icondisplay}>
              <Icon
                name="user"
                marginTop={4}
                size={24}
                color="#000"
                margin={7}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite o nome do governante"
              />
            </View>
            <View style={styles.icondisplay}>
              <MaterialCommunityIcons
                name="medal"
                marginTop={6}
                size={24}
                margin={4}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite o título/cargo do governante"
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
