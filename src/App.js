import React from "react";
import Paragraph from "./Paragraph";
import FormField from "./FormField";

function App() {
  return (
    <div className="container">
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator walutowy</legend>
          <p className="form__paragraph">
            <label>

              <span className="form__spanText">Kwota</span>

              <input className="form__formField" step="any" min="0" placeholder="Wpisz kwotę"
                type="number" />

            </label>
          </p>
          <Paragraph name={"Posiadam"} body={<FormField />} />
          <Paragraph name={"Chcę otrzymać"} body={<FormField />} />
          <div className="form__buttonsContainer">
            <button className="form__button">Zmień</button>
            <button className="form__button">Przelicz</button>
          </div>
          <p className="form__paragraph form__paragraph--special">
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
