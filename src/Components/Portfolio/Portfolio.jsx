import React, { useState } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

export default function Portfolio() {
  const [data, setData] = useState([
    { img: img1, id: "img1" },
    { img: img2, id: "img2" },
    { img: img3, id: "img3" },
    { img: img1, id: "img4" },
    { img: img2, id: "img5" },
    { img: img3, id: "img6" },
  ]);
  return (
    <>
      <section className="portfolio text-center py-5">
        <h2 className="fw-bolder text-h2">PORTFOLIO COMPONENT</h2>
        <div className="iconAfterBefore-portfolio">
          <i className="fa-solid fa-star fa-xl"></i>
        </div>
        <div className="container py-4">
          <div className="row g-4">
            {data.map((item) => (
              <>
                <div className="col-md-4">
                  <div className="portfolio-item">
                    <img src={item.img} alt="" className="w-100 rounded-3" />
                    <div
                      data-bs-toggle="modal"
                      data-bs-target={"#" + item.id}
                      className="plus rounded-3"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {data.map((item) => (
              <>
                <div
                  className="modal fade"
                  id={item.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body p-0">
                        <img src={item.img} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
