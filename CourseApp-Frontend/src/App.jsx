import { useState } from "react";
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AddCourse from "./components/AddCourse";
import GetCourse from "./components/GetCourse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addCourse" element={<AddCourse />}></Route>
          <Route path="/getCourse" element={<GetCourse />}></Route>
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
