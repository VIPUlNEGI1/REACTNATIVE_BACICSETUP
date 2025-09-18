import { StyleSheet, View, Text } from "react-native"; 
import GlobalStyles from "../../constanta/style";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.list}> 
      <Text style={styles.period}>{periodName}</Text>  
      <Text style={styles.amount}>${expensesSum.toFixed(2)}</Text>  
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({ 
  list: {
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  amount: { 
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});