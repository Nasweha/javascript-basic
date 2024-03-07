//check whether the number is  a mobile number or not

mobileNo = '79943634597'
 console.log(mobileNo.length==10?' is a mobile number':'not a mobile number')

 console.log('----------using arrow function------------');
 const validate  = (num)=>{
    return num.length==10?' is a mobile number':'not a mobile number'
 }
 console.log(validate('9943634597'));

 //check whether the given email id is gmail or not 

console.log('------------------email checking---------------');
 email = 'nasweha@gmail.com'
 console.log(email.endsWith('@gmail.com')?'its a mail id ': 'not a mail id');

 //check whether the given string is start withlettr q or not

 word = 'qsdjhdfuvh'
 console.log(word.startsWith('q') || word.startsWith('Q')?" letter starts with q":'not starts with q' );

