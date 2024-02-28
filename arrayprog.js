//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name

 employee.forEach(name =>{
     console.log(name[1])})

console.log('---------------------another mehtod--------------------------');

employee.map((emp)=>emp[1]).forEach(elements =>{
    console.log(elements);
})

console.log('-----------------------------');

//print total numbers of employee
console.log('total number of employee');
console.log(employee.length);

 //print developer employee details
  employee.filter( items => items[2]=='developer').forEach(elements=> console.log(elements))
 
//print employee whose salary > 30000
console.log('-----------------salary>30000---------------------');

employee.filter(emp=>emp[4]>30000).forEach(elements=>console.log(elements))

//// print details of employee Laisha
console.log('------------ (using filter)laisha-------------------');
employee.filter(items => items[1]=='Laisha').forEach(elements=>console.log(elements))
console.log('--------------------using find------------------');
laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(laisha);
    




//print the employ name whose have the higest salary
      console.log('----------------highest salary---------');
highest = employee.reduce((num1,num2) => num1[4]
>num2[4]?num1:num2)
console.log(highest[1]);

//print the employ name who have the lowest salary
console.log('----------------lowest salary---------');
highest = employee.reduce((num1,num2) => num1[4]
<num2[4]?num1:num2)
console.log(highest[1]);

//print th etotal salry expense of the compnay
console.log('----------------total salary---------');
salartExpense = employee.map(item=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(salartExpense);




