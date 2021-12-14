//Task1
let number1 = Number(prompt("Number1 : "));
let number2 = Number(prompt("Number2 : "));
if (number1==number2) {
    alert(number1+number2);

}else{
    alert(number1*3);
}



//Task2 
let a="*";
let i = 0;
while (i<5) {
    i++;
    console.log(a);
    a+="*"
    
}

//Task3
number1 = Number(prompt("Number1 : "));
if (number1>0) {
    alert("positive");
}else{
    alert("negative")
}
number2 = Number(prompt("Number2 : "));
if (number2>0) {
    alert("positive");
}else{
    alert("negative")
}

//Task4
number1 = prompt("Number : ");
let stri=number1.split('').reverse().join('');
alert(stri);


//Task5 
number1 = Number(prompt("A : "));
number2 = Number(prompt("B : "));

console.log(number1*number2);

//Task6
let sum=0;
for (let index = 0; index < 1000; index++) {
    if (index%3==0 || index%5==0) {
        sum+=index;
    }
}
alert(sum);






