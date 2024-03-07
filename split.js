
console.log('-----------------split by characters--------');
word =  'good evening'
 w = word.split('')
 console.log(w)

 console.log('-----------------split by words-----------');
 w = word.split(' ')
 console.log(w);

 w = word.split('n')
 console.log(w);

 // program to print all vowels in the string

 str = 'Good Evening All'
/ vowels['a','e','i','o','u','A','E','I','O','U']
//  p=[]
//   character = str.toLowerCase().split('')
//   for(let char of character){
//     if(vowels.includes(char) && !p.includes(char)){
//         p.push(char)
//     }
//   }
//   console.log(p);

  q =[]
  a = Array.from(str.toLowerCase()).filter(item=>(vowels.includes(item)&& !p.includes(item) ) && q.push(item))
  console.log(a);
 