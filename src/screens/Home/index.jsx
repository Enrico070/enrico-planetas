import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import styles from "./styles";
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
      <View>
        <Text>Cadastro:</Text>
        <TextInput placeholder="Digite o nome do planeta" />
        <TextInput placeholder="Digite a data de conquista" />
        <TextInput placeholder="Digite a cor primária do planeta" />
        <TextInput placeholder="Digite a cor secundária" />
        <TextInput placeholder="Digite a população do planeta" />
        <TextInput placeholder="Digite os recursos naturais do planeta" />
        <TextInput placeholder="Digite o número de assentamentos humanos" />
        <Text>Localização:</Text>
        <TextInput placeholder="Digite a galáxia" />
        <TextInput placeholder="Digite o sistema solar" />
        <TextInput placeholder="Digite as coordenadas espaciais" />
        <Text>Comunicação:</Text>
        <TextInput placeholder="Digite a frequência de transmissão" />
        <TextInput placeholder="Digite a codificação de comunicação" />
        <Text>Governante do Planeta:</Text>
        <TextInput placeholder="Digite o nome do governante" />
        <TextInput placeholder="Digite o cargo/título do governante" />
        <TouchableOpacity>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
