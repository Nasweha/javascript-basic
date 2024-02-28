 a = [10,25,57,34,23,2]

 // find the highest
   highest = a.reduce((num1,num2)=>num1>num2?num1:num2)
   console.log(highest);

   //lowest
   lowest = a.reduce((num1,num2)=>num1<num2?num1:num2)
   console.log(lowest);

   //sum of all given numbers in array

   sum   = a.reduce((num1,num2)=>num1+num2)
   console.log(sum);

