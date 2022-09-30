import React from "react";

export default function Banner() {
  return (
    <div className="banner h-25 m-2 d-flex  shadow ">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide  col-8  "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img
              src="https://image.shutterstock.com/image-photo/girl-on-mountain-peak-green-260nw-1922407226.jpg"
              className="d-block w-100"
              alt="trek"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item " data-bs-interval={3000}>
            <img
              src="https://t4.ftcdn.net/jpg/05/04/29/65/360_F_504296588_zKRAQzCJJYpT0vTlGQEbpNYDpi7Sh7HA.jpg"
              className="d-block w-100"
              alt="trek"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item " data-bs-interval={3000}>
            <img
              src="https://t4.ftcdn.net/jpg/05/04/29/65/360_F_504296588_zKRAQzCJJYpT0vTlGQEbpNYDpi7Sh7HA.jpg"
              className="d-block w-100"
              alt="trek"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previfous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="trend d-flex col-4 flex-column">
        <div className="trend1 shadow p-1  m-2 h-50">
          <div className="card text-bg-dark text-white ">
            <img src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/11/Famous-Fort-Maharashtra.jpg?w=1067&ssl=1"
              className="card-img" alt="fort-card" />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="trend2 shadow p-1 m-2 mx-1 h-50 " >
          <div className="card text-bg-dark text-white">
            <img src="https://mews.in/wp-content/uploads/2021/12/Forts-of-Maharashtra-696x365.jpg" className="card-img" alt="..." />
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
              <p className="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}
