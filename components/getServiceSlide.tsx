"use client";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { sliderData } from "@/lib/ServiceSliderData";

export default function GetServiceSlide() {
    const services = Object.keys(sliderData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeLink = services[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };


  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % services.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + services.length) % services.length;
    setCurrentIndex(prevIndex);
  };

  

  return (
    <>
     {/* Services Section */}
     <div className="bg-black p-40">
          <h1 className="text-white text-5xl mb-4">What We Do</h1>
          <div className="flex space-x-8">
            {/* Links for Services */}
            <ul className="text-white mt-16 w-1/4">
              {services.map((service, index) => (
                <li key={service} className={`mb-4 text-xl cursor-pointer ${activeLink === service ? 'border-l-4 border-red-500 pl-2' : 'pl-4'}`}>
                  <Link href="#" onClick={() => goToSlide(index)}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Slider Section */}
            <div className="w-3/4 bg-black  mt-16 p-10 h-2/4 rounded-lg relative overflow-hidden">
              {/* Left Arrow */}
              <button onClick={goToPrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
              </button>

              {/* Slider Content */}
              <Image width={100} height={100} src={sliderData[activeLink].img} alt={activeLink} className="w-full h-96 object-cover opacity-70  " />
              <div className="absolute inset-0 mx-14 text-white flex flex-col mt-12 items-start justify-start p-10">
                <h2 className="text-3xl text-balance font-serif items-center justify-center">{sliderData[activeLink].heading}</h2>
                <p className="mt-4 text-balance text-xl ">{sliderData[activeLink].text}</p>
              <button className=" mt-6 border border-white w-fit h-fit p-2 ">
                Know More 
                <FontAwesomeIcon icon={faArrowRight} className="ml-3"/>
              </button>
              </div>

              {/* Right Arrow */}
              <button onClick={goToNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              </button>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  index === currentIndex ? "bg-red-500 text-white" : "bg-gray-600 text-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

    
    </>
  )
}
