import React from "react";
import styles from "./App.module.css";
import { HomePage, OntFound, Register, SignIn, Detail } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<OntFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
