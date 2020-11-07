/* eslint-disable no-empty-pattern */
import React, { useEffect } from "react";
import "./App.css";
import "./Props.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signin from "./components/Signin";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signin">
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
