// const name="chamu";

// var age=20;

// if(age>10){
//     const name="alle Chamu";
//     console.log(name);
// }
// console.log(name);
//console statements
// console.log("welcome")
// console.info("information")
// console.warn("check the code once")
// console.error("name is not defined")

// spread operator

// 
  

//
//Rest parameter
// function addition(x,y,...remaindata){
//     console.log(x)
//     console.log(y)
//     console.log(remaindata)
// }
// console.log(addition(2,3,4,5,6,7))
   
//Destructuring of arrays

//  let employees=["latha","chamu","swetha"]
// //  let name1=employees[0]
// let [latha_1,chamu_1]=employees


//  console.log(latha_1)


//Destructuring of object

let employee={
     uname:"chamu",
    salary:"17lPA",
    mobile:8374455440,
    id:"20121A1205"
}

let {uname,designation,...remainlist}=employee
console.log(uname)
console.log(remainlist)