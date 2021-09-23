import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import baseURL from "../../config/baseUrl";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "./Carousel.css";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/css';

export default function Carousel() {
  const [items, setItems] = useState();

  const getAllItems = async () => {
    try {
      const res = await axios.get(baseURL + "/items");
      // console.log(res.data);
      setItems(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  // console.log('items are:',items);

  return items ? (
    <div
      id="carouselExampleCaptions"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner container w-75 mx-auto">
        <h1 className="title" style={{ fontSize: "2rem" }}>
          Latest Items
        </h1>
        <br />
        <div className="carousel-item active">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <Link
              to={"items/singleItem/" + items[0]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[0].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />

                  <div className="card-body">
                    <h5 className="card-title ">{items[0].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[0].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"items/singleItem/" + items[1]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[1].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[1].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[1].createdAt}</Moment>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"items/singleItem/" + items[2]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[2].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[2].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[2].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <Link
              to={"items/singleItem/" + items[3]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[3].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[3].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[3].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"items/singleItem/" + items[4]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[4].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[4].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[4].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"items/singleItem/" + items[5]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[5].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[5].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[5].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <Link
              to={"items/singleItem/" + items[6]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[6].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[6].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[6].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"items/singleItem/" + items[7]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[7].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg "
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[7].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[7].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"items/singleItem/" + items[8]._id}
              className="text-decoration-none"
            >
              <div className="col">
                <div className="card ">
                  <img
                    src={
                      require(`../../../../images/${items[8].images[0]}`)
                        .default
                    }
                    className="d-block  carouselImg"
                    alt="pic2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items[8].name}</h5>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      Last updated{" "}
                      <Moment format="DD/MM/YYYY">{items[8].createdAt}</Moment>
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <button
        className="carousel-control-prev border-0 carouselBtn "
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
        <span className=" text-dark ">Previous</span>
      </button>
      <button
        className="carousel-control-next border-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className=" text-dark  ">Next</span>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  ) : (
    <div>Loading</div>
  );
}
