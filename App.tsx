import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';

import ManageExpenses from './screen/ManageExpenses'; 
import RecentExpenses from './screen/RecentExpanses';
import AllExpenses from './screen/ALLExpense';

import GlobalStyles from './constanta/style';
import IconButton from './component/UI/IconButton'
import ExpensesContextProvider from './Store/expenses-contex'
const Stack = createStackNavigator();   
const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.primary100,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add-outline"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('ManageExpenses');
              console.log("Add pressed!");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Recent"
        component={RecentExpenses}
        options={{

          title: 'Recent Expenses',
          tabBarLabel:'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel:'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
    < ExpensesContextProvider>
    
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              presentation: 'modal',   
               animation: 'slide_from_bottom',    
    animationTypeForReplace: 'push',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
