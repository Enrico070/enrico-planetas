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
  error: {
    color: "red",
    fontSize: 15,
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
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  display: {
    display: "none",
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
