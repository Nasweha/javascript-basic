
//classical inheritance

class parent{
    bike(){
        console.log('my bike is duke');

    }
    
}
class child extends parent{
        
}
obj = new child()
obj.bike()


//object inheritance


baleno ={
    model:'hatch back',
    varient :['automatic','manual'],
    manufracturer:'maruti'



}
glanza ={
    manufracturer:'toyota'
}
glanza. __proto__=baleno
console.log(glanza.model);



//multilevel inheritance


class A{
    methoda(){
        console.log('INSIDE CLASS A');
    }

}
class B extends  A{
    methodb(){
        console.log('INSIDE CLASS B');
    }

}
class C extends  B{
    methodc(){
        console.log('INSIDE CLASS C');
    }

}

obj = new C()
obj.methodc()
obj.methodb()
obj.methoda()



