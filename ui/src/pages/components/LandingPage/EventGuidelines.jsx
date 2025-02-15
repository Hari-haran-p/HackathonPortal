import React from "react";
import Events from "../../../assets/event.png";
import Registration from "../../../assets/registration.png";
import Benefits from "../../../assets/benefits.png";

export default function EventGuidelines() {
  return (
    <>
      <section className="flex flex-col" id="aboutus">
        <div className="mb-6">
          <p className="infooo">ABOUT</p>
          <h1 className="info">
            TAN<span className="text-[#7f58f3]">S</span>HACK'22
          </h1>
        </div>
        <div className="md:flex md:flex-row flex-col">
          <div className="continer">
            <h3>Registration</h3>
            <center>
              <img
                src={Registration}
                alt="Registration Image"
                width="120px"
                height="120px"
              />
              <h4>Team Strength</h4>
              <p>
                <i
                  className="fa fa-dot-circle-o"
                  style={{ fontSize: "15px" }}
                ></i>{" "}
                Minimum: 3
              </p>
              <p>
                <i
                  className="fa fa-dot-circle-o"
                  style={{ fontSize: "15px" }}
                ></i>{" "}
                Maximum: 6
              </p>
            </center>
          </div>
          <div className="continer">
            <h3>Main Event</h3>
            <center>
              <img
                src={Events}
                alt="Event Image"
                width="120px"
                height="120px"
              />
              <p>
                <i
                  className="fa fa-dot-circle-o"
                  style={{ fontSize: "15px" }}
                ></i>{" "}
                Venue: Banquet Hall
              </p>
              <p>
                <i
                  className="fa fa-dot-circle-o"
                  style={{ fontSize: "15px" }}
                ></i>{" "}
                Date: 3rd and 4th December 2022
              </p>
            </center>
          </div>
          <div className="continer">
            <h3>Benefits</h3>
            <center>
              <img
                src={Benefits}
                alt="Benefits Image"
                width="120px"
                height="120px"
              />
              <p>
                <i
                  className="fa fa-dot-circle-o"
                  style={{ fontSize: "15px" }}
                ></i>{" "}
                Industry Mentoring for Top Performing Teams for their
                Projects/Products
              </p>
            </center>
          </div>
        </div>
      </section>
    </>
  );
}
