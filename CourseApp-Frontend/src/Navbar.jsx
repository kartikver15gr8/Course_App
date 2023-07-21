import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1>Coursera</h1>
      <div className="btn">
        {/* <Button variant="contained">Admin</Button>
        <Button variant="outlined">User</Button> */}

        <Button
          variant="contained"
          onClick={() => {
            navigate("/signup");
          }}
        >
          signup
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            navigate("/login");
          }}
        >
          login
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            navigate("/addCourse");
          }}
        >
          Add
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
