import Header from './components/Header';
// import { Navbar } from './components/Navbar';
// import Productcontainer from './components/Productcontainer';
import Productdetails from './components/Productdetails';
import Productlisting from './components/Productlisting';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Productlisting/>}/>
        <Route path="/product/:productid" element={<Productdetails/>}/>
        <Route>Error 404 Not found!</Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
