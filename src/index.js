import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { GlobalStyle } from './App/GlobalStyle';
import reportWebVitals from './reportWebVitals';
import { theme } from "./App/theme";
import { ThemeProvider } from "styled-components";
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
