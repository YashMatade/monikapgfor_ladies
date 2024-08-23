import React, { useEffect, useState } from "react";
import propertyImg from "../../assets/homeimage.png";
import "animate.css";
import "./SingleProperty.css";
import "@fortawesome/fontawesome-free/css/all.css";
import thetreroom from "../../assets/thetreroom.png";
import { getSinglePG } from "../../Routes/Routes";
import { useParams } from "react-router-dom";
import one from "../../assets/001.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propertydata from "../../data/data";
import { IoBook, IoCall } from "react-icons/io5";
import { BiBookAdd } from "react-icons/bi";

const Amenities = ({ amenity }) => {
  return (
    <div className="amenities-container mt-3">
      <div
        className="text-start mb-2"
        style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
      >
        Amazing Amenities
      </div>
      <div className="amenities-list">
        {amenity?.map((amenity, index) => (
          <div key={index} className="amenity-item shadow">
            <img
              className="me-3"
              src={amenity.amenity_icon}
              style={{ width: "20px", height: "15px" }}
            ></img>
            {amenity.amenity_title}
          </div>
        ))}
      </div>
    </div>
  );
};

const CommonAmenities = ({ commonamenity }) => {
  return (
    <div className="amenities-container mt-3">
      <div
        className="text-start mb-2"
        style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
      >
        Common Area Amenities
      </div>
      <div className="amenities-list">
        {commonamenity?.map((amenity, index) => (
          <div key={index} className="amenity-item shadow">
            <img
              className="me-3"
              src={amenity.amenity_icon}
              style={{ width: "20px", height: "20px" }}
            ></img>
            {amenity.amenity_title}
          </div>
        ))}
      </div>
    </div>
  );
};

const Facilities = ({ facility }) => {
  return (
    <div className="amenities-container mt-3">
      <div
        className="text-start mb-2"
        style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
      >
        PG Facilities
      </div>
      <div className="amenities-list">
        {facility?.map((facility, index) => (
          <div key={index} className="amenity-item shadow">
            <img
              className="me-3"
              src={facility.amenity_icon}
              style={{ width: "20px", height: "20px" }}
            ></img>
            {facility.amenity_title}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProperyDetails = () => {
  const { propertyname } = useParams();
  console.log(propertyname);
  const [readMore, setReadMore] = useState(false);
  const [hover, setHover] = useState({ private: false, sharing: false });
  const [propertyImage, setPropertyImage] = useState(one);
  const [pg, setPg] = useState(propertydata);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 576 ? 2 : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          slidesToShow: 2,
          auto: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const [animation, setAnimation] = useState("");

  const [screen, setScreen] = useState();

  // useEffect(() => {
  //   getSinglePG(propertyname).then((res) => {
  //     console.log(res);
  //     setPg(res.data);
  //     setPropertyImage(res.data.pg_images[0]);
  //   });
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleReadMore = () => setReadMore(!readMore);

  const handleImageClick = (image) => {
    setAnimation("animate__animated animate__fadeOut");
    setTimeout(() => {
      setPropertyImage(image);
      setAnimation("animate__animated animate__fadeIn");
    }, 500);
  };

  return (
    <div className="mt-3">
      <div className="  text-start ps-3 pe-3">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h1
              style={
                window.innerWidth < 576
                  ? {
                      fontWeight: "700",
                      fontSize: "20px",
                      padding: "10px 20px",
                      background: "black",
                      color: "red",
                      border: "",
                      borderRadius: "15px",
                      cursor: "pointer",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }
                  : {
                      fontWeight: "700",
                      fontSize: "40px",
                      padding: "10px 20px",
                      background: "black",
                      color: "red",
                      border: "",
                      borderRadius: "15px",
                      cursor: "pointer",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    }
              }
              className="text-center mb-3 mt-3"
            >
              {pg?.pg_name}
            </h1>

            <div
              style={
                window.innerWidth < 576
                  ? {
                      fontWeight: "500",
                      fontSize: "14px",
                      padding: "8px 16px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "15px",
                      cursor: "pointer",
                      textAlign: "center",
                      marginTop: "10px",
                    }
                  : {
                      fontWeight: "500",
                      fontSize: "18px",
                      padding: "8px 16px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "15px",
                      cursor: "pointer",
                      textAlign: "center",
                      marginTop: "10px",
                    }
              }
              className="text-center"
            >
              {pg?.pg_address}
            </div>
          </div>
          <div
            className={
              window.innerWidth < 576 ? "col-lg-3 text-center" : "col-lg-3"
            }
          >
            <div className="button-container">
              <a href="tel:9666741973" style={{ textDecoration: "none" }}>
                <button
                  className={
                    window.innerWidth < 576
                      ? "btn mt-4 text-center"
                      : "btn mt-4"
                  }
                  style={{
                    backgroundColor: "black",
                    fontSize: window.innerWidth < 576 ? "14px" : "18px",
                    borderRadius: "20px",
                    padding: "12px 24px",
                    fontWeight: "bold",
                    color: "red",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    transition: "all 0.3s ease",
                    width: "100%",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Contact Us: 9666741973
                </button>
              </a>
              <a
                href="https://forms.gle/4jhEpW3Y36U53RaT7"
                target="_blank"
                className="text-center"
                style={{
                  textDecoration: "none",
                  marginTop: window.innerWidth < 576 ? "10px" : "20px",
                }}
              >
                <button
                  className={
                    window.innerWidth < 576
                      ? "btn mt-4 text-center"
                      : "btn mt-4"
                  }
                  style={{
                    backgroundColor: "red",
                    fontSize: window.innerWidth < 576 ? "14px" : "18px",
                    borderRadius: "20px",
                    padding: "12px 24px",
                    fontWeight: "bold",
                    color: "white",
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                    transition: "all 0.3s ease",
                    width: "100%",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <BiBookAdd className="me-3" />
                  Book Room Now
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 col-12 d-flex justify-content-center">
          <img
            src={propertyImage}
            className={`img-fluid w-100 rounded-4 ${animation}`}
            alt="Property"
            style={
              window.innerWidth < 576
                ? {
                    objectFit: "cover",
                    height: "200px",
                    borderRadius: "20px",
                  }
                : {
                    objectFit: "cover",
                    height: "600px",
                    borderRadius: "20px",
                  }
            }
          />
        </div>
        <div className="row mt-3">
          <Slider {...settings}>
            {pg?.pg_images?.map((res, index) => (
              <div key={index} className="px-2">
                <div
                  onClick={() => handleImageClick(res)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={res}
                    className="img-fluid w-100 rounded-4"
                    alt="Property Thumbnail"
                    style={{
                      objectFit: "cover",
                      height: window.innerWidth < 576 ? "120px" : "150px",
                      borderRadius: "20px",
                      boxShadow:
                        propertyImage === res
                          ? "0px 4px 15px rgba(0, 0, 0, 0.3)"
                          : "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-start mt-3 mb-3">
          <span
            style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
          >
            {pg?.sex?.map((gender) => {
              return (
                <>
                  <img src={gender?.sex_icon} className="img-fluid" alt="" />
                  &nbsp; Single | Double | Triple
                </>
              );
            })}
          </span>
        </div>
        <div className="row">
          <div className="text-start" style={{ fontSize: "12px" }}>
            <i> *{pg?.condition_apply}</i>
          </div>
          <div className="col-lg-8 mt-5 mb-3">
            <div
              style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
            >
              About the Property
            </div>
            <div style={{ textAlign: "justify" }}>{pg?.about_property}</div>
            <div
              className="mt-5"
              style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
            >
              Property Rules
            </div>
            <div style={{ textAlign: "justify" }}>
              <ul>
                <li>No smoking</li>
                <li>Drinking alcohol not allowed</li>
                <li>Entry of opposite gender not allowed</li>
              </ul>
            </div>
            <div
              className="mt-5"
              style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
            >
              Location Highlights
            </div>
            <div style={{ textAlign: "justify" }}>
              {pg?.location_highlights}
            </div>
          </div>

          <div className="col-lg-4">
            {/* <div className="amenities-container">
              <h5>Common Area Amenities</h5>
              <hr className="divider" />
              <ul className="amenities-list">
                <li>
                  <img
                    src="path/to/ro-icon.png"
                    alt="RO"
                    className="amenity-icon"
                  />
                  RO
                </li>
                <li>
                  <img
                    src="path/to/lift-icon.png"
                    alt="Lift"
                    className="amenity-icon"
                  />
                  Lift
                </li>
                <li>
                  <img
                    src="path/to/wifi-icon.png"
                    alt="WiFi"
                    className="amenity-icon"
                  />
                  WiFi
                </li>
                <li>
                  <img
                    src="path/to/fridge-icon.png"
                    alt="Fridge"
                    className="amenity-icon"
                  />
                  Fridge
                </li>
                <li>
                  <img
                    src="path/to/powerbackup-icon.png"
                    alt="Power Backup"
                    className="amenity-icon"
                  />
                  Power Backup
                </li>
              </ul>
            </div> */}
            <div>
              <CommonAmenities commonamenity={pg?.commonamenity} />
            </div>
            <div>
              <Facilities facility={pg?.facility} />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Amenities amenity={pg?.amenity} />
          </div>
          {/* <div>
            <div>
              <div
                className="text-start"
                style={{
                  fontWeight: "600",
                  fontSize: "22px",
                  color: "#616161",
                }}
              >
                Foods Menu
              </div>
            </div>
            <div style={{ display: "flex", overflowX: "auto" }}>
              {pg?.foods_menu?.map((menu) => (
                <div
                  key={menu._id}
                  className="card"
                  style={{
                    flex: "0 0 auto",
                    width: "200px",
                    margin: "10px",
                    padding: "10px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      color: "#616161",
                    }}
                  >
                    Day: {menu.day}
                  </div>
                  {menu.slot.map((slot) => (
                    <div
                      key={slot._id}
                      style={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#616161",
                      }}
                    >
                      {slot.morning && `Morning: ${slot.morning}`}
                      {slot.afternoon && `Afternoon: ${slot.afternoon}`}
                      {slot.evening && `Evening: ${slot.evening}`}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div> */}
          <div>
            <div
              className="mb-3 mt-5 ms-2"
              style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
            >
              Foods Menu
            </div>
            <div className="foods-menu-container">
              {pg?.foods_menu?.map((menu) => (
                <div key={menu._id} className="food-card">
                  <div className="food-card-title">Day: {menu.day}</div>
                  {menu.slot.map((slot) => (
                    <div key={slot._id} className="food-card-slot">
                      {slot.morning && (
                        <div className="meal-time">Morning: {slot.morning}</div>
                      )}
                      {slot.afternoon && (
                        <div className="meal-time">
                          Afternoon: {slot.afternoon}
                        </div>
                      )}
                      {slot.evening && (
                        <div className="meal-time">Evening: {slot.evening}</div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="payment-info-container mb-5">
            <div
              style={{ fontWeight: "600", fontSize: "22px", color: "#616161" }}
            >
              Pay For What You Use
            </div>
            <div className="payment-info-section">
              <div className="payment-info-label">Electricity Charges:</div>
              <div className="payment-info-details">{pg?.electricity_unit}</div>
            </div>
            <div className="payment-info-section mt-3">
              <div className="payment-info-label">Maintenance Charges:</div>
              <div className="payment-info-details">
                {pg?.maintenance_charges}
              </div>
            </div>
          </div> */}

          {/* <div className="pg-details-container row ms-2 me-2 p-3 mt-5">
            <div className="col-lg-6 col-12">
              <div className="details-section">
                <div className="details-title">Sharing</div>
                <div className="details-content row mt-3">
                  <div className="col-lg-4 col-6">
                    <small>Type</small>
                    <b>Single Sharing</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Rent</small>
                    <b>Rs. 23,000 /-</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Maintanece</small>
                    <b>Rs. 3000 /-</b>
                  </div>
                </div>
              </div>
              <div className="details-section">
                <div className="details-title"></div>
                <div className="details-content row mt-3">
                  <div className="col-lg-4 col-6">
                    <small>Type</small>
                    <b>Double Sharing</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Rent</small>
                    <b>Rs. 23,000 /-</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Maintanece</small>
                    <b>Rs. 3000 /-</b>
                  </div>
                </div>
              </div>
              <div className="details-section">
                <div className="details-title"></div>
                <div className="details-content row mt-3">
                  <div className="col-lg-4 col-6">
                    <small>Type</small>
                    <b>Triple Sharing</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Rent</small>
                    <b>Rs. 23,000 /-</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Maintanece</small>
                    <b>Rs. 3000 /-</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="details-section">
                <div className="details-title">Terms</div>
                <div className="details-content row mt-3">
                  <div className="col-lg-4 col-6">
                    <small>Security Deposit</small>
                    <b>Rs. 12,000 /-</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Lock-in Period</small>
                    <b>3 months</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Notice Period</small>
                    <b>1 month</b>
                  </div>
                </div>
              </div>
              <div className="details-section">
                <div className="details-title"></div>
                <div className="details-content row mt-3">
                  <div className="col-lg-4 col-6">
                    <small>Security Deposit</small>
                    <b>Rs. 12,000 /-</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Lock-in Period</small>
                    <b>3 months</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Notice Period</small>
                    <b>1 month</b>
                  </div>
                </div>
              </div>
              <div className="details-section">
                <div className="details-title"></div>
                <div className="details-content row mt-3">
                  <div className="col-lg-4 col-6">
                    <small>Security Deposit</small>
                    <b>Rs. 12,000 /-</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Lock-in Period</small>
                    <b>3 months</b>
                  </div>
                  <div className="col-lg-4 col-6">
                    <small>Notice Period</small>
                    <b>1 month</b>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="bg-dark p-4 mt-5" style={{ borderRadius: "20px" }}>
            <div className="pg-details-container row ms-2 me-2 p-3 ">
              {/* Single Sharing */}
              <div className="col-lg-6 col-12">
                <div className="details-section">
                  <div className="details-title">Single Sharing</div>
                  <div className="details-content row mt-3">
                    <div className="col-lg-4 col-6">
                      <small>Rent</small>
                      <b>Rs. 20,000/-</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Security Deposit</small>
                      <b>Rs. 3,000/-</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Maintenance</small>
                      <b>Rs. 2,000/-</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Double Sharing */}
              <div className="col-lg-6 col-12">
                <div className="details-section">
                  <div className="details-title">Double Sharing</div>
                  <div className="details-content row mt-3">
                    <div className="col-lg-4 col-6">
                      <small>Rent</small>
                      <b>Rs. 12,000/-</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Security Deposit</small>
                      <b>Rs. 3,000/-</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Maintenance</small>
                      <b>Rs. 2,000/-</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Triple Sharing */}
              <div className="col-lg-6 col-12">
                <div className="details-section">
                  <div className="details-title">Triple Sharing</div>
                  <div className="details-content row mt-3">
                    <div className="col-lg-4 col-6">
                      <small>Rent</small>
                      <b>Rs. 9,000/-</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Security Deposit</small>
                      <b>Rs. 3,000/-</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Maintenance</small>
                      <b>Rs. 2,000/-</b>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms (Common for all) */}
              <div className="col-lg-6 col-12">
                <div className="details-section">
                  <div className="details-title">Terms</div>
                  <div className="details-content row mt-3">
                    <div className="col-lg-4 col-6">
                      <small>Notice Period</small>
                      <b>30 days</b>
                    </div>
                    <div className="col-lg-4 col-6">
                      <small>Maintenance</small>
                      <b>One Time</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mb-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.5695254092443!2d77.625068!3d12.935365999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzA3LjMiTiA3N8KwMzcnMzAuMiJF!5e0!3m2!1sen!2sin!4v1724395676772!5m2!1sen!2sin"
              width="100%"
              height="230px"
              style={{ border: 0, borderRadius: "20px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-5 text-start nearby-locations-title">
            Nearby Locations
          </div>
          <div className="text-start nearby-locations-description">
            <b>{pg?.pg_name}</b> is strategically placed nearby key office
            spaces and access roads
          </div>
          <div className="row mb-4">
            {pg?.nearby_location?.map((location, index) => (
              <div key={index} className="col-6 col-lg-3 mt-3">
                <div className="nearby-location-item p-2">
                  <div>{location.place}</div>
                  <div>{location.distance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProperyDetails;
