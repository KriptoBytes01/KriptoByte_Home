"use client";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const newsroomData = [
    { title: "News 1",editor:"xyz", description: "Description of News 1" },
    { title: "News 2",editor:"xyz", description: "Description of News 2" },
    { title: "News 3",editor:"xyz",description: "Description of News 3" },
    { title: "News 4",editor:"xyz", description: "Description of News 4" },
  ];

  


export default function NewsService() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const newsSlide = (index: number) => {
    setCurrentIndex(index);
  };


  return (
    <>
    <div className="relative bg-black">
      {/* Background Image with Overlay */}
      <div className="relative ">
        <Image width={100} height={100} src="/news.png" alt="news-img" className="w-[760px] h-[500px] object-cover opacity-70" />

        {/* Heading and Paragraph Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-center">
          <h1 className="text-white text-5xl mx-20 font-bold mb-6 underline">Newsroom</h1>
          <p className="text-white mx-20 mb-36 text-2xl font-serif text-balance">Stay tuned with the latest from<br /> KriptoBytes</p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="absolute  top-1/2 left-2/3 mx-16 p-3 transform -translate-x-1/2 -translate-y-1/2 w-2/3 overflow-hidden">
        <div
          className="flex mx-20  h-[300px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 55}%)` }}
        >
          {newsroomData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800  p-8  shadow-lg w-full max-w-[50%] mx-3 flex-shrink-0"
            >
              <h2 className="text-2xl text-gray-300 font-semibold  mb-2">{item.title}</h2>
              <button className="border w-fit h-fit p-2 text-gray-300 mt-2 mb-3">{item.editor}</button>
              <p className="text-gray-400">{item.description}</p>
              <Link href=""> 
              <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 mt-4"/>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6">
          {newsroomData.map((_, i) => (
            <button
              key={i}
              onClick={() => newsSlide(i)}
              className={`w-4 h-4 mx-1 rounded-full ${currentIndex === i ? 'bg-teal-400' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
