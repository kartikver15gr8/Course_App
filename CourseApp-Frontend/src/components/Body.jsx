function Body() {
  return (
    <>
      <div
        className="mainbox"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        <div className="head" style={{ width: "40vw" }}>
          <h1>Welcome to the Ultimate Learning Platform!</h1>
          <p style={{ marginTop: "20px", overflowWrap: "break-word" }}>
            As a mission-driven organization, we're relentlessly pursuing our
            vision of a world where every learner can access education to unlock
            their potential, without the barriers of cost or location.
          </p>
        </div>
        <img
          style={{ width: "40vw", borderRadius: "15px 2px 15px 2px" }}
          src="../public/img.jpg"
          alt=""
        />
      </div>

      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50vh",
          border: "2px dashed gray",
          borderRadius: "20px",
          padding: "10px",
          width: "95vw",
        }}
      >
        <h3>All Rights Reserved copyright © 2023</h3>
      </footer>
    </>
  );
}

export default Body;
//   box-shadow: 0 0 8px 8px white inset;

// #footer {
//     position: fixed,
//     bottom: '0',
//     width: '100%'',
//     height: '60px',   /* Height of the footer */
//     background: '#6cf',
//  }
