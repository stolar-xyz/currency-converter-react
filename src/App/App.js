import React, { useState } from "react";
import Paragraph from "./Paragraph";
import FormField from "./FormField";
import NumberInput from "./NumberInput";
import Buttons from "./Buttons";
import Header from "./Header";
import Fieldset from "./Fieldset";
import Form from "./Form";
import Result from "./Result";
import currencies from "./currencies";


function App() {
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    })
  };

  return (
    <Form calculateResult={calculateResult} amount={amount} currency={currency}>
      <Fieldset>
        <Header title={"Valute conventer"} />
        <Paragraph name={"Amount in PLN*:"} body={<NumberInput amount={amount} setAmount={setAmount} />} />
        <Paragraph name={"Valute:"} body={<FormField currency={currency} setCurrency={setCurrency} />} />
        <Buttons />
        <Result result={result} />
      </Fieldset>
    </Form>
  );
}

export default App;
