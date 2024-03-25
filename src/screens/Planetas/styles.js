import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },textPrincipal: {
        fontSize: 30,
        textAlign: "center",
        margin: 0,
        color: "#fff",
        marginTop: 100,
      },planetaItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      planetaDetailButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        marginRight: 10,
      },
      planetaActions: {
        flexDirection: "row",
        gap: 10,
      },
      planetaName: {
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
      },
      editButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#4CAF50",
        marginRight: 5,
        minWidth: 70,
        alignItems: "center",
      },
      detailsButton: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#ADD8E6",
        minWidth: 70,
        alignItems: "center",
      },
})
export default styles;