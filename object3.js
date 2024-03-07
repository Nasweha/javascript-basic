text = "hai hello all hello world all"
//w.a.p to find the word count in the given text
//op = {hai:1;hello:2,all:2,world:1}
   obj={}
  words = text.split(' ')
//   console.log(word);
   for( word of words){
    // console.log(value);
    if( word in obj){
         obj[word]+=1
    }
    else{
        obj[word]=1
    }
   }
   console.log(obj);


   wc ={}
   text.split(' ').map(element=>element in wc?wc[element]+=1:wc[element]=1)
   console.log(wc);
    