// for(i=1;i<=4;i++){ 
//     str = ""
//   for(space=4;space>i;space--){ 
//     str = str+" "
//   }
//    for(j =1 ;j<=i; j++){
//     str = str+" *"
//    }


//   console.log(str)

//   }
 

 //print this pattern  home work
  
  //                       *
  //                      * *
  //                     * * *
  //                    * * * *
  //                   * * * * *
  //                    * * * *
    //                   * * * 
    //                    * *
    //                     *  

    for(i=1;i<=5;i++){ 
      str = ""
    for(space=5;space>=i;space--){ 
      str = str+" "
    }
     for(j =1 ;j<=i; j++){
      str = str+" *"
     }
  
  
    console.log(str)
  
    }

    for(i=1;i<=4;i++){ 
      str = " "
    for(space=0;space<i;space++){ 
      str = str+" "
    }
     for(j =4 ;j>=i; j--){
      str = str+" *"
     }
  
    console.log(str)
  
     }

  //print hollow triangle
  
  



  //         *
//         *   *
//       *       *
  //   * * * * * * *

//   for(row =1;row<=4;row++){
//              str = "";
//    for( col =1;col<=7; col++){
//            if(col+row==5 || col-row ==3 || row ==4){
//             str = str+"*"
//            }
//            else{
//             str = str+" "
//            }
//    }          
// console.log(str)
//   }


//* * * * *
//*       *
//*       *
//*       *
//*       *
//*       *
//*       *
//* * * * *  

for(row =1;row<=8;row++){
              str = "";
    for( col =1;col<=5; col++){
   if(col==1 || row==1 || col==5 ||row ==8)
     {
    str = str+" *"
              }
               else{
                str = str+"  "
               }
   }
   console.log(str)
    }




    //1
    //0 1 
    //1 0 1
    //0 1 0 1

     
for(row =1;row<=4;row++){
  str = "";
for( col =1;col<=row; col++){
 if((col+row)%2==0 ){

 
  str =str+"1"
  
 }
 else{
str =str+"0"
 }

}
console.log(str)
}

// $ $ $ $ $   row==5 r0w==5 (22)(24)(33)(42 )(44)(24)

//  $     $

//     $

//  $     $

// $ $ $ $ $     
 

for(row =1;row<=5;row++){
  str = "";
for( col =1;col<=5; col++){
  if(row==1 || row == 5 || row+col==6 || col==row){
    str =str+" $"
  }


  else {

    str = str+"  "
  }
}
console.log(str)
}



