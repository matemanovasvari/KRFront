import { useState, useEffect } from "react";

function Bmi() {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [resultText, setResultText] = useState<string | null>(null);

  const getBMICategory = (bmi: number): string => {
    switch (true) {
      case bmi < 16:
        return "Súlyos soványság";
      case bmi < 17:
        return "Mérsékelt soványság";
      case bmi < 18.5:
        return "Enyhe soványság";
      case bmi < 25:
        return "Normál testsúly";
      case bmi < 30:
        return "Túlsúlyos";
      case bmi < 35:
        return "Elhízott (I. fokú)";
      case bmi < 40:
        return "Elhízott (II. fokú)";
      default:
        return "Súlyosan elhízott (III. fokú)";
    }
  };

  useEffect(() => {
    if (height && weight && height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      const roundedBMI = bmi.toFixed(1);
      const category = getBMICategory(bmi);

      setResultText(`${roundedBMI} - ${category}`);
    } else {
      setResultText(null);
    }
  }, [height, weight]);

  return (
    <div id="bmi">
      <h1>BMI-kalkulátor</h1>

      <div>
        <label>Magasság (cm): </label>
        <input
          type="number"
          min={0}
          placeholder="magasság (cm)"
          onChange={(e) => {
            const value = e.target.value;
            setHeight(value === "" ? null : Number(value));
          }}
        />
      </div>
      <br />

      <div>
        <label>Testsúly (kg): </label>
        <input
          type="number"
          min={0}
          placeholder="testsúly (kg)"
          onChange={(e) => {
            const value = e.target.value;
            setWeight(value === "" ? null : Number(value));
          }}
        />
      </div>
      <br />

      {resultText && <p>Eredmény: {resultText}</p>}
    </div>
  );
}

export default Bmi