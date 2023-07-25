import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style/course.css";

function Course(props) {
  const navigate = useNavigate();

  return (
    <div className="courseBox">
      <img src={props.course.img_link} alt="Error" />
      <h4>{props.course.title}</h4>
      <p>{props.course.description}</p>
      <p>price: Rs. {props.course.price}/-</p>
      {/* <p>id: {props.course.id}</p> */}
      {/* <Button
        variant="contained"
        onClick={() => {
          navigate("/course" + props.course.id);
        }}
      >
        update
      </Button> */}
    </div>
  );
}

export default Course;
