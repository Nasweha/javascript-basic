 
function sum(num1,num2){
    let sum = num1+num2
    console.log(`the sum of ${num1} and ${num2} is ${sum}`);
}
sum( 20,30)


sum(1000, 4000)


//prgrm to find cube of a given number using function

//  function cube(num1){
// //    let cube = num1*num1*num1
//   cube = num1**3
//    console.log(cube)

//  }
//  cube( 20)

 


 // prgm to find the number is odd or even

  function evenodd(num){

    return num%2==0?'even':'odd'
  }
   console.log(evenodd(25))


 // prgm to find the number is positive or negative

  function posneg(num2){
    return num2>0? "positive":num2<0?"negative":"neither positive nor negative"
  }
  console.log(posneg(-3))


  let cube =(num1) => num1**3
 console.log(cube(2)) 


 const oe = (num) => num%2==0?"even":"odd"
 console.log(oe(3))

 //call back functions



 function greet(name){
    console.log(`hai ${name}`)
        child()
    }

  function child(){
    console.log("inside the function ")
  }
  greet("peter")



  //setTimeout

  console.log("first time out")
  setTimeout(()=>{
    console.log("second time out")
  },5000)
  console.log("third timwout")
 
// nested function

  
function parent(){
  const parent = "parent"
  console.log(`varable inside the parent function is : ${parent}`);
   console.log(`varable inside the parent function is : ${childvariable}`);
   function child(){
    const childvariable ="child"
     console.log(`varable inside the parent function is : ${childvariable}`);
     console.log(`varable inside the parent function is : ${parent}`);
   }
   child()
}
parent()
