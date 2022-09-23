import React from 'react'

export default function Banner(){
    return (
        <div className="banner"> 
          <div
  id="carouselExampleDark"
  className="carousel carousel-dark slide m-auto w-50 h-25"
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
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="https://image.shutterstock.com/image-photo/girl-on-mountain-peak-green-260nw-1922407226.jpg" className="d-block w-100" alt="trek" />
      <div className="carousel-caption d-none d-md-block">
   
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://t4.ftcdn.net/jpg/05/04/29/65/360_F_504296588_zKRAQzCJJYpT0vTlGQEbpNYDpi7Sh7HA.jpg" className="d-block w-100" alt="trek" />
      <div className="carousel-caption d-none d-md-block">
    
      </div>
    </div>
    <div className="carousel-item">
     
      <div className="carousel-caption d-none d-md-block">
        
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
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

        </div>
    )
}