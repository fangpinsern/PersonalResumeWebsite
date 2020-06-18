import React, { Suspense } from "react";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/pages/Home";
import MainNavigation from "./shared/Navigation/MainNavigation";
import LoadingSpinner from "./shared/modals/LoadingSpinner";

import "./App.css";

// In case you do not want to lazy load
// import About from "./about/pages/About";
// import Contact from "./contact/pages/Contact";

// Lazy loading
const About = React.lazy(() => import("./about/pages/About"));
const Contact = React.lazy(() => import("./contact/pages/Contact"));

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          {routes}
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
