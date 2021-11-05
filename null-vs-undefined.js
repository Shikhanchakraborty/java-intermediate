let name;
console.log(name);

function add(num1,num2){
    console.log(num1+num2);
}
const result = add(45,85);
console.log(result);

function add(num1,num2=12){
    console.log(num1+num2);
}
const total = add(12)
console.log(total)

const department = {subjectCode:"ICE11,ICE22",sir:"Murad ali"};
console.log(department.sir);
if(department.sir){
    console.log("Condition is true");
}
else{
console.log("Condition is false")
}

 let fun = undefined;
console.log(fun)

const fun = null;
 console.log(fun)