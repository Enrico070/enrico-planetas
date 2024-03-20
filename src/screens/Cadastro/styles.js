import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerinputs: {
    backgroundColor: "white",
    opacity: 0.7,
    marginTop: 56,
    margin: "auto",
    borderWidth: 1,
    width: 360,
    height: 797,
    borderColor: "#20232a",
    borderRadius: 20,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  tituloPrincipal: {
    fontSize: 30,
    textAlign: "center",
    margin: 0,
  },

  tituloSecundario: {
    margin: 3,
    padding: 4,
    fontSize: 17,
  },

  imageBackground: {
    flex: 1,
  },

  button: {
    backgroundColor: "#0000FF",
    borderRadius: 10,
    margin: 15,
    width: 72,
    height: 34,
    alignItems: "center",
    padding: 5,
  },

  inputs: {
    padding: 2,
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
  },

  icondisplay: {
    flexDirection: "row",
    margin: 2,
  },
  buttondisplay: {
    display: "flex",
    flexDirection: "row",
    margin: 2,
  },
});

export default styles;
