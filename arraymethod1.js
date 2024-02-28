//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
    covid =  covid_data.reduce((post,neg)=>post[2]>neg[2]?post:neg)
    console.log(covid[1]);
    

//2. district having Highest 1st dose vaccine
console.log('------------------1st dose-----------------------');
covid =  covid_data.reduce((dose1,dose2)=>dose1[5]>dose2[5]?dose1:dose2)
console.log(covid[1]);

//3. district having lowest death rate
console.log('------------------ lowest death reate-----------------------');
covid =  covid_data.reduce((drate1,drate2)=>drate1[3]<drate2[3]?drate1:drate2)
console.log(covid[1]);
//4. sort data with +ve case in descending order
console.log('-------------------------ascending order------------------');
covid_data.sort((postv1,postv2)=>postv2[2]-postv1[2]).forEach(postv=>console.log(postv))

//5. is district with +ve cases > 15000
console.log('---------------case>15000---------------');
 covid =  covid_data.some(postv=>postv[2]>15000)
  console.log(covid);
           
//6. sort data with 1st dose vaccine ascending order
console.log('-------------------------descnding order------------------');
covid_data.sort((dose1,dose2)=>dose1[5]-dose2[5]).forEach(dose=>console.log(dose))
//7. Print Thrissur details
console.log('----------------thrissur details--------------');

Thrissur=covid_data.find(det=>det[1]=='Thrissur')
console.log(Thrissur);
//8. Print total number of positive cases
console.log('-------------total cases---------------');
totalpostyCase= covid_data.map(casepostv => casepostv[2]).reduce((postv1,postv2)=>postv1+postv2)
console.log(totalpostyCase);

//9. Print total number of curred cases
console.log('-------------cured cases---------------');
totalpostyCase= covid_data.map(curedcase => curedcase[4]).reduce((postv1,postv2)=>postv1+postv2)
console.log(totalpostyCase);

//10. Print curred cases in Idukki
    //   covid= covid_data.filter(curecase=>curecase=="Idukki")
    //    console.log(covid[1]);
    console.log('--------------cured case in idukki-------------------');
  idukki=  covid_data.find(cured=>cured[1]=='Idukki')
    console.log(idukki[4]);

    