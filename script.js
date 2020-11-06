let lblError = document.getElementById('lblError');
let txtUnits = document.getElementById('txtUnits');
let lblResult = document.getElementById('lblResult');

function clearTextBox(){
	txtUnits.value = 0;
	console.log('Value Cleared');
}

function calculateBill(){
	let rate = 0;
	let total = 0;
	let noOfUnits;
	let subTotal = 0;

	if (txtUnits.value != null && txtUnits.value>0) {
		noOfUnits = txtUnits.value; //null


		if(noOfUnits<=60)
		{
			total += noOfUnits*7.85;
		}
		else if(noOfUnits<=90)
		{
			total += 60*7.85+(noOfUnits-60)*10;
		}
		else if(noOfUnits<=120)
		{
			total += 60*7.85+30*10+(noOfUnits-90)*27.75;
		}
		else if(noOfUnits<=180)
		{
			total += 60*7.85+30*10+30*27.75+(noOfUnits-120)*32+480;
		}else{
			lblError.innerHTML = "The value you entered is not valid";
		}


		lblResult.innerHTML = total;



	}


	/*







	*/


}

