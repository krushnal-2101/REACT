
const list = [1, 2, 3, 4, 5 , 6, 7, 8, 9]

const print = list.reduce((acc, curr) => {
    return acc + curr
})

console.log(print)


const items = [
    {
        name: "Book",
        price: 200,
        qty : 8, 
    },
    {
        name: "Pen",
        price: 20,
        qty : 10,
    },
    {
        name: "Bag",
        price: 500,
        qty : 4,
    }
]

const totalBill = items.reduce((acc, curr) => {
    return acc + curr.price * curr.qty
}, 0)

console.log(totalBill)