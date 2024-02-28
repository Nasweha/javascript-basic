//pront number from 1 to 10

// for(i =1;i<=10;i++){
//     console.log(i)
// }
//prgm to print from 10 to 1 


// for(i=10;i>=1; i--){
//     console.log(i)
// }

//find the factorial of a number using for loop
//  num = 3
//  fact = 1
// for(i = 1; i<=num;i++){
//     fact = fact*i
// }
// console.log(fact);



// //w.r p tp create a loop which can iterate  10 times but can  display up to 5

// for(i=1;i<=10;i++){
//     console.log(i);
//     if(i>=5){
//         break;
//     }
// }


// check whether the number is prime or not 

// num = 9
// isPrime = true;
// for(i=2 ; i<=num; i++){
//   if(num%i==0){
//     isPrime=false;
//     break
//   }
// }
// console.log(isPrime?'is a prime a number' :'not a prime number')


// print the prime numbers from 1 to 50

// for(i=2;i<=50;i++){
//     count =0;
//      for(j=2; j<i;j++){
//          if(i%j==0){
//               count = count+1

           
//          }
//      }
//      if(count==0){
//         console.log(i)
//      }
    

// }



// program to find gcd and hcf of given two numbers
// gcd=0
// num1 = 12
// num2 =24
// for(i=1;i<=num1 && i<=num2;i++){
//     if(num1%i==0 && num2%i==0){
//       gcd =i
//     }

// }
// console.log(gcd);


//write a program to display all amstrong number between 8 to 500

low = 8
high = 500

for(i = 8;i<=500;i++){
  sum=0
  temp =i
  while (temp > 0) {

    let remainder = temp % 10;
    
    sum = sum + remainder **3 ;
   
    temp = parseInt(temp / 10); 
}

if (sum == i) {
    console.log(i);
}

}





 
