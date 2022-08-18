import React from "react";


//import react router
import { Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./pages/About/About.js"));
const Home = React.lazy(() => import("./pages/Home/Home.js"));
const Reviews = React.lazy(() => import("./pages/Reviews/Reviews.js"));
const AddReview = React.lazy(() => import("./pages/AddReview/AddReview.js"));
const Edit = React.lazy(() => import("./pages/Edit/Edit.js"))
const Navbar = React.lazy(() => import("./Navbar.js"));


const App = () => {
  return (
    <>
      <Navbar />
      <React.Suspense fallback={<div className="lazy-preloader"></div>}>
        <Routes>
          <Route path="/simpleread/" element={<Home />} />
          <Route path="/simpleread/explore" element={<Reviews />} />
          <Route path="/simpleread/add" element={<AddReview />} />
          <Route path="/simpleread/about" element={<About />} />
          <Route path="/simpleread/edit/:id" element={<Edit />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;