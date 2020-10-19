import React from "react";
import "./App.css";
import "./Props.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} />
      <Footer />
    </BrowserRouter>
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
