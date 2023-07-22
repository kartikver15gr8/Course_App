import "./style/course.css";
function Course(props) {
  return (
    <div className="courseBox">
      <img src={props.course.img_link} alt="Error" />
      <h4>{props.course.title}</h4>
      <p>{props.course.description}</p>
      <p>price: Rs. {props.course.price}/-</p>
    </div>
  );
}

export default Course;
