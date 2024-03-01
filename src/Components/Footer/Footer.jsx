import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const navigateToFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100056881707164",
      "_blank"
    );
  };
  const navigateToTwitter = () => {
    window.open("https://twitter.com/ah_helmy22", "_blank");
  };
  const navigateToLinkedin = () => {
    window.open("https://www.linkedin.com/in/ahmed-helmy-57453b248/", "_blank");
  };
  const navigateToGithub = () => {
    window.open("https://github.com/ahmedhelmy272", "_blank");
  };
  return (
    <>
      <footer className=" pt-5 text-center">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h3 className="text-white  mb-3">LOCATION</h3>
                <p className="text-white mb-2">2215 John Daniel Drive</p>
                <p className="text-white mb-2">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3 className="text-white  mb-3">AROUND THE WEB</h3>
                <div className="icon d-flex justify-content-center align-items-center">
                  <div className="div-icon d-flex justify-content-center align-items-center me-3">
                    <Link to={"/"} onClick={navigateToFacebook}>
                      <i className="fa-brands fa-facebook fa-lg text-white"></i>
                    </Link>
                  </div>
                  <div className="div-icon d-flex justify-content-center align-items-center me-3">
                    <Link to={"/"} onClick={navigateToTwitter}>
                      <i className="fa-brands fa-twitter fa-lg text-white"></i>
                    </Link>
                  </div>
                  <div className="div-icon d-flex justify-content-center align-items-center me-3">
                    <Link to={"/"} onClick={navigateToLinkedin}>
                      <i className="fa-brands fa-linkedin-in fa-lg text-white"></i>
                    </Link>
                  </div>
                  <div className="div-icon d-flex justify-content-center align-items-center me-3">
                    <Link to={"/"} onClick={navigateToGithub}>
                      <i className="fa-brands fa-github fa-lg text-white"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h3 className="text-white  mb-3">ABOUT FREELANCER</h3>
                <p className="text-white mb-2">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-feet text-white py-3">
          <p>Copyright © Your Website 2024</p>
        </div>
      </footer>
    </>
  );
}
