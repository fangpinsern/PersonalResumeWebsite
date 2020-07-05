import React, { Suspense } from "react";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./home/pages/Home";
import MainNavigation from "./shared/Navigation/MainNavigation";
import LoadingSpinner from "./shared/modals/LoadingSpinner";

import "./App.css";
import { generalConfig } from "./config/generalConfig";
import Skills from "./skills/pages/Skills";
import Education from "./education/pages/Education";
import Experience from "./experience/pages/Experience";

// In case you do not want to lazy load
// import About from "./about/pages/About";
// import Contact from "./contact/pages/Contact";

// Lazy loading
const About = React.lazy(() => import("./about/pages/About"));
const Contact = React.lazy(() => import("./contact/pages/Contact"));

function App() {
  const websiteTitle = generalConfig.websiteTitle;

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
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
    <React.Fragment>
      <Helmet>
        <title>{websiteTitle}</title>
      </Helmet>
      <Router>
        {/* <MainNavigation /> */}
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
    </React.Fragment>
  );
}

export default App;
