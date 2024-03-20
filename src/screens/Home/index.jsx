import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
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
    source={require('../../../assets/planetas-fundo.avif')} 
    style={styles.imageBackground}  >
      <View style={styles.containerinputs}>
        <Text style={styles.tituloPrincipal}>Cadastro</Text>
        <Text style={styles.tituloSecundario}>Dados do Planeta:</Text>

        <View style={styles.icondisplay}>
        <Icon name="users" size={20} color="#000" />
        <TextInput style={styles.inputs} placeholder="Digite o nome do planeta" />
       </View>
        <TextInput style={styles.inputs}placeholder="Digite a data de conquista" />
        <TextInput style={styles.inputs}placeholder="Digite a cor primária do planeta" />
        <TextInput style={styles.inputs}placeholder="Digite a cor secundária" />
        <TextInput style={styles.inputs}placeholder="Digite a população do planeta" />
        <TextInput style={styles.inputs}placeholder="Digite os recursos naturais do planeta" />
        <TextInput style={styles.inputs}placeholder="Digite o número de assentamentos humanos" />
        <Text style={styles.tituloSecundario}>Localização:</Text>
        <TextInput style={styles.inputs}placeholder="Digite a galáxia" />
        <TextInput style={styles.inputs}placeholder="Digite o sistema solar" />
        <TextInput style={styles.inputs}placeholder="Digite as coordenadas espaciais" />
        <Text style={styles.tituloSecundario}>Comunicação:</Text>
        <TextInput style={styles.inputs}placeholder="Digite a frequência de transmissão" />
        <TextInput style={styles.inputs}placeholder="Digite a codificação de comunicação" />
        <Text style={styles.tituloSecundario}>Governante do Planeta:</Text>
        <TextInput style={styles.inputs}placeholder="Digite o nome do governante" />
        <TextInput style={styles.inputs}placeholder="Digite o cargo/título do governante" />
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white'}}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
