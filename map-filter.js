 const element = [5,8,9,6]
const result = element.map(x => x*x);
console.log(result)

const number = [8,9,6,7,5,4]
for(let i = 0; i < number.length; i++){
    const element = number[i];
    const result = element * element;
    console.log(result); 
}
console.log(result);

const find = element.filter(x => x<8)
console.log(find)

const find = element.find(x => x<8)
console.log(find)