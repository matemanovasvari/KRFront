import { useState, useEffect } from "react";

function Currency() {
  const [amount, setAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"euro" | "dollar">("euro");
  const [result, setResult] = useState<number | null>(null);

  const exchangeRates = {
    euro: 380,
    dollar: 350,
  };

  useEffect(() => {
    if (amount !== null && amount >= 0) {
      const rate = exchangeRates[currency];
      setResult(amount / rate);
    } else {
      setResult(null);
    }
  }, [amount, currency]);

  return (
    <div id="currency">
      <h1>Pénzváltó</h1>

      <div>
        <label>Pénzösszeg (HUF): </label>
        <input
          type="number"
          min={0}
          onChange={(e) => {
            const value = e.target.value;
            setAmount(value === "" ? null : Number(value));
          }}
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as "euro" | "dollar")}
        >
          <option value="euro">Euro (€)</option>
          <option value="dollar">Dollar ($)</option>
        </select>
      </div>
      <br />

      {result !== null && (
        <p>
          {amount}Ft = {result.toFixed(3)}{currency === "euro" ? "€" : "$"}
        </p>
      )}
    </div>
  );
}

export default Currency