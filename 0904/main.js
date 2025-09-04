const people = [
    { name: 'Milan', age: 19 },
    { name: 'Mate', age: 18 },
    { name: 'Adam', age: 18 },
];

let sum = 0;

people.forEach((i) => {
    sum += i.age;
});

console.log(sum / people.length);