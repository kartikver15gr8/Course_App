import { useState } from "react";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import AddCourse from "./AddCourse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addCourse" element={<AddCourse />}></Route>
        </Routes>
      </Router>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/courses" element={<CreateCourse />}></Route>
          <Route path="/getCourses" element={<GetCourses />}></Route>
          <Route path="/changeCourse" element={<ChangeCourse />}></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
