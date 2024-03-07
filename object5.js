//program to find the first recursive letter

pattern = 'ABCBACCBAA'
 obj = {}
  letters = pattern.split('')
//   console.log(letter);
 for(letter of letters){
//   console.log(letter);
if( letter in obj){
     console.log(`first recursive letter is ${letter}`);
     break
}
else{
    obj[letter]=1
}
 }
 
