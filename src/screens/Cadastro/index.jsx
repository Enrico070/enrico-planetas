import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useState } from "react";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [recursos, setRecursos] = useState("");
  const [assentamestos, setAssentamentos] = useState("");
  const [galaxia, setGalaxia] = useState("");
  const [sistema, setSistema] = useState("");
  const [coordenadas, setCoordenadas] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [codificacao, setCodificacao] = useState("");
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [list, setList] = useState([]);

  const addPlanet = () => {
    if (planet.trim().length > 0) {
      setList([...list, { id: Math.random().toString(), value: planet }]);
      setPlanet("");
    }
  };
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
                onChangeText={setPlanet}
                value={planet}
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
                placeholder="Data da conquista (dd/mm/yyyy)"
                onChangeText={setDate}
                value={date}
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
                onChangeText={setColor1}
                value={color1}
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
                onChangeText={setColor2}
                value={color2}
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
                onChangeText={setPopulacao}
                value={populacao}
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
                onChangeText={setRecursos}
                value={recursos}
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
                onChangeText={setAssentamentos}
                value={assentamestos}
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
              <TextInput
                style={styles.inputs}
                placeholder="Digite a galáxia"
                onChangeText={setGalaxia}
                value={galaxia}
              />
            </View>
            <View style={styles.icondisplay}>
              <Feather
                margin={5}
                name="sun"
                marginTop={6}
                size={20}
                color="black"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Digite o sistema"
                onChangeText={setSistema}
                value={sistema}
              />
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
                placeholder="Coordenadas espaciais (baseado no centro do universo)"
                onChangeText={setCoordenadas}
                value={coordenadas}
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
                onChangeText={setFrequencia}
                value={frequencia}
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
                onChangeText={setCodificacao}
                value={codificacao}
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
                onChangeText={setName}
                value={name}
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
                onChangeText={setCargo}
                value={cargo}
              />
            </View>
            <View style={styles.buttondisplay}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: "white" }}>Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={{ color: "white" }}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
