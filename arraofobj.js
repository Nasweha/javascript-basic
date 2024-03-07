//object within another object
weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
  wd={}
  for( let data of weatherData){
     district = data.district
     currentTemp = data.weather
      if(district in wd){
        oldTemp =wd[district]
        if(oldTemp>currentTemp){
            wd[district]=oldTemp
        }
        else{
            wd[district]=currentTemp
        }

      }
   else{
    wd[district]=currentTemp
   }
  }
  console.log(wd);
 
//-----------------------------------------------------------------------------------------------------------------------------------
  products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]




  
//1. print product name only
     products.forEach(item=>console.log(item.pName))
//2. print all mobile details whose display is lcd
        products.filter(item=>item.display=='lcd').forEach(element=>console.log(element))
//3. print 5g mobile phone name
products.filter(item=>item.band=='5g').forEach(element=>console.log(element.pName))
//4. sort mobile based on price
          products.sort((x,y)=>x.price-y.price).forEach(element=>console.log(element.pName))
//5. print costly mobile
console.log('--------------------costly--------------------------');
          costly=  products.reduce((cost1,cost2)=>cost1.price>cost2.price?cost1:cost2)
            console.log(costly.pName);
//6. print low cost mobile
console.log('---------------------low cost---------');
costly=  products.reduce((cost1,cost2)=>cost1.price<cost2.price?cost1:cost2)
console.log(costly.pName);

// ------------------------------------------------------------------------------------
accounts=[
  {
      acno:1000,ac_type:'savings',balance:45000,transaction:[
          {
              to:1001,amount:5000,msg:'ebill',mode:'gpay'
          },
          {
              to:1002,amount:2000,msg:'emi',mode:'neft'
          },
          {
              to:1003,amount:1000,msg:'recharge',mode:'phonePay'
          },
      ]
  },
  {
      acno:1001,ac_type:'current',balance:30000,transaction:[
          {
              to:1000,amount:1000,msg:'grossary',mode:'gpay'
          },
          {
              to:1002,amount:7000,msg:'gift',mode:'phonePay'
          },
          {
              to:1003,amount:10000,msg:'emi',mode:'neft'
          },
      ]
  },
  {
      acno:1002,ac_type:'fixed',balance:100000,transaction:[
          {
              to:1000,amount:5000,msg:'ebill',mode:'gpay'
          },
          {
              to:1001,amount:2000,msg:'emi',mode:'neft'
          },
          {
              to:1003,amount:1000,msg:'recharge',mode:'phonePay'
          },
      ]
  },
  {
      acno:1003,ac_type:'savings',balance:30000,transaction:[
          {
              to:1001,amount:5000,msg:'ebill',mode:'gpay'
          },
          {
              to:1002,amount:2000,msg:'emi',mode:'neft'
          },
          {
              to:1000,amount:1000,msg:'recharge',mode:'phonePay'
          },
      ]
  }
]

//1. total number of accounts
        console.log(`total number of accounts ${accounts.length}`);
//2. print account number whose ac_type is savings

accounts.filter(item=>item.ac_type=="savings").forEach(element=>console.log(element.acno))
//3.print the balance of accnount number 1000

 balance=accounts.find(num=>num.acno==1000)
 console.log(balance.balance);
 
//4. print all gpay transactions

  accounts.map(item=>item.transaction).flat().filter(data=>data.mode=='gpay').forEach(element=>console.log(element))
//5. print all transaction whose amount > 5000

console.log('-------------------------------------------------------------');

accounts.map(item=>item.transaction).flat().filter(data=>data.amount>5000).forEach(element=>console.log(element))


//6. print credit transaction of account 1002
console.log('--------------------acount-----------------');

credit = accounts.map(item=>item.transaction).flat().filter(data=>data.to==1002)
console.log(credit);

//  trans = accounts.map(item=>item.transaction).flat().
//  console.log(trans);

//7. print debit transaction of account 1002
console.log('-----------------------------------------------------')
debit = accounts.find(item=>item.acno=1002).transaction
console.log(debit);



//8. print transaction history of 1002
console.log('----------------transaction history of 1002-------------------------------');
transHis= { credit: credit,
  debit:debit}

  console.log(transHis);




//print as array
transHis1 = [...credit,...debit]
console.log(transHis1);

//9. print highest balance account details
console.log('-----------------------------------------------------------');

 high =accounts.reduce((ac1,ac2)=>ac1.balance>ac2.balance?ac1:ac2)
 console.log(high);

