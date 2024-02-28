//display given number into reverse order i/p = 123 o/p = 321

// num = 123
//  str =''
//  while(num>0){
//     id = num%10;
//     str = str+id;
//     num = Math.floor(num/10)

//  }
//  console.log(str);

 //check whethe the given number is palindrom or not 

  num = 123
  str = ''
  temp=num
  while(num>0){
    id = num%10;//1
    str  = str +id ;
    num  = Math.floor(num/10);
  }
  if(temp==str){
    console.log('palindrom')
  }
  else{
    console.log('not palindrom')
  }


  //program to print factorial of a given number 

   num = 5;
   i =1;
   fact =1
   while(i<=num){
    fact = fact*i;
    i++

}  
console.log(fact);

//program to find  to check whether the given 3 digit  number is amstrong or not 
//eg :153 = 1**3+5**3+3**3
  num = 153 ;
     sum = 0
     temp=num
  while(num>0){
      id = num%10;
      sum =sum+id**3
      num  = Math.floor(num/10)
  }
  console.log(temp==sum?'amstrong':'not amstrong')



     //write a program to dispaly the numbers whose exponential in the range of 8 - 36. here the user can input the exponential value (power)
     //power =3
     //1= 1 2=4 3=9 4 =16 5=25 6=36 // dispaly /o/p = 3 4 5 6
     //1 =1 2 =8  3 =27 4 =64 5 =125 display /output 2 3 

      power = 2;
      num = 1;
      low =8,
        up =36
      while(i<=36){
          if(low<=num**power && num**power<=up){
            console.log(num)
          }
          num++      
      }



     
     

