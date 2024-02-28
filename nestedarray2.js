
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

console.log('Employee Name');
for( emp of employee){
     console.log(emp[1])

}



//print total numbers of employee
       console.log('total number of employee');
      console.log(employee.length);

//print developer employee details
   console.log('developer details');
   for(emp of employee){
    if (emp[2]=='developer'){
        console.log(emp);
    }
   }
  
//print employee whose salary > 30000
 console.log('salary greater than 30000');
  for(emp of employee){
    if(emp[4]>30000){
        console.log(emp[1])
    }
  }

// print details of employee Laisha
     console.log('details of laisha');
     
    //  console.log(employee[4])
    for(emp of employee){
        if(emp[1]=='Laisha'){
            console.log(emp)
        }
    }

//sort employee based on their salary in descending order
//array.sort((a,b)=>a-b)
          console.log('salary in decsending order');
          console.log( employee.sort((emp1,emp2)=>emp2[4]-emp1[4]));

           

               

//sort employee based on their experience in ascending order
console.log('experience in ascending order');
console.log( employee.sort((emp1,emp2)=>emp1[5]-emp2[5]));

//print the employ name whose have the higest salary

       highestsalary =   employee.sort((emp1,emp2)=>emp2[4]-emp1[4]);
       console.log(highestsalary[0][1]);
         


