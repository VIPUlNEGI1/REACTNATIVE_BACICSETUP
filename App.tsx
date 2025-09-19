import React from 'react';
import { View } from 'react-native';
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
        headerStyle: { 
          backgroundColor: GlobalStyles.colors.primary500,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerTintColor: "white",
        tabBarStyle: { 
          backgroundColor: GlobalStyles.colors.primary500,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: GlobalStyles.colors.primary100,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerRight: ({ tintColor }) => (
          <View >
            <IconButton
              icon="add-outline"
              size={28}
              color={tintColor}
              onPress={() => {
                navigation.navigate('ManageExpenses');
                console.log("Add pressed!");
              }}
           
            />
          </View>
        ),
      })}
    >
      <BottomTabs.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({   size, focused }) => (
            <View  >
              <Ionicons 
                name="time" 
                color={focused ? GlobalStyles.colors.accent500 : GlobalStyles.colors.primary100} 
                size={focused ? size + 2 : size} 
              />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="All"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({  size, focused }) => (
            <View  >
              <Ionicons 
                name="calendar" 
                color={focused ? GlobalStyles.colors.accent500 : GlobalStyles.colors.primary100} 
                size={focused ? size + 2 : size} 
              />
            </View>
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
