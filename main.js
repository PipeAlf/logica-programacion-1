const prompt = require ("prompt-sync")(); 

let num1= Number(prompt("Ingrese el primer número: "));
let num2= Number(prompt("Ingrese el segundo número: "));
let num3= Number(prompt("Ingrese el tercer número: "));

let numMa=0;
let numM=0;
let numMe=0;


if (num1>num2 && num1>num3){
    numMa=num1;
}else if(num2>num1 && num2>num3){
    numMa=num2;
}else if(num3>num1 && num3>num2){
    numMa=num3;
}

if (num1<num2 && num1<num3){
    numMe=num1;
}else if(num2<num1 && num2<num3){
    numMe=num2;
}else if(num3<num1 && num3<num2){
    numMe=num3;
}

if((num1>num2 && num1<num3) || (num1<num2 && num1>num3)){
    numM=num1;
}else if((num2>num1 && num2<num3) || (num2<num1 && num2>num3)){
    numM=num2;
}else if((num3>num2 && num3<num1) || (num3<num2 && num3>num1)){
    numM=num3;
}

if((num1==num2) && num1<num3){
    numM=num1;
    numMe=numM;
    numMa=num3;
}else if ((num1==num2) && num1>num3){
    numMa=num1;
    numM=numMa;
    numMe=num3;
}else if((num2==num3) && num2<num1){
    numM=num2;
    numMe=numM;
    numMa=num1;
}else if((num2==num3) && num2>num1){
    numMa=num1;
    numM=numMa;
    numMe=num1;
}else if((num1==num3) && num1<num2){
    numM=num1;
    numMe=numM;
    numMa=num2;
}else if((num1==num3) && num1>num2){
    numMa=num1;
    numM=numMa;
    numMe=num2;
}else{
    console.log("Todos los números son iguales.")
}

if(num1!==num2 && num1!==num3){
    console.log("El orden ascendente de los números es: ", numMe, ",", numM, ",", numMa);
    console.log("El orden descendente de los números es: ", numMa, ",", numM, ",", numMe);
}
