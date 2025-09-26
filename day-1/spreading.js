

const fruits = ['apple', 'banana', 'cherry'];

const vegetables = ['carrot', 'lettuce', 'spinach'];

const allFoods = [...fruits, ...vegetables];

console.log(allFoods);



const person1 = {
    name : "krushnal",
    age: 25,
    city:"bhavnagar"
}

const person2 = {
    name1:"jay",
    age1:24,
    city1:"surat"
}

console.log({...person1,...person2});



const cal1={
    num1 :  "one",
    num2 : "two",
}

const cal2= {
    ...cal1,
    num3 : "three",
}

console.log(cal2);