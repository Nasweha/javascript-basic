   //create class


   class employe {
    //property
    empTd
    empName
    empDes
    empSalary
    //consturcor
    constructor(id,ename,desg,salary){
        this.empId = id
        this.empName  = ename
        this.empDes = desg
        this.empSalary =salary

    }

    //methods
    display(){

        console.log(`name is ${this.empName} ,designation is ${this.empDes},and salary is ${this.empSalary}`);

    }


   }

   //create object
    obj  = new employe(1, 'neel','developer',34000)
    obj.display()
    obj  = new employe(2, 'nasi','developer',44000)
    obj.display()
    obj  = new employe(3, 'neel','developer',54000)
    obj.display()


class student{
    sid
    sname
    std
    smark
    sgrade

    constructor(id,name,standard,mark,grade){
        this.sid=id
        this.sname=name
        this.std=standard
        this.smark=mark
        this.sgrade=grade
        // this.print()   //function calling

    }
    print()
    {
console.log(this.sid,this.sname,this.std,this.smark,this.sgrade);
    }

}

object = new student(1,'manu',5,80,'B')
object.print()
object = new student(1,'mary',5,90,'A')
object.print()
object = new student(1,'jacob',5,85,'B')
object.print()
object = new student(1,'fathima',5,75,'c')
object.print()
object = new student(1,'minnu',5,95,'A')
object.print()
