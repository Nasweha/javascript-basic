// w. a p to find the suqaure of  each item in the given array

a = [10,11,12,13,14,15]


for( num of a){
    console.log(num**2);
}

console.log('--------------------------foreach-----------------------')

a.forEach(item => {
    console.log(item**2);
})

console.log('--------------------------map-----------------------')

sq = a.map((item1)=>item1**2)
    console.log(sq);


    // find the cube of given array

    console.log('--------------------------map-----------------------')

cube = a.map((item1)=>item1**3)
    console.log(cube);

 console.log('--------------------------foreach-----------------------')

a.forEach(item3 => {
    console.log(item3**3);
})



//w.a p to create a new array with numbers <=13 increment the number ,the numbers>= 13 decrement the numbers
a = [10,11,12,13,14,15]

 op = a.map((items)=>items<=13?items+1:items-1)
    console.log(op)


