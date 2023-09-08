import React from "react";
import {Header} from "./components/Header/header";
import "boxicons";
import {BrowserRouter as Router} from "react-router-dom";
import Paginas from "./components/Paginas";
import {DataProvider} from "./context/Dataprovider";
import { Cart } from "./components/Cart/Cart";


function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header/>
      <Cart/>
      <Paginas/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
