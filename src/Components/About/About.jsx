import React from "react";

export default function About() {
  return (
    <>
      <section className="vh-100 about">
        <div className="div-1">
          <h2 className="text-white text-h2">ABOUT COMPONENT</h2>
          <div className="iconAfterBefore-about py-2 text-center">
            <i className="fa-solid fa-star fa-xl text-white"></i>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white fs-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-white fs-5">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
