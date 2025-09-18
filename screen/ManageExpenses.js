import { Alert, TextInput } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../component/UI/IconButton";
import GlobalStyles from "../constanta/style";
import Button from '../component/UI/Button'
import { ExpensesContext } from "../Store/expenses-contex";
function ManageExpenses({ route, navigation }) {

  const expensesCtx = useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Add Expense" : "Edit Expense",
    });
  }, [navigation, isEditing]);


 
function deleteExpenseHandler() {
  
  Alert.alert(
    "Delete Expense",
    "Are you sure you want to delete this expense?",
    [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          console.log("Expense deleted:", editedExpenseId);
          navigation.goBack(); 
          expensesCtx.deleteExpense(editedExpenseId)
        },
      },
    ]
  );
}

 
function cancelHandler() {
  navigation.goBack();
}
 
function confirmHandler() {
  if (isEditing) {
    expensesCtx.updateExpense(
      editedExpenseId,
      {
        description: 'Test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      }
    );
  } else {
    expensesCtx.addExpense({
      description: 'Test',
      amount: 19.99,
      date: new Date('2022-05-19'),
    });
  }
  navigation.goBack();
}


  return (
    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>


    {isEditing && (
  <View style={styles.deleteContainer}>
    <IconButton
      icon="trash-outline"
      color={GlobalStyles.colors.error500}
      size={36}
      onPress={deleteExpenseHandler}
    />
    <Text style={styles.deleteText}>Delete Expense</Text>
  </View>
)}

    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24,
  },

  buttton: {
    flexDirection: 'row'
    , justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 32,
    paddingTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  deleteText: {
    color: GlobalStyles.colors.error500,
    fontSize: 16,
    marginTop: 8,
  },
});
