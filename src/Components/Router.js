import React from "react";
import { Route, Switch } from "react-router";
import Certificate from "./ComponentInsideCom/Certificate";
import Projects from "./ComponentInsideCom/Project";
import ContactUs from "./ComponentInsideCom/ContactUs";
import Profile from "./ComponentInsideCom/Profile";
import Education from "./ComponentInsideCom/Education"

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/ComponentInsideCom/Certificate" component={Certificate} />
        <Route exact path="/ComponentInsideCom/Projects" component={Projects} />
        <Route exact path="/ComponentInsideCom/ContactUs" component={ContactUs} />
        <Route exact path="/ComponentInsideCom/Education" component={Education}/>
      </Switch>
    </>
  );
};
export default Router;
