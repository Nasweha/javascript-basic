//wrte a program to print the numbers whose sum is 6 


const arr = [2,3,4,5]   //(2 4)
  sum=6
    isPresent =false
for(i=0;i<=arr.length-1;i++){
    for(j=i+1;j<=arr.length-1;j++){
        if(arr[i]+arr[j]==sum){
            isPresent=true
           console.log(`(${arr[i]},${arr[j]})`) 
        }
    }
}
!isPresent && console.log("not such pair")


