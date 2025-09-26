import { useEffect, useState } from "react";
import type { ReactElement } from "react";

function Temperature() {
    const [input, setInput] = useState<number | null>(null);
    const [resultText, setResultText] = useState<ReactElement | null>(null);

    useEffect(() => {
        if (input === null) {
            setResultText(null);
        } else {
            setResultText(
                <>
                    <p>{input}°C = {(input * 1.8 + 32).toFixed(2)}°F</p>
                    <p>{input}°C = {(input + 273.15).toFixed(2)}K</p>
                </>
            );
        }
    }, [input]);

    return (
        <div id="temp">
            <h2>Hőmérséklet Átváltó</h2>
            <label>Add meg a celsius hőmérsékletet:</label>
            <br />
            <input
                type="number"
                onChange={(e) => {
                    const value = e.target.value;
                    setInput(value === "" ? null : Number(value));
                }}
            />
            <br />

            {resultText}
        </div>
    );
}

export default Temperature