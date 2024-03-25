import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, textPrincipal: {
    fontSize: 30,
    textAlign: "center",
    margin: 0,
    color: "#fff",
    marginTop: 100,
  }, button: {
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
    backgroundColor: "#0000FF",
    borderRadius: 10,
    margin: 15,
    width: 72,
    height: 34,
    alignItems: "center",
    padding: 5,
  },
  deleteButton: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    margin: 15,
    width: 72,
    height: 34,
    alignItems: "center",
    padding: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
