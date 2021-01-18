import React, { useState } from "react";
import Paragraph from "./Paragraph";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import Buttons from "./Buttons";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
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
      <Header title={"Valute conventer"} />
      <Paragraph name={"Amount in PLN*:"} body={<FormInput amount={amount} setAmount={setAmount} />} />
      <Paragraph name={"Valute:"} body={<FormSelect currency={currency} setCurrency={setCurrency} />} />
      <Buttons />
      <Footer />
      <Result result={result} />
    </Form>
  );
}

export default App;
