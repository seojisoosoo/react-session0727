import React from "react";
import Cards from "./pages/Cards";
import Card from "./pages/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Newmember from "./components/Newmember";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cards />}>
            <Route path=":memId" element={<Card />} />
          </Route>
        </Routes>
      </Router>
      <br />
      <Newmember />
    </>
  );
};

export default App;
