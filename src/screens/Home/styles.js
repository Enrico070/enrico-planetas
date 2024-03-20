import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,



  }, containerinputs: {
    backgroundColor: "white",
    opacity: 0.7,
    width: 520,
    height: 620,
    margin: 'auto',
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 20,
    borderColor: '#000',
    justifyContent: 'center',
  }, tituloPrincipal: {
    fontSize: 30,
    textAlign: "center",
    margin: 0,
  },
  tituloSecundario: {
    margin: 3,
    padding: 5,
    fontSize: 17,

  }, imageBackground: {
    flex: 1,
  }, button: {
    backgroundColor: '#0000FF',
    borderRadius: 3,
    margin: 'auto',
    width: 65,
    height: 34,
    alignItems: 'center',
    padding: 5,
  }, inputs: {
    padding: 4,
    width: 350,
  }, icondisplay: {
    display: 'flex',
  }
});

export default styles;
