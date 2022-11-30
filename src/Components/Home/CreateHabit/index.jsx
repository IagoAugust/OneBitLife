import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CreateHabit({habitArea, borderColor}){
  
  function handleCreate(){
    console.log(`Botão da área clicado: ${habitArea}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {borderColor: borderColor}]}
      onPress={handleCreate}
    >
      <Text style={styles.habitTitle}>
        Adicionar Meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: "dotted",
    borderColor: "#fff",
    bordeRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  habitTitle:{
    color: "#fff",
    fontSize: 16,
    fontweight: "bold",
  },

});