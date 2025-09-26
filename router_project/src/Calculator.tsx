import { useState, useEffect } from 'react';

const Calculator = () => {
    const [input1, setInput1] = useState<number | null>(null);
    const [input2, setInput2] = useState<number | null>(null);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        if (input1 === null || input2 === null) {
            setResult(null);
            return;
        }

        let calcResult: number;
        switch (operator) {
            case "+":
                calcResult = input1 + input2;
                break;
            case "-":
                calcResult = input1 - input2;
                break;
            case "*":
                calcResult = input1 * input2;
                break;
            case "/":
                calcResult = input2 !== 0 ? input1 / input2 : NaN;
                break;
            default:
                calcResult = input1 + input2;
                break;
        }

        setResult(calcResult.toString());
    }, [input1, input2, operator]);

    return (
        <>
            <div id="calc">
                <h2>Egyszerű számológép</h2>
                <div>
                    <input
                        type="number"
                        onChange={(e) => {
                            const value = e.target.value;
                            setInput1(value === "" ? null : Number(value));
                        }}
                    />
                    <select
                        onChange={(e) => {
                            setOperator(e.target.value);
                        }}
                    >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input
                        type="number"
                        onChange={(e) => {
                            const value = e.target.value;
                            setInput2(value === "" ? null : Number(value));
                        }}
                    />
                </div>
                <br />
                {result !== null && (
                    <p>Eredmény: {result}</p>
                )}
            </div>
        </>
    );
};

export default Calculator