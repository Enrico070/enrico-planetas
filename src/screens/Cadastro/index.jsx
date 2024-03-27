import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { useState, useEffect } from "react";

import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import planetaRepositorio from "../../models/PlanetaRepositorio";
import Planeta from "../../models/Planeta";

export default function Cadastro({ route }) {
  const navigation = useNavigation();

  let { planeta, edit } = route.params;

  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#00ff00');
  const [populacao, setPopulacao] = useState("");
  const [recursos, setRecursos] = useState("");
  const [assentamentos, setAssentamentos] = useState("");
  const [galaxia, setGalaxia] = useState("");
  const [sistema, setSistema] = useState("");
  const [coordenadas, setCoordenadas] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [codificacao, setCodificacao] = useState("");
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [isUpdate, setisUpdate] = useState(edit);


  const colorMap = {
    vermelho: '#ff0000',
    verde: '#00ff00',
    azul: '#0000ff',
    amarelo: '#ffff00',
    ciano: '#00ffff',
    magenta: '#ff00ff',
    branco: '#ffffff',
    preto: '#000000',
    laranja: '#ffa500',
    rosa: '#ffc0cb',
    roxo: '#800080',
    marrom: '#a52a2a',
    coral: '#ff7f50',
    ouro: '#ffd700',
    lima: '#00ff00',
    prata: '#c0c0c0',
    oliva: '#808000',
    turquesa: '#40e0d0',
    salmao: '#fa8072',
    
  };

  const handleColorChange = (color, setColor) => {
    const hexColor = colorMap[color.toLowerCase()];
    if (hexColor) {
      setColor(hexColor);
    } else {
      setColor(color);
    }
  };

  const renderGradient = () => {
    return (
      <LinearGradient
        colors={[color1, color2]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    );
  };



  useEffect(() => {
    if (edit) {
      setPlanet(planeta.planet);
      setDate(planeta.date);
      setColor1(planeta.color1);
      setColor2(planeta.color2);
      setPopulacao(planeta.populacao);
      setRecursos(planeta.recursos);
      setAssentamentos(planeta.assentamentos);
      setGalaxia(planeta.galaxia);
      setSistema(planeta.sistema);
      setCoordenadas(planeta.coordenadas);
      setFrequencia(planeta.frequencia);
      setCodificacao(planeta.codificacao);
      setName(planeta.name);
      setCargo(planeta.cargo);
      setisUpdate(true);
    } else {
      clearInputs();
    }
  }, [planeta, edit]);

  const handlePlanetaAction = () => {
    if (isUpdate) {
      const newPlaneta = new Planeta(
        planeta.id,
        planet,
        date,
        color1,
        color2,
        populacao,
        recursos,
        assentamentos,
        galaxia,
        sistema,
        coordenadas,
        frequencia,
        codificacao,
        name,
        cargo || 0
      );
      planetaRepositorio.update(newPlaneta);
      clearInputs();
    } else {
      planetaRepositorio.update(
        planeta.planet,
        planeta.date,
        planeta.color1,
        planeta.color2,
        planeta.populacao,
        planeta.recursos,
        planeta.assentamentos,
        planeta.galaxia,
        planeta.sistema,
        planeta.coordenadas,
        planeta.frequencia,
        planeta.codificacao,
        planeta.name,
        planeta.cargo || 0
      );
    }
    // navigation.navigate("Planeta")
  };

  const clearInputs = () => {
    setisUpdate(false);
    edit = false;
    setPlanet("");
    setDate("");
    setColor1("");
    setColor2("");
    setPopulacao("");
    setRecursos("");
    setAssentamentos("");
    setGalaxia("");
    setSistema("");
    setCoordenadas("");
    setFrequencia("");
    setCodificacao("");
    setName("");
    setCargo("");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/planetas2.jpeg")}
        style={styles.imageBackground}
      >
        {renderGradient()}
        <View style={{ alignItems: "center" }}>
          <View style={styles.containerinputs}>
            <Text style={styles.tituloPrincipal}>
              {isUpdate ? "Edição" : "Cadastro"}
            </Text>
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
                onChangeText={(text) => handleColorChange(text, setColor1)}
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
                onChangeText={(text) => handleColorChange(text, setColor2)}
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
                value={assentamentos}
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
              <TouchableOpacity
                style={styles.button}
                onPress={handlePlanetaAction}
              >
                <Text style={{ color: "white" }}>
                  {isUpdate ? "Salvar" : "Adicionar"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={{ color: "white" }}>Voltar</Text>
              </TouchableOpacity>

              {isUpdate ? (
                <TouchableOpacity style={styles.button} onPress={clearInputs}>
                  <Text style={{ color: "white" }}>Cancelar</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Planetas")}
                >
                  <Text style={{ color: "white" }}>Ver</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
