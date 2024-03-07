var car ={
    name:"boleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10 lakh"
}

//display car name and its manufacturer name and price

console.log( `carname ${car.name} and manufacturer name is ${car.manufacturer} ad the price is ${car.price}`);

//check model key is available in car, if yes then display its value
   console.log( 'model' in car?`car model is ${car.model}`:'no such key');
          
//add "varient" key to car with value as "manuel"
car["varient"]=["manual"]
console.log(car);    

//insert another value to "varient" key to car with value as "automatic"
      car["varient"].push("automatic")
      console.log(car);
//add "colour" key to car with value as "red","white","blue"
   car["colour"] = ["red","white","blue"]
   console.log(car);
