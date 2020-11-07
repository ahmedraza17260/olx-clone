import React from "react";
import "./App.css";
import "./Props.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./components/Signin";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signin">
            {/* <Header /> */}
            <Signin />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Router>
//   <div className="app">
//     <Header />
//     <Switch>
//       <Route path="/">
//         <Home />
//         <Footer />
//       </Route>
//     </Switch>
//   </div>
// </Router>
