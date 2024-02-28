//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('-------------------product name-----------------');
   products.forEach(name=>{
    console.log(name[1])
   })

//2. display product whose price < Rs.50
console.log('----------------products rs<50-------------');
             products.filter(price=>price[2]<50).forEach(items=>console.log(items[1]))
//3. print price of oreo
       oreo =   products.find(pro=>pro[1]=='oreo')
       console.log(oreo[2]);
        

//4. print costly product name
               console.log('----------------costly---------------------');
                costly = products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
                console.log(costly[1]);
//5. display out of stock product
console.log('----------------costly---------------------');
// outofstock = products.reduce((pro1,pro2)=>pro1[3]<pro2[3]?pro1:pro2)
// console.log(outofstock[1]);
products.filter(item=>item[3]==0).forEach(items=>console.log(items[1]))

//6. sort products based on stock in decsending order
console.log('----------------');
products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(items=>console.log(items))
//7. print product having maximum available stock
stock = products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
 console.log(stock[1]);
     
//8. is there any product can be purchased by Rs. 10
                price= products.some(price=>price[2]<=10)
                 console.log(price?'yes':'no');
//9. Is there any product in the range of 10 to 30
            products =  products.some(item=>item[2]>=10 && item[2]<=10)
            console.log(products?'yes': 'no');
//10. print all products in the range of 10 to 30
  products.filter(item=>item[2]>=10 && item[2]<=30).forEach(product=>console.log(product[1]))
  
    
