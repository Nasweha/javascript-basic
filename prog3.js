//write a program to display  FIZZ when the number is divisible by 3 and BUZZ if the number is divisible by 5 and FIZZBUZZ when the number is divisible by 15.

x=15;
if(x%15 == 0){
    console.log(`FIZZBUZZ`)
}
else if(x%5 == 0){
    console.log('BUZZ')
}
else if(x%3 == 0){
    console.log('fizZ')
}
else{
    console.log('not divisible by the 3 numbers')
}
