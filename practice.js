// function add (num1,num2){
//     return num1+num2;
// }
// const total = add(55,55);
// console.log(total);

// const add = (x,y) => x+y;
// const result = add(4,4);
// console.log(result)


// const phone = 780;
// const computer = 100000;
// const headPhone = 800;
// const total = [780,100000,800];
// const highPrice = Math.max(...total);
// console.log(highPrice)

// class Shikhan {
//     constructor (name , id , phoneNumber){
//         this.Name = name;
//         this.Id =id;
//         this.PhoneNumber = phoneNumber;
//     }
// }
// const studentLink = new Shikhan ("Shikhan",2037621113,01871054196);
// console.log(studentLink);

// class Age{
//     constructor(){
//         this.age=22;
//     }
// }

// class Shikhan extends Age{
//     constructor (name , id , phoneNumber){
//         super()
//         this.name = name;
//         this.id =id;
//         this.phoneNumber = phoneNumber;
//     }
// }
// const studentLink = new Shikhan ("Shikhan",2037621113,01871054196);
// console.log(studentLink);


// const nam = {name:"kakan",roll:"2",cgpa:"3.50"};
// const {name,roll,cgpa} = nam;
// console.log(name,roll,cgpa)
// const number = 4
// if (number){
//     console.log("Condition is true")

// }
// else{
//     console.log("Condition is false")
// }


// const number = [4,5,6];
// const result = number.map(x => x*x)
// console.log(result)

// const number = [4,5,6,5]
// for(let i=0; i < number.length; i++){
//     const element = number[i];
//     const result = element*element;
//     console.log(result)
// }



// const number = [8,9,10,7,5,4]
// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element + element;
//     console.log(result); 
// }

// const element = [5,8,9,6]
// const find = element.find(x => x<8)
// console.log(find)

const students = {nam:"shikhan",roll:2}
const {nam,roll} = students
console.log(nam,roll)