import { Alert, Keyboard, StyleSheet, Text, View } from "react-native"
import Input from "./Input"
import { useState } from "react"
import Button from "../UI/Button";
import { Directions } from "react-native-gesture-handler";
function ExpenseForm ({submitButtonLable,onCancel,onSubmit,defaultValues}){

   const[inputValues,setInputValue]=useState({
    amount:defaultValues ? defaultValues.amount.toString():"",
	date:defaultValues?defaultValues.date.toISOString().slice(0,10):'',
	description:defaultValues?defaultValues.description:''
   });

	function inputChangedHandler(inputIdentifier,enteredValue){

		setInputValue((curInputValues)=>{
			return{
				...curInputValues,
				[inputIdentifier]:enteredValue
			}
		});
	}


	const confirmHandler=()=>{
    const expenseData ={
		amount: +inputValues.amount,
		date:new Date(inputValues.date),
		description: inputValues.description

	};

	const amovntIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsvalid = expenseData.date.toString()!== 'Invalid Date';
	const descriptionIsValid = expenseData.description.trim().length > 0;

	if (!amovntIsValid || !dateIsvalid || !descriptionIsValid){
		Alert.alert('Invelid input','Please Enter the Write value')
		return;
	}
	onSubmit(expenseData);
	}
return(<View style={style.form}>

	<Text style={style.tittle}>Your Expense</Text>
	<View style={style.inputsRow}>

	
	<Input
	style={style.rowInput}
  label="Amount"
  textInputConfig={{
	 placeholderTextColor: "#c2bfbfff",
	placeholder:'Amount',
    keyboardType: 'decimal-pad',  
    onChangeText: inputChangedHandler.bind(this,'amount'),
	value:inputValues.amount,
  }}
/>



	<Input label='Date'
	style={style.rowInput}
	textInputConfig={{
		 placeholderTextColor: "#c2bfbfff",
		placeholder:'yyyy-mm-dd',
		maxLength:10,
	  onChangeText: inputChangedHandler.bind(this,'date'),
	value:inputValues.date,
	}}
	/>
</View>
<Input 
  label="Description"
  textInputConfig={{
	placeholder:'Enter the text.....',
	 placeholderTextColor: "#c2bfbfff", 
    multiline: true,
    numberOfLines: 14,  
    autoCorrect: false,
    autoCapitalize: 'none',
	  onChangeText: inputChangedHandler.bind(this,'description'),
	value:inputValues.description,
  }}
/>
<View style={style.buttonContainer}>
        <Button mode="flat" onPress={onCancel}>Cancel</Button>
        <Button onPress={confirmHandler}>{submitButtonLable}</Button>
      </View>
</View>)
}
export default ExpenseForm
const style=StyleSheet.create({
	form:{
marginTop:20
	},
	tittle:{
		fontSize:18,
		fontWeight:'bold',
		color:'#fffdfdff'
	},
	inputsRow:{
		flexDirection:"row",
		justifyContent:'space-between'
	},
	rowInput:{
		flex:1,
		marginLeft:4,
		

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
})
