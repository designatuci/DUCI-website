import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
// import ReactGA from 'react-ga';
import {Helmet} from "react-helmet";
// import './Global.css';

import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Join from './routes/Join'
import Hey from './routes/Hey'
import Event from './routes/Event'
import Events from './routes/Events'
import Events_All from './routes/Events_All'
import Resources from './routes/Resources'
import Resources_Featured from './routes/Resources_Featured'
import Merch from './routes/Merch'
import PT from './routes/PT'
import Designathons from './routes/Designathons'
import Designathon22 from './routes/Designathon22'
import Contact from './routes/Contact'
import About from './routes/About'
import Brand from './routes/Brand'

// ReactGA.initialize('G-4WX6MFE69G');

function App() {
  return <>
    <Router>
      <ResetPage />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/join/" component={Join}/>
        <Route exact path="/hey/" component={Hey}/>
        {/* <Route exact path="/event/" component={Event}/> */}
        <Route exact path="/events/" component={Events}/>
        <Route exact path="/events/all" component={Events_All}/>
        <Route exact path="/resources/" component={Resources}/>
        <Route exact path="/resources/featured/" component={Resources_Featured}/>
        <Route exact path="/merch/" component={Merch}/>
        <Route exact path="/contact/" component={Contact}/>
        <Route exact path="/about/" component={About}/>
        <Route exact path="/pt/" component={PT}/>
        <Route exact path="/designathons/" component={Designathons}/>
        <Route exact path="/designathon22/" component={Designathon22}/>
        <Route exact path="/brand/" component={Brand}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </>
}

export default App;

var standbyElements
var animationi = 0

function ResetPage() {
  let { pathname } = useLocation();
  useEffect(() => {
    // A new page is loaded
    // ReactGA.pageview(window.location.pathname + window.location.search)
    animationi = 0
    window.scrollTo(0, 0)
    standbyElements = document.getElementsByClassName("wait")
    window.addEventListener("scroll",pageScroll)

    pageScroll()

  }, [pathname]);
  return null;
}
function pageScroll() {
  if (animationi >= standbyElements.length) {
    window.removeEventListener("scroll",pageScroll)
    return
  }
  while (true) {
    if (animationi >= standbyElements.length) {
      break
    }
    let element = standbyElements[animationi]
    if ( element.getBoundingClientRect().top < window.innerHeight - window.innerHeight*0.16 ) {
      element.classList.add("show")
      animationi += 1

    } else {
      break
    }
  }

}