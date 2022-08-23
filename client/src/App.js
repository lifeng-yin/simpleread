import React, {useState, useEffect} from "react";

import TokenContext from "./components/signin/TokenContext/TokenContext"

import {getToken} from "./utilities/database"

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
    const [token, setToken] = useState("")
    useEffect(() => {
        async function doTokenThing() {
            let response = await getToken()
            console.log(response)
            setToken(response?.token)
        }
        
        doTokenThing()
    }, [])
    
  return (
    <TokenContext.Provider value={{token, setToken}} >
      <Navbar />
      <React.Suspense fallback={<div className="lazy-preloader"></div>}>
        <Routes>
          <Route path="/simpleread/" element={<Home />} />
          <Route path="/simpleread/explore" element={<Reviews />} />
          <Route path="/simpleread/add" element={<AddReview />} />
          <Route path="/simpleread/about" element={<About />} />
          <Route path="/simpleread/edit/:id" element={<Edit />} />
          <Route path="/simpleread/signin" element={<SignIn />} />
        </Routes>
      </React.Suspense>
    </TokenContext.Provider>
  );
};

export default App;