import React from 'react'
import './App.css';

function App() {
  return (
    <div><h1> Other resources for Covid Information</h1>
      <a href= "https://www.cdc.gov/coronavirus/2019-ncov/index.html">
      <h2> CDC National Website Information</h2>
      </a>
      <a href = "https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus/index.shtml">
      <h3> Local Maine Covid Updates </h3>
      </a>
      <a href = "https://www.nami.org/Support-Education/NAMI-HelpLine/COVID-19-Information-and-Resources/COVID-19-Resource-and-Information-Guide">
      <h4> NAMI Covid Information Guide</h4>
      </a>
    </div>
  );
}
//ideally make this page a different filename, and then later connect to app.js
export default App;
