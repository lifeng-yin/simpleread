import React, { useState, useEffect } from "react";

import TokenContext from "./components/signin/TokenContext/TokenContext";

import { getToken } from "./utilities/database";

//import react router
import { Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./pages/About/About.js"));
const Home = React.lazy(() => import("./pages/Home/Home.js"));
const Reviews = React.lazy(() => import("./pages/Reviews/Reviews.js"));
const AddReview = React.lazy(() => import("./pages/AddReview/AddReview.js"));
const Edit = React.lazy(() => import("./pages/Edit/Edit.js"));
const SignIn = React.lazy(() => import("./pages/SignIn/SignIn.js"));
const Navbar = React.lazy(() => import("./Navbar.js"));

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    async function doTokenThing() {
      let response = await getToken();
      setToken(response?.token);
      setUser(response?.user);
    }

    doTokenThing();
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken, user, setUser }}>
      <Navbar />
      <React.Suspense fallback={<div className="lazy-preloader"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Reviews />} />
          <Route path="/add" element={<AddReview />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/*" element={<div>404</div>} />
        </Routes>
      </React.Suspense>
    </TokenContext.Provider>
  );
};

export default App;
