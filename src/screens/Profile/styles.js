import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  textPrincipal: {
    fontSize: 30,
    textAlign: "center",
    margin: 0,
    color: "#fff",
    marginTop: 100,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
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
  planeta: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  planetaDetail: {
    marginBottom: 10,
  },
  planetaActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  editButton: {
    borderRadius: 10,
    margin: 15,
    width: 72,
    height: 34,
    alignItems: "center",
    padding: 5,
    color: "#f0f0f0",
    backgroundColor: "#0000FF",
    marginRight: 5,
    minWidth: 70,
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    margin: 15,
    width: 72,
    height: 34,
    color: "#f0f0f0",
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
