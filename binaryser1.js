
const arr = [11,10,2,4,3,12]



//ALGORITHM

low = 0;
up = arr.length-1;
isPresent  = false;
 searchKey = 25

//1) sort the array
arr.sort((a,b)=>a-b)
//6) reapeat the loop stil low =up
//2) find the mid mid= low+up/2
while(low<=up){
       mid = Math.floor((up+low)/2)
//3) mid==searchitem -found
      if(arr[mid] == searchKey ) {
        isPresent =true
        break
      }
    
//4)mid>searchitem 
        else if(arr[mid]>searchKey){
            up = mid-1
        }
              //up = mid-1
//5)mid<searchitem
else{
    low = mid+1
}

}
             //low = mid+1
//repeat still low = up 

console.log(isPresent?`${searchKey} found`:`${searchKey}not found`)




 