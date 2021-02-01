import React, { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Input from "./Input";
import Buttons from "./Buttons";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import Clock from "./Clock";
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
      <Clock />
      <Header title={"Currency converter"} />
      <Label name={"Amount in PLN*:"} body={<Input amount={amount} setAmount={setAmount} />} />
      <Label name={"Valute:"} body={<Select currency={currency} setCurrency={setCurrency} />} />
      <Buttons name={"Convert!"} />
      <Footer />
      <Result result={result} />
    </Form>
  );
}

export default App;
