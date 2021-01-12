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
        <Legend title={"Kalkulator walutowy"} />
        <Paragraph name={"Kwota"} body={<NumberInput />} />
        <Paragraph name={"Posiadam"} body={<FormField />} />
        <Paragraph name={"Chcę otrzymać"} body={<FormField />} />
        <Buttons />
        <Paragraph />
      </Fieldset>
    </Form>
  );
}

export default App;
