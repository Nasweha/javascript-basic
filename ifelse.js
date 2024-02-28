//  write a program to check a given person is eligible to vote
//  age>= 18

var a =10;
if(a>=18){
    console.log('eligible to vote')
}
else{
    console.log('not eligible to vote')
}


// write a program to check whether the given number is positive or negative

num  = 0;
if(num>0){
    console.log('positive')
}
else if(num==0)
{
    console.log('neither positive nor negative')
}
else{
    console.log('negative')
}

//write a program to find the largest number among given two numbers

//  num1 =90;
//  num2 = 80
//  if(num1>num2){
//     console.log(`${num1} is largest number `)
//  }
//  else if(num1==num2)
//  {
//     console.log('both numbers are equal')
//  }
//  else{
//     console.log(`${num2} is the lagest number`)
//  }



 //find the second largest number from the given 3 numbers and sort the given 3 number sort in descending order

 num1 = 100
 num2 = 200
 num3 = 300
 if (num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest number is ${num2}`)
        console.log(`descending order is  ${num1},${num2},${num3}`)
    }
   else{
    console.log(`second largest number is ${num3}`)
    console.log(`descending order is  ${num1},${num3},${num2}`)
   }
 }
 else if(num2>num1 && num2<num3){
    if(num1>num3){
        console.log(`second largest number is ${num1}`)
        console.log(`descending order is  ${num2},${num1},${num3}`)
    }
    else{
        console.log(`second largest number is ${num3}`)
        console.log(`descending order is  ${num2},${num3},${num1}`)
    }
 }
 else if(num3>num1 && num3<num2)
 { if(num1>num2){
    console.log(`second largest number is ${num1}`)
    console.log(`descending order is  ${num3},${num2},${num2}`)
 }
 else{
    console.log(`second largest number is ${num2}`)
        console.log(`descending order is  ${num3},${num2},${num1}`)
 }
    
 }
 else {
    console.log('all numbers are eqaul')
 }





