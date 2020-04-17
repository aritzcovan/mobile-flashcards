import { Platform, StyleSheet } from "react-native";
import { white, purple, gray } from "./colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: gray,
    borderWidth: 1,
    marginBottom: 20,
    width: 300,
    marginTop: 50,
  },
  deck: {
    width: 250,
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: white,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 20,
    marginTop: 20,
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  deckSubTitle: {
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 5,
  },

  iosButton: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 25,
  }
});
