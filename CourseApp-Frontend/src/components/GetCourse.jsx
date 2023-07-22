import { useEffect, useState } from "react";
import Course from "./Course";

function GetCourse() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/admin/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourse(data.courses);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "5px",
      }}
    >
      {/* <h2>Courses</h2> */}
      {course.map((course) => {
        return <Course course={course} />;
      })}
    </div>
  );
}

export default GetCourse;
