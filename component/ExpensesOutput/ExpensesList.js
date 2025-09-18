import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenceseItem";  

const renderExpenseItem = ({ item }) => {
  return (
   <View>


    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}

      />
      </View>
    
  );
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
