const people = [
    { name: 'A', age: 18 },
    { name: 'B', age: 32 },
    { name: 'C', age: 19 },
];

people.filter((i) => i.age <= 20).forEach((i) => console.log(i.name));

const search = people.find((i) => i.name === 'A');
console.log(search.age);