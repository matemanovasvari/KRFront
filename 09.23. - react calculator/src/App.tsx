import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
    const [input1, setInput1] = useState<number>(0);
    const [input2, setInput2] = useState<number>(0);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState<number>();

    useEffect(() => {
        calculate();
    }, [input1, input2, operator]);

    const calculate = () => {
        switch(operator){
            case "+":
                setResult(input1 + input2);
                break;
            case "-":
                setResult(input1 - input2);
                break;
            case "*":
                setResult(input1 * input2);
                break;
            case "/":
                setResult(input1 / input2);
                break;
            default:
                setResult(input1 + input2);
                break;
        }
    }

    return <>
        <h2>Egyszerú számológép</h2>

        <input type="number" onChange={(e) => {
            setInput1(Number(e.target.value));
        }}/>
        <select onChange={(e) => {
            setOperator(e.target.value);

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
        Eredmény: {result}
    </>;

};

export default App;