// -let fruits =["apple", "orange","grapes","pineapple"]

// console.log(fruits)
// for(index=0;index<=fruits.length-1;index++){
//     console.log(fruits[index])
// }

//  let  student = ["nasi","thasleena","sneha","manju","niya"]
//  for(i=0;i<=student.length-1;i++){
//     console.log(student[i])
//  }


 //for in method

 console.log('----------------------------for in------------------------');

//  for( let x in fruits){
//     console.log(x)
//     console.log(fruits[x])
//  }

//  console.log("----------------------------for of---------------------------------")
//   for(let y in fruits){
//     console.log(fruits[y])
//   }


   


  let expense = [12000,23000,40000,34000,55000,22000,10000];
  // find the lowest expense



  
  //find the total expense 
  //  let lowest = expense[0]
  // for( let num of expense ){
  //   if(num<=lowest){
  //       lowest=num

  //   }
  // }
  // console.log(lowest)


//highest expense 
// let highest  = expense[0]
// for(let n of expense ){
//     if (n>= highest){
//         highest=n
//     }
// }
// console.log(highest)

  //find the total expense 

//   let sum = 0
//   for( let num of  expense ){
//     sum=sum + num   
//   }
//   console.log(sum)

//   //program to check whether is 2 is present int he array
// let arr = [10,23,11,2,5,3]
//   searchitem =89
//   isPresent = false
//  for(let num of arr){
//     if (searchitem==num){
//         isPresent = true
//     }
//  }
//  console.log(isPresent?"present":"not present");



 // i/p =[4,5,6]
 //o/p = [11,10,9]

   arr=[4,5,6]
   sum = 0
   x=[]
  for(num of arr){
   sum = sum+num
  }

  for(i of arr){
    x.push(sum-i)
  }
  console.log(x)



