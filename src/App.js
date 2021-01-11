import React from "react";
import Paragraph from "./Paragraph";
import FormField from "./FormField";
import NumberInput from "./NumberInput";
import Buttons from "./Buttons";
import Legend from "./Legend";
import Fieldset from "./Fieldset";

function App() {
  return (
    <form className="form">
      <Fieldset>
        <Legend title={"Kalkulator walutowy"} />
        <Paragraph name={"Kwota"} body={<NumberInput />} />
        <Paragraph name={"Posiadam"} body={<FormField />} />
        <Paragraph name={"Chcę otrzymać"} body={<FormField />} />
        <Buttons />
        <Paragraph />
      </Fieldset>
    </form>
  );
}

export default App;
