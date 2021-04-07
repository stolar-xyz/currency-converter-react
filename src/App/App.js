import React from "react";
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
import { useCalculateResult } from "./useCalculateResult";

function App() {
  const {
    result,
    currency,
    amount,
    ratesData,
    setCurrency,
    setAmount,
    calculateResult,
  } = useCalculateResult();

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
                  name={"Amount in EUR*:"}
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
                <Footer ratesData={ratesData} />
                <Result result={result} />
              </>
            )
        )
      }
    </Form>
  );
}

export default App;
