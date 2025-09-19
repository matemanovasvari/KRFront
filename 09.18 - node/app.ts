type Human = {
    name: string;
    age: number;
    height?: number
}

/*
const person: Human = {
    name: "Someone",
    age: 25
};

const person2: Human = {
    name: "Someone2",
};
*/

const people: Array<Human> = [
    { name: "Someone", age: 25, height: 190},
    { name: "Someone2", age: 18 }
]

const functionExample = (a: number, b:number): number => a + b;