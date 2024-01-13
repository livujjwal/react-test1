import { useState } from "react";
import { FaAsterisk, FaDivide, FaMinus, FaPlus, FaStar } from "react-icons/fa";
const Calculator = () => {
  const [inputNum1, setInputNum1] = useState("");
  const [inputNum2, setInputNum2] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  console.log(error, success);
  function calculation(operation) {
    setSuccess("");
    if (inputNum1 == 0) {
      setSuccess("");
      setError("Num1 Cannot Be Empty");
    } else if (inputNum2 == 0) {
      setSuccess("");
      setError("Num2 Cannot Be Empty");
    } else {
      console.log(inputNum1, inputNum2);
      setSuccess("Result - ");
      setError("");
      switch (operation) {
        case "+":
        setResult(Number(inputNum1)+ Number(inputNum2));
        setInputNum1("")
        setInputNum2("")
        break;
        case "-":
        setResult(Number(inputNum1)-Number(inputNum2));
        setInputNum1("")
        setInputNum2("")
        break;
        case "*":
        setResult(Number(inputNum1) * Number(inputNum2));
        setInputNum1("")
        setInputNum2("")
        break;
        case "/":
        setResult(Number(inputNum1)/ Number(inputNum2));
        setInputNum1("")
        setInputNum2("")
 
        break;
        default: setError("Out of Scope")
            break;
      }
      
    }
  }
  return (
    <div className="body">
      <h1>React Calculator</h1>
      <div className="input-section">
        <input
          placeholder=" Num 1"
          type="text"
          value={inputNum1}
          className="num-1"
          onChange={(e) => {
            setInputNum1(e.target.value);
          }}
        />
        <input
          placeholder=" Num 2"
          type="text"
          value={inputNum2}
          className="num-2"
          onChange={(e) => {
            setInputNum2(e.target.value);
          }}
        />
      </div>
      <div className="btn-section">
        <button className="btn" onClick={() => {calculation("+")} } >
          <FaPlus className="btn-icon"/>
        </button>
        <button className="btn" onClick={() => {calculation("-")} }>
          <FaMinus className="btn-icon"/>
        </button>
        <button className="btn" onClick={() => {calculation("*")}} >
          <FaAsterisk className="btn-icon"/>
        </button>
        <button className="btn" onClick={() => {calculation("/")}} >
          <FaDivide className="btn-icon"/>
        </button>
      </div>
      <div className="result">
        {error == "" ? (
          ""
        ) : (
          <div className="error">
            <h2 className="err"> Error </h2>
            <h2 > {error} </h2>
          </div>
        )}
        {success == "" ? (
          ""
        ) : (
          <div className="success">
            <h2 className="suc"> Success </h2>
            <h2 > {success} {result}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;