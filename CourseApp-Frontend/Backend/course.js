const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
let fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

try {
  ADMIN = JSON.parse(fs.readFileSync("admins.json", "utf8"));
  USERS = JSON.parse(fs.readFileSync("users.json", "utf8"));
  COURSES = JSON.parse(fs.readFileSync("courses.json", "utf8"));
} catch {
  ADMIN = [];
  USERS = [];
  COURSES = [];
}

const SECRET_KEY = "Chal_Tujhe_Token_Banaun!";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).send("Forbidden!");
      } else {
        req.user = user;
        next();
      }
    });
  }

  res.status(401).send("No authHeader!");
};

app.post("/admin/signup", (req, res) => {
  const { username, password } = req.body;
  for (let elem of ADMIN) {
    if (elem.username === username) {
      res.status(403).send("User Already Exists!");
    }
  }

  let newAdmin = {
    username: username,
    password: password,
  };

  const token = jwt.sign({ username, role: "admin" }, SECRET_KEY, {
    expiresIn: "1h",
  });

  ADMIN.push(newAdmin);
  fs.writeFileSync("admins.json", JSON.stringify(ADMIN));
  res.status(200).json({ message: "Admin signed up successfully!", token });
});

app.post("/admin/login", (req, res) => {
  //   const { username, password } = req.body;
  const username = req.headers.username;
  const password = req.headers.password;
  let existingUser = false;
  for (let elem of ADMIN) {
    if (elem.username === username && elem.password === password) {
      existingUser = true;
      break;
    }
  }

  if (existingUser) {
    const token = jwt.sign({ username, role: "admin" }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Admin Logged In Successfully", token });
  }
  res.status(403).send("No user found!");
});

app.post("/admin/course", authenticateJWT, (req, res) => {
  const course = req.body;
  //   let existingCourse = false;
  for (let elem of COURSES) {
    if (elem.title === course.title) {
      //   existingCourse = true;
      res.status(401).send("Course already exists!");
    }
  }

  let newCourse = {
    id: Math.floor(Math.random() * 100000),
    title: course.title,
    description: course.description,
    price: course.price,
    img_link: course.img_link,
    published: true,
  };

  COURSES.push(newCourse);
  fs.writeFileSync("courses.json", JSON.stringify(COURSES));
  res.status(200).json({ message: "Course added", newCourse });
});

app.put("/admin/course/:id", authenticateJWT, (req, res) => {
  let id = parseInt(req.params.id);
  let changedCourse = req.body;

  for (let elem of COURSES) {
    if (elem.id === id) {
      elem.title = changedCourse.title;
      elem.description = changedCourse.description;
      elem.price = changedCourse.price;
      elem.img_link = changedCourse.img_link;
      elem.published = changedCourse.published;
      res.status(200).json({ message: "Course updated", elem });
    }
  }
  res.status(403);
});

app.get("/admin/course", authenticateJWT, (req, res) => {
  res.status(200).json(COURSES);
});

app.get("/admin", authenticateJWT, (req, res) => {
  res.status(200).json(ADMIN);
});

// Users Routes

// app.post("/users/signup", (req, res) => {
//   const { username, password } = req.body;
//   const user = USERS.find((u) => u.username === username);
//   if (user) {
//     res.status(403).json({ message: "User already exists" });
//   } else {
//     const newUser = { username, password };
//     USERS.push(newUser);
//     fs.writeFileSync("users.json", JSON.stringify(USERS));
//     const token = jwt.sign({ username, role: "user" }, SECRET, {
//       expiresIn: "1h",
//     });
//     res.json({ message: "User created successfully", token });
//   }
// });

// app.post("/users/login", (req, res) => {
//   const { username, password } = req.headers;
//   const user = USERS.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     const token = jwt.sign({ username, role: "user" }, SECRET, {
//       expiresIn: "1h",
//     });
//     res.json({ message: "Logged in successfully", token });
//   } else {
//     res.status(403).json({ message: "Invalid username or password" });
//   }
// });

// app.get("/users/courses", authenticateJwt, (req, res) => {
//   res.json({ courses: COURSES });
// });

// app.post("/users/courses/:courseId", authenticateJwt, (req, res) => {
//   const course = COURSES.find((c) => c.id === parseInt(req.params.courseId));
//   if (course) {
//     const user = USERS.find((u) => u.username === req.user.username);
//     if (user) {
//       if (!user.purchasedCourses) {
//         user.purchasedCourses = [];
//       }
//       user.purchasedCourses.push(course);
//       fs.writeFileSync("users.json", JSON.stringify(USERS));
//       res.json({ message: "Course purchased successfully" });
//     } else {
//       res.status(403).json({ message: "User not found" });
//     }
//   } else {
//     res.status(404).json({ message: "Course not found" });
//   }
// });

// app.get("/users/purchasedCourses", authenticateJwt, (req, res) => {
//   const user = USERS.find((u) => u.username === req.user.username);
//   if (user) {
//     res.json({ purchasedCourses: user.purchasedCourses || [] });
//   } else {
//     res.status(403).json({ message: "User not found" });
//   }
// });

app.listen(3000, () => {
  console.log("App hosted successfully!");
});
