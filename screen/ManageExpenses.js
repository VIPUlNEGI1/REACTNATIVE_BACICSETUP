import { Alert } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../component/UI/IconButton";
import GlobalStyles from "../constanta/style";
import ExpenseForm from "../component/ManageExpance/ExpanseForm";
import { ExpensesContext } from "../Store/expenses-contex";

function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",  
    });

    const Selectedexpense = expensesCtx.expenses.find(
      (expenses) => expenses.id === editedExpenseId
    )

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
            expensesCtx.deleteExpense(editedExpenseId);
            navigation.goBack();
          },
        },
      ]
    );
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) { 
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  const selectedExpense = isEditing
    ? expensesCtx.expenses.find((exp) => exp.id === editedExpenseId)
    : null;

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLable={isEditing ? 'Update':'Add'}
      defaultValues={selectedExpense}
      />

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
