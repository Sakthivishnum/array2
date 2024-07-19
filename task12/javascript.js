//filter

let message =['sakthi','vishnu','surya','shahul'];
let m1=message.filter(message =>message.length < 6);
console.log(m1);


//mapping

let num1=[1,2,3,4,5,6];
let number1=num1.map((x)=>x*2);
console.log(number1);

//Array maximum and minimum
let array = [28, 45, 69, 20, 15, 7, 98]; 
let min = array[0], max = array[0]; 
for (let i = 1; i < array.length; i++) { 
   if (array[i] > max) 
      max = array[i]; 
   
   if (array[i] < min) 
      min = array[i]; 
 } 
 console.log(max);
 console.log(min);
 


 //creating a new arr with length

 const length = 5; 
 const value = 5;
 const filledArray = new Array(length).fill(value);
 console.log(filledArray); 
 