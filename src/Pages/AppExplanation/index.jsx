import React from "react";
import { View, ScrollView, Text } from "react-native-gesture-handler";

import DefaultButton from "../../Components/Common/DefaultButton";

export default function AppExplanation(){

  function handleSetShowHome(){
    console.log("Botão Clicando para Home");
  }
  return (
    <View style={StyleSheet.container}>
      <ScrollView>
        <View style={{ alignItems: "center"}}>
          <Text style={styles.title}>
            Antes, Deixar {"\n"} eu te explicar
          </Text>
          <Text style={styles.descriptionCta}>
            Pronto(a) para subir de nível na vida ?
          </Text>
          <Text style={styles.description}>
            Na próxima tela você vai poder escolher {"\n"} seu 4 hábitos de forma individual.
          </Text>
          <DefaultButton 
            buttonText={"Continuar"}
            handlePress={handleSetShowHome}
            width={250}
            height={50}
          />

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21,098)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 40,
  },
  descriptionCta: {
    color: "#fff",
    fontWeight: "bold",
    fonSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
});