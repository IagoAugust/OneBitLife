// import React from 'react';
import React, { useEffect, useState} from "react";

import { View, Text, ScrollView ,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LifeStatus from "../../Components/Common/LifeStatus";
import StatusBar from '../../Components/Home/StatusBar';
import CreateHabit from "../../Components/Home/CreateHabit";
import EditHabit from "../../Components/Home/EditHabit";

export default function Home(){
  const navigation = useNavigation();
  const [mindHabit, setMindHabit] = useState();
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();

  function handleNavExplanation(){
    navigation.navigate("AppExplanation");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: "center"}}> 
          <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>  
          <LifeStatus />
          <StatusBar />

          {mindHabit ? (
            <EditHabit
              habit={mindHabit?.habitName}
              frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
              habitArea={mindHabit?.HabitArea}
              checkColor="#90B7F3"
            /> 
          ) : (
              <CreateHabit habitArea="Mente" borderColor={"#90B7F3"} />     
          )}

          {moneyHabit ? (
            <EditHabit
              habit={moneyHabit?.habitName}
              frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
              habitArea={moneyHabit?.HabitArea}
              checkColor="#85BB65"
            /> 
          ) : (
              <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />    
          )}

          {moneyHabit ? (
            <EditHabit
              habit={bodyHabit?.habitName}
              frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
              habitArea={bodyHabit?.HabitArea}
              checkColor="#FF0044"
            /> 
          ) : (
              <CreateHabit habitArea="Corpo" borderColor="#FF0044" />   
          )}

          {moneyHabit ? (
            <EditHabit
              habit={funHabit?.habitName}
              frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
              habitArea={funHabit?.HabitArea}
              checkColor="#FE7E23"
            /> 
          ) : (
              <CreateHabit habitArea="Humor" borderColor="#FE7E23" />
          )}

        </View>
        <Text style={styles.explanationText}
          onPress={() => {
             handleNavExplanation();
          }}
        >
          Ver explicação Novamente
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "rgba(21,21,21, 0.98)",
  },
  dailyChecks:{
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
  explanationText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25,
  },
})