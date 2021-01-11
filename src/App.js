import React from "react";
import Paragraph from "./Paragraph";
import FormField from "./FormField";
import NumberInput from "./NumberInput";
import Buttons from "./Buttons";
import Legend from "./Legend";

function App() {
  return (
    <div className="container">
      <form className="form">
        <fieldset className="form__fieldset">
          <Legend title={"Kalkulator walutowy"} />
          <Paragraph name={"Kwota"} body={<NumberInput />} />
          <Paragraph name={"Posiadam"} body={<FormField />} />
          <Paragraph name={"Chcę otrzymać"} body={<FormField />} />
          <Buttons />
          <Paragraph />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
