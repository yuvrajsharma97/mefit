import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Myplan from "./pages/myplan/myplan";

// Lazy load the components
const NotFound = lazy(() => import("./pages/error/errorpage"));
const About = lazy(() => import("./pages/about/about"));
const Home = lazy(() => import("./pages/home/home"));
const Action = lazy(() => import("./pages/action/action"));
const Yoga = lazy(() => import("./pages/action/yoga/yoga"));
const Weighttraining = lazy(() =>
  import("./pages/action/weighttraining/weighttraining")
);
const Bodyweighttraining = lazy(() =>
  import("./pages/action/bodyweighttraining/bodyweighttraining")
);
const Running = lazy(() => import("./pages/action/running/running"));
const Profile = lazy(() => import("./pages/profile/profilepage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/action" element={<Action />} />
          <Route path="/action/yoga" element={<Yoga />} />
          <Route path="/action/weighttraining" element={<Weighttraining />} />
          <Route
            path="/action/bodyweighttraining"
            element={<Bodyweighttraining />}
          />
          <Route path="/action/running" element={<Running />} />
          <Route path="/myplan" element={<Myplan />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
