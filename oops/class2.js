  class Bank 
  {
    accountDetails = {
        1000:{acno:1000,username:"userone",password:"userone",balance:5000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:4000},
        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",balance:3000}
    }
  


  //method to validate the account
     Validate(accountnumber){
           return  accountnumber in this.accountDetails?'true':'flase'
     }



  //method to authenticate the account
        authenticateAccount(acn,pswd){
            if(this.Validate(acn)){
                if(this.accountDetails[acn].password==pswd){
                    console.log('authenticate successfully');
                }else{
                    console.log('invalid password');
                }

            }
            else{
                console.log('invalid account number');
            }

        }

  //method to check the balance
          checkbalance(acn,pswd){
            if(this.Validate(acn)){
                if(this.accountDetails[acn].password==pswd){
                    console.log(`balance is${acn} is :${this.accountDetails[acn].balance}`);
                }
                else{
                    console.log('invalid password');
                }


            }
            else{
                console.log('invalid account number');
            }
             

          }


  //method to transfer money
  transfer(fromacno,toacno,amount,frompswd){
    if(this.Validate(fromacno) && this.Validate(toacno)){
        if(this.accountDetails[fromacno].password==frompswd){
            if(this.accountDetails[fromacno].balance>amount){
                console.log(`balance of from acno ${fromacno} is ${this.accountDetails[fromacno].balance} and balance of from acno ${toacno} is ${this.accountDetails[toacno].balance} after money transfer`);

                this.accountDetails[fromacno].balance-=amount
                this.accountDetails[toacno].balance+=amount
                console.log(`balance of from acno ${fromacno} is ${this.accountDetails[fromacno].balance} and balance of from acno ${toacno} is ${this.accountDetails[toacno].balance} after money transfer`);

            }else{
                console.log('insufficient balance');
            }

        }
        else{
            console.log('invalid password');
        }

    }
    else{
        console.log('invalid account');
    }

  }
   






    } 
    user=new Bank()
    console.log(user.Validate(1000)?'account exist':'not exist');
    user.authenticateAccount(1000,'useron')
    user.checkbalance(1000,'userone')
    user.transfer(1002,1000,100,'userthree')
