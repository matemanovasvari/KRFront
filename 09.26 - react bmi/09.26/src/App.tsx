import { useEffect, useState } from "react";

function App() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [result, setResult] = useState<number>(0.0)
  const [resultText, setResultText] = useState<String>("");

  useEffect(() => {
    const heightInMeter = height / 100;
    setResult(weight / (heightInMeter * heightInMeter));
    console.log(result);
  }, [weight, height])

  return (
    <>
      <h1>BMI-kalkulator</h1>
      <label>Magasság (cm) </label>
      <input type="number" placeholder="magassag (cm)" onChange={(e) => {
        setHeight(Number(e.target.value));
      }}/>
      <br />
      <label>Testsuly (kg) </label>
      <input type="number" placeholder="testsúly (kg)" onChange={(e) => {
        setWeight(Number(e.target.value));
      }}/>
    </>
  )
}

export default App