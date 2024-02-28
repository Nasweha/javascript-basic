//progrm to print duplicate element from the given array

//   0  1  2  3  4  5   6  7  8
a = [10,20,30,20,30,40,50,60,10]
   
for (i=0;i<=a.length-1;i++){// index checking 

     for(j =i+1;j<=a.length;j++){
        if(a[i]==a[j]){  //value checking
            console.log(a[i])
        }
     }
      
       
    // console.log(num);   
    
}


console.log("-------------------------- duplicate present or not----------------------")


b = [10,20,30,20,30,40,50,60,10]
   isPresent = false 
for (i=0;i<=b.length-1;i++){// index checking 

     for(j =i+1;j<=b.length;j++){
        if(a[i]==a[j]){  //value checking
            isPresent =true
            console.log(a[i])
        }
     }
      
       
    // console.log(num);   
    
}
//truthy operator :used only in if condition

!isPresent &&  console.log('not present')


//  