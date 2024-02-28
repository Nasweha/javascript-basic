//find the common numbers between the given two arrays

p = [10,11,12,20,30]
q = [11,20 ,25,30,33]

// for(i=0;i<=p.length-1;i++){
//     for(j=0;j<=q.lenth-1;i++){
//         if(p[i]==q[j]){
//             console.log(p[i])
//         }
//     }
// }
    isPresent =false
  for( n of p){

    for( x of q){
        if(n==x){
            isPresent=true
            console.log(n)
        }
    }
  }
  !isPresent && console.log('no duplicate found')

