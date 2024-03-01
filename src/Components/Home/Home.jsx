import React from "react";
import img1 from "../../assets/img-home.svg";

export default function Home() {
  return (
    <>
      <header className="vh-75 d-flex align-items-center justify-content-center text-center py-4">
        <div>
          <img src={img1} alt="" className="w-75" />
          <h1 className="text-white fw-bolder my-3">START FRAMEWORK</h1>
          <div className="iconAfterBefore">
            <i className="fa-solid fa-star fa-xl text-white"></i>
          </div>
          <p className="text-white mt-4 ">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>
    </>
  );
}
