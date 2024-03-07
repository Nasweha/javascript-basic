//program to find the numbr count  from the given array
//op = {10:3,20:4,50:2,30:1,80:1,70:1}
obj={}
arr  = [10,20,50,20,30,80,10,20,70,50,20,10]  
   for( num of arr){
    // console.log(num);
    if(value in obj){
        obj[num]+=1

    }
    else{
        obj[num]=1
    }
}
console.log(obj);

