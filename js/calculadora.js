//variable global
var operador = "";

function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
		document.calculadora.resultado.value=eval(valor1+operador+valor2);
	
}
function operadores(ope){
	operador=ope;

}
function numeros(num){
	if(operador == ""){ //escribir el operador 1
		var valorInicial = document.calculadora.operando1.value;
		if (valorInicial == "0"){	//elimino cero
		
			document.calculadora.operando1.value = "";
		}
		//concatena los valores de num con los del operando1
		document.calculadora.operando1.value =
		document.calculadora.operando1.value + num;

	} else { //escribo en el operando2
		var valorInicial = document.calculadora.operando2.value;
		if (valorInicial == "0"){	//elimino cero
		
			document.calculadora.operando2.value = "";
		}
		//concatena los valores de num con los del operando2
		document.calculadora.operando2.value =
		document.calculadora.operando2.value + num;

	}
}