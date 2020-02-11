function currencyCalculator(valNum) {
if (calcular.dolares.value <= 0) 
  window.alert("introduzca un monto mayor a 0");
  else{
document.getElementById("bolivar").value = (valNum*73326.50).toFixed(2);
document.getElementById("peso_colombia").value = (valNum*3456.50).toFixed(2);
document.getElementById("sol").value = (valNum*3.39).toFixed(2);
document.getElementById("peso_chile").value = (valNum*794.20).toFixed(2);
document.getElementById("peso_mexico").value = (valNum*18.70).toFixed(2);
document.getElementById("peso_argentina").value = (valNum*60.90).toFixed(2);
  }
}
