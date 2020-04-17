import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NewDeckView from "./views/NewDeckView";
import DeckListView from "./views/DeckListView";
import DeckView from "./views/DeckView";
import NewQuestionView from "./views/NewQuestionView";
import QuizView from "./views/QuizView";
import { reloadDecks } from "./helpers/api";
import {
  setLocalNotification,
  clearLocalNotification,
} from "./helpers/reminder";

function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DeckList"
        component={DeckListView}
        options={{ tabBarLabel: "Deck List" }}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeckView}
        options={{ tabBarLabel: "New Deck", title: "New Deck" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    // clearLocalNotification();
    setLocalNotification();
  }, []);
  //reloadDecks();

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Deck List" }}
        />
        <Stack.Screen
          name="DeckView"
          component={DeckView}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="NewQuestion"
          component={NewQuestionView}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="QuizView"
          component={QuizView}
          options={({ route }) => ({ title: route.params.title + " Quiz" })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
