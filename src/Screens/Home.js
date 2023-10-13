import React from "react";
import "../App.css";
import { portfolio, counsel, why, EAP } from "../infotext/portfolio.js";
import logo from "../image/doctors.png";
import image1 from "../image/TCF-1-768x768.png";
import image2 from "../image/bayer.jpg";
import image3 from "../image/bayview-768x768.jpeg";
import image4 from "../image/fair-cg.jpg";
import image5 from "../image/foodpanda-768x768.png";
import image6 from "../image/loreal-768x768.png";
import image7 from "../image/zindagi-widout-text-768x752.png";
import image8 from "../image/amal.jpg";
import image9 from "../image/BV_Logo_Square.png";
import image10 from "../image/hbl.jpg";
import image11 from "../image/rb.jpg";
import image12 from "../image/5ATSRl3Wyt.jpeg"

const Home = () => {
  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  return (
    <div className="flex-col bg-metal ">
      <div className="flex pt-[8%] items-center justify-center px-[4%]">
        <div className="flex-col space-y-4">
          <span className="text-4xl font-bold">Health Assistance Program</span>
          <p className="text-2xl">
            A digital health program to increase the health awareness
          </p>
          <ul className="flex-col list-outside lis">
            {portfolio.map((item) => (
              <li className="text-xl">{"• " + item.info}</li>
            ))}
          </ul>
          <div className="flex ">
            <button className="bg-sky text-white px-[4%] py-[3%] rounded-full font-bold">
              CONTACT US NOW
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="health image" className="custom-image" />
        </div>
      </div>
      
      <div className="flex pt-[8%] items-center justify-center px-[4%] space-x-4">
        <div>
          <img src={logo} alt="health image" className="custom-image" />
        </div>
        <div className="flex-col space-y-4">
          <span className="text-4xl font-bold">Digital EAP</span>
          <p className="text-2xl">
            Watch you teams emotional health improve in real time
          </p>
          <ul className="flex-col list-outside lis">
            {EAP.map((item) => (
              <li className="text-xl">{"• " + item.title}</li>
            ))}
          </ul>
          <div className="flex ">
            <button className="bg-sky text-white px-[4%] py-[3%] rounded-full font-bold">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      <div className="flex pt-[8%] items-center justify-center px-[4%]">
        <div className="flex-col space-y-4">
          <span className="text-4xl font-bold">
            Meet Our Mental Health Counselors
          </span>
          <p className="text-xl">{counsel}</p>
          <div className="flex ">
            <button className="bg-sky text-white px-[4%] py-[3%] rounded-full font-bold">
              CONTACT US NOW
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="health image" className="w-[500vh] h-[80vh]" />
        </div>
      </div>

      <div className="flex pt-[8%] items-center justify-center px-[4%]">
        <div className="flex-col space-y-4">
          <span className="text-4xl font-bold">Why HealthCare?</span>
          {why.map((item) => (
            <ul className="flex-col space-y-2 ">
              <li className="text-2xl font-bold text-sky-600">{item.title}</li>
              <li className="text-xl">{item.desc}</li>
            </ul>
          ))}
        </div>
        <div>
          <img src={logo} alt="Idontknow" className="custom-image" />
        </div>
      </div>

      <div className="flex items-center justify-between px-[4%] pt-[4%]">
        <span className="text-4xl font-bold">Our Customers</span>
        <div className="grid grid-cols-4 gap-4">
          {imageArray.map((image, index) => (
            <img
              key={index} // Make sure to provide a unique key for each image element
              src={image}
              alt={`Image ${index + 1}`}
              className="w-44" // You can apply CSS classes as needed
            />
          ))}
        </div>
      </div>

      <div className="flex pt-[8%] items-center justify-center px-[4%]">
        <div className="flex-col space-y-4">
          <span className="text-4xl font-bold flex">
          Take the First Step Towards Holistic Wellness
          </span>
          <div className="flex ">
            <button className="bg-sky text-white px-[4%] py-[3%] rounded-full font-bold">
              CONTACT US NOW
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="health image" className="w-[150vh] h-[80vh]" />
        </div>
      </div>

    </div>
  );
};

export default Home;
