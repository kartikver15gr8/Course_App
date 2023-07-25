import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function UpdateCourse() {
  let { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img_link, setImgLink] = useState("");
  const [publish, setPublish] = useState(false);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/admin/course/${courseId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCourse(data.course);
      });
  }, []);

  if (!course) {
    return (
      <div
        style={{
          height: "100vh",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        Loading....
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Update Course!</h2>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        type="text"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        type="text"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        type="text"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Image Link"
        variant="outlined"
        type="text"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setImgLink(e.target.value);
        }}
      />

      <TextField
        id="outlined-basic"
        label="Publish"
        variant="outlined"
        type="text"
        style={{ margin: "5px" }}
        onChange={(e) => {
          setPublish(e.target.value);
        }}
      />
      {/* <span className="publish" style={{ display: "flex" }}>
        <p>Publish</p>
        <Checkbox
          onChange={(e) => {
            setPublish(e.target.value);
          }}
        />
      </span> */}

      <Button
        variant="contained"
        onClick={() => {
          const token = localStorage.getItem("token");
          fetch(`http://localhost:3000//admin/course/${courseId}`, {
            method: "PUT",
            body: JSON.stringify({
              title,
              description,
              price,
              img_link,
              publish,
            }),
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          });
          let updatedCourse = {
            id: courseId,
            title: title,
            description: description,
            price: price,
            img_link: img_link,
            publish: publish,
          };
          setCourse(updateCourse);
        }}
      >
        Update
      </Button>
    </div>
  );
}

export default UpdateCourse;
