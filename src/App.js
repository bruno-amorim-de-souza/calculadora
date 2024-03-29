import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation(null);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => prev === '0' ? num : prev + num);
  };

  const handleOperation = (op) => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation(op);
  };

  const handleCalculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    if (isNaN(num1) || isNaN(num2)) return;

    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber('0');
    setOperation(null);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="C" onClick={() => handleClear()} />
          <Button label="*" onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleAddNumber("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleCalculate} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
