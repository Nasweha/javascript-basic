a = [10,12,4,5,7,14,3]

even = a.filter(num=>num%2==0)
console.log(even);

//find the all numbers greatest than 10
n = a.filter(num=>num>10)
console.log(n);

//is there any numbers greater than 10
 s = a.some(num=>num>10)
 console.log(s?'yes':'no')

 