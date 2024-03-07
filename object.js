//Array

// p=  [1000,'Neel','developer','kochi',25000,3] 
// console.log(typeof(p));
// console.log(p[2]);


 //OBJECTS
  employee = {
    empId :1000,
    empName : "Neel",
    empdes:"developer",
    empLocation:"kochi"

    
  }
  console.log(employee);
  console.log(typeof(employee));
  console.log(employee["empdes"]);
  console.log(employee.empdes);
  
  console.log('------------------add an item ------------------');
  employee["salary"] = 25000
  console.log(employee);

  console.log('------------------using Object.assign-------------');
  Object.assign(employee,{'experience':3})
  console.log(employee);

console.log('------------------------delete--------------');
        Object.assign(employee,{'isVaccinated':true})
        console.log(employee);

        delete employee.isVaccinated
        console.log(employee);

console.log('----------------------update-----------------------');
employee['empName']  = 'Neel Jhon' 
console.log(employee);  

console.log('----------------- experience increment---------------');
employee["experience"]+=2
console.log(employee);


for(x in employee){
    console.log(x);
}


//progm to check whether location key is present 

if('empLocation' in employee){
    console.log('present');
}
else{
    console.log('not present');
}
console.log('empLocation' in employee?'true':'false')

//program to check whether gender is present in the object employee,if present print present else add new key as gender with value as male
if('gender' in employee){
    console.log(' is present');
}

else{
    Object.assign(employee,{'gender':'male'})
        console.log(employee);

}

'gender' in employee?'present':(employee['gender'] ='male',console.log(employee)); 






 
