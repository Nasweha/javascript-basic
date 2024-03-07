  
//method overloading with rest operator
  function add(...arg){
    console.log(arg);
    console.log(`sum is ${arg.reduce((n1,n2)=>n1+n2)}`);
  }
  add(10,20,30)


  //method over riding

  class A {
    methoda(){
        console.log('iniside clas a');
    }
  }
  class B extends A {
    methoda(){
        console.log('inside class B');
    }
    methoda(){
        console.log('inside class B and second function ');
    }
   
  }
  obj = new B()
  obj.methoda()
 
   
  