import React from "react";
import Paragraph from "./Paragraph";
import FormField from "./FormField";
import NumberInput from "./NumberInput"

function App() {
  return (
    <div className="container">
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walutowy</legend>
          <Paragraph name={"Kwota"} body={<NumberInput />} />
          <Paragraph name={"Posiadam"} body={<FormField />} />
          <Paragraph name={"Chcę otrzymać"} body={<FormField />} />
          <div className="form__buttonsContainer">
            <button className="form__button">Zmień</button>
            <button className="form__button">Przelicz</button>
          </div>
          <Paragraph />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
