import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
// import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Route path="/" exact> exact agar membuat content awal hilang
      atau tergantikan oleh conten yang lainnya dya kga muncul di atas
      page yang lainnya */}
      <Route path="/" exact>
        <Notes />
      </Route>
      {/* <Route path="/notes">
        <Notes />
      </Route> */}

      <Route path="/createNote">
        <CreateNote />
      </Route>
    </Router>
  );
}

export default App;
