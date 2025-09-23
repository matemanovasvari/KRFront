import { useState } from 'react';

const App = () => {
    const [input1, setInput1] = useState<number>(0);
    const [input2, setInput2] = useState<number>(0);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState<number>();

    return <>
        <h2>Egyszerú számológép</h2>

        <input type="number" onChange={(e) => {
            setInput1(Number(e.target.value));
        }}/>
        <select onChange={(e) => {
            setOperator(e.target.value);
            console.log(e.target.value);

        }}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" onChange={(e) => {
            setInput2(Number(e.target.value));
        }}/>
        <br />
        <button onClick={() => {
            if(operator == "+"){
                setResult(input1 + input2);
            }
            if (operator == "-") {
                setResult(input1 - input2);
            } 
            if (operator == "*"){
                setResult(input1 * input2);
            }
            if (operator == "/"){
                setResult(input1 / input2);
            }
        }}>Calculate</button>
        <br />
        Eredmény: {result}
    </>;

};

export default App;
