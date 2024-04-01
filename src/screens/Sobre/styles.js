import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",

    justifyContent: "center",
  },
  navButton: {
    width: 290,
    opacity: 0.9,
    marginTop: 20,
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    marginLeft: 57,
    borderRadius: 20,
    borderColor: "#000",

    backgroundColor: "#0f85c9",
    color: "black",
  },
  textCategoriasCard: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  imgPrincipal: {
    width: 380,
    height: 210,
    marginTop: 55,
    borderRadius: 10,
    margin: "auto",
    marginLeft: 15,
  },
  textPrincipal: {
    fontSize: 30,
    marginBottom: 70,
    marginTop: 15,
    color: "white",
    textAlign: "center",
  },
  imageBackground: {
    flex: 1,
    margin: 0,
  },
  text: {
    fontSize: 15,
    lineHeight: 30,
    justifyContent: "center",
    marginTop: -70,
    padding: 23,
    textAlign: "center",
    color: "white",
  },
  margin: {
    alignItems: "center",
  },

  scroll: {
    margin: 0,
  },
});
export default styles;
