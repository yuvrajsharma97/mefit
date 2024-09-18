import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Lazy load the components
const NotFound = lazy(() => import("./pages/error/errorpage"));
const About = lazy(() => import("./pages/about/about"));
const Home = lazy(() => import("./pages/home/home"));
const Action = lazy(() => import("./pages/action/action"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/action" element={<Action />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
