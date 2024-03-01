import React from "react";

export default function Contact() {
  return (
    <>
      <section className="portfolio text-center py-5">
        <h2 className="fw-bolder text-h2 py-">PORTFOLIO COMPONENT</h2>
        <div className="iconAfterBefore-portfolio mb-5">
          <i className="fa-solid fa-star fa-xl"></i>
        </div>
        <div className="w-50 m-auto">
          <form className="" action="">
            <input
              type="text"
              placeholder="userName"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="number"
              placeholder="userAge"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="email"
              placeholder="userEmail"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
            <input
              type="password"
              placeholder="userPassword"
              className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
            />
          </form>
            <button className="btn send text-white">Send Message</button>
        </div>
      </section>
    </>
  );
}
