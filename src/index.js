import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './Components/Functional';
import UnionBank from './Components/UnionBank';
import StateinClassComponent from './Components/StateinClassComponent';
import StatesInFunctionalComponent from './Components/StatesInFunctionalComponent';
import FormRendering from './Components/FormRendering';
import Home from './Components/Home';
import FormRenderingInFunctions from './Components/FormRenderingInFunctions';

ReactDOM.render(
  <React.StrictMode>
     {/* <App />  */}
    {/* <Functional/>   */}
    {/* <UnionBank/> */}
    {/* <StateinClassComponent/> */}
    {/* <StatesInFunctionalComponent/> */}
    {/* <FormRendering/> */}
    {/* <Home/> */}
    <FormRenderingInFunctions/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
