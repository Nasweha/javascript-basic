students = {
    Name:'Ann',
    class:5,
    subject:'maths',
    mark:32,
}
console.log(students)
console.log(typeof(students))

// p=[1000,'avin',5000,'developer']
// console.log(typeof(p))
// console.log(p[2])

//both have object data type
console.log('........for accessing the particular item from the object............')
console.log(students["subject"])
console.log('......................second method...................................')
console.log(students.subject)

//add an item in object

students["roll"]=2
console.log(students)

Object.assign(students,{'school':'govt'})
console.log(students)

Object.assign(students,{isvaccinate:true})
console.log(students)
delete students.isvaccinate
console.log(students)

students["Name"]='Athira'
console.log(students)
console.log('...........for incrementing vale..........................')
students["mark"]+=5
console.log(students)

console.log('.............to access key.................................')
for(let x in students){
    console.log(x)
}
console.log('..................to access data in key....................')
for(let x in students){
    console.log(students[x])
}
//w.a.p to check whether location key is present or not
console.log('..............................................................')

if( 'Name' in students){

    console.log('present')
}
else{
    console.log('not present')
}

//or

console.log('location' in students? 'present':'not present')

//w.a.p to check whether gender is present in the object students.if present print 'present' else add new key as gender with value as male
if('Name' in students){
    console.log('present')
}
else{
    Object.assign(students,{'gender':'male'})
}
console.log(students)
console.log('...............another method.....................')
'gender' in students?console.log('present'):(students['Gender']='male',console.log(students))