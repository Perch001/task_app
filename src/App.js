import React from "react";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./component/AppRouter";
import NavBar from "./component/NavBar/NavBar";
import Applications from "./component/pages/Applications";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <AppRouter/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
