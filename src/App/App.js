import React, { useState } from "react";
import Label from "./components/Label";
import Select from "./components/Select";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Footer from "./components/Footer";
import Clock from "./components/Clock";
import Loading from "./components/Loading";
import Failure from "./components/Failure";
import { useRatesData } from "./useRatesData";


function App() {
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    })
  };

  return (
    <Form calculateResult={calculateResult}
      amount={amount}
      currency={currency}>
      <Clock />
      <Header title={"Currency converter"} />
      {ratesData.state === "loading"
        ? (
          <Loading />
        )
        : (
          ratesData.state === "error" ? (
            <Failure />
          ) : (
              <>
                <Label
                  name={"Amount in PLN*:"}
                  body={<Input
                    amount={amount}
                    setAmount={setAmount} />}
                />
                <Label
                  name={"Valute:"}
                  body={<Select
                    currency={currency}
                    setCurrency={setCurrency}
                    ratesData={ratesData} />}
                />
                <Buttons name={"Convert!"} />
                <Footer />
                <Result result={result} />
              </>
            )
        )
      }
    </Form>
  );
}

export default App;
