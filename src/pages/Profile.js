import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>User Profile Card</h2>

      <div class="card-profile">
        <img src="/logo192.png" alt="John" />
        <h1>RefDev</h1>
        <p class="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <div style={{ margin: 24 }}>
          <Link to="#">
            <i class="fa fa-dribbble"></i>
          </Link>
          <Link to="#">
            <i class="fa fa-twitter"></i>
          </Link>
          <Link to="#">
            <i class="fa fa-linkedin"></i>
          </Link>
          <Link to="#">
            <i class="fa fa-facebook"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
