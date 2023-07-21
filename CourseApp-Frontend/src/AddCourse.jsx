import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img_link, setImgLink] = useState("");
  const [publish, setPublish] = useState(false);

  return (
    <div className="container">
      <h2>Add Course!</h2>
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
          fetch("http://localhost:3000/admin/course", {
            method: "POST",
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
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default AddCourse;
