const arr = [2,3,4,5];
pairSum =6
low = 0
up = arr.length-1
isPresent = false
count = 0
while(low<up){
    count =count+1
    cursum = arr[low]+arr[up]

    if(cursum==pairSum){
        isPresent=true
        console.log(`(${arr[low]},${arr[up]})`)
        low++
        up--
    }
    else if(cursum>pairSum){
        up--
    }
    else{
        low++
    }
}
!isPresent && console.log('no such  pair')
console.log(count);