import React from "react";
import Paragraph from "./Paragraph";
import FormField from "./FormField";
import NumberInput from "./NumberInput";
import Buttons from "./Buttons";
import Legend from "./Legend";
import Fieldset from "./Fieldset";
import Form from "./Form";

function App() {
  return (
    <Form>
      <Fieldset>
        <Legend title={"Valute conventer"} />
        <Paragraph name={"Amount"} body={<NumberInput />} />
        <Paragraph name={"I have"} body={<FormField />} />
        <Paragraph name={"I want to receive"} body={<FormField />} />
        <Buttons />
        <Paragraph />
      </Fieldset>
    </Form>
  );
}

export default App;
