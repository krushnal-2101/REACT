

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const num = number.filter((x)=> x % 2 == 0);

console.log(num);



const peopleData = [
    {
        name: "John",
        age: 20,        
        city: "New York"
    },
    {
        name: "Jane",
        age: 30,        
        city: "nepal"
    },
    {
        name: "kimmy",
        age: 25,        
        city: "korea"
    }
]

const people = peopleData.filter((person) => person.age > 25);

console.log(people)
