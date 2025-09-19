import { useState } from 'react';

const App = () => {
    const [input, setInput] = useState<number>(0);

    return (
        <>
            <h2>Hőmérséklet Átváltó</h2>
            <label>Add meg a celsius hőmérsékletet:</label>
            <br />
            <input
                type="number"
                onChange={(e) => {
                    setInput(Number(e.target.value));
                }}
            ></input>
            <br/>
            {input}&deg;C = {input * 1.8 + 32}&deg;K
        </>
    );
};

export default App;
