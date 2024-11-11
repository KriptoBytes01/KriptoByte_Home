import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetServiceSlide from "@/components/getServiceSlide";
import NewsService from "@/components/NewsService";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <div>
        {/* Header Section */}
        <div className="h-screen mx-6 mt-32 md:mt-52 p-28 bg-[url('/bg-image.jpg')] bg-cover bg-center text-white"
          style={{ filter: 'brightness(1.)' }}>
          <h2 className="text-3xl md:text-5xl font-mono text-balance md:text-balance">
            Driving Digital Growth, Led By Technology
          </h2>
          <p className="text-balance md:text-balance text-2xl mt-10 font-serif">
            Fueling business with sustained digital capabilities,<br /> resilient products, and next-gen solutions.
          </p>
          <button className="bg-teal-400 p-2 text-lg mt-6 w-fit h-fit">
          {`Let's Talk`} <FontAwesomeIcon icon={faArrowRight} className="mx-4" />
          </button>
        </div>

        {/* Services Section */}
        <GetServiceSlide />

        {/* newsroom section */}

        <NewsService />
    
 {/* Stories Section */}
<div className="bg-black text-white p-10">
  <h1 className="text-white text-5xl text-center font-semibold mt-14 mb-16">Selected {`Clients'`} Success Stories</h1>

  <div className="grid mx-20 mt-8 grid-cols-1 md:grid-cols-3 gap-6">
    {/* Left Column - Two Stacked Boxes */}
    <div className="md:col-span-2 flex flex-col gap-6">
      <div className="bg-gray-800 flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-row gap-2 mb-4">
            <div className="bg-gray-600 w-fit p-1">Artificial Intelligence</div>
            <div className="bg-gray-600 w-fit p-1">Hi-Tech</div>
          </div>
          <h2 className="text-xl font-bold mb-2">Client Story 1</h2>
          <p className="text-gray-300">This is a brief description of the success story, showcasing impactful results.</p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image width={100} height={100} src="/client1.png" alt="Client Story 1" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="bg-gray-800 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image width={100} height={100} src="/client2.png" alt="Client Story 2" className="w-full h-full object-cover" />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-row gap-2 mb-4">
            <div className="bg-gray-600 w-fit p-1">Artificial Intelligence</div>
            <div className="bg-gray-600 w-fit p-1">Hi-Tech</div>
          </div>
          <h2 className="text-xl font-bold mb-2">Client Story 2</h2>
          <p className="text-gray-300">This is a description of the client’s journey with our assistance, leading to great outcomes.</p>
        </div>
      </div>
    </div>

    {/* Right Column - Single Box */}
    <div className="bg-gray-800  md:flex-row">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <div className="flex flex-row gap-2 mb-4">
          <div className="bg-gray-600 w-fit p-1">Artificial Intelligence</div>
          <div className="bg-gray-600 w-fit p-1">Hi-Tech</div>
        </div>
        <p className="text-gray-300">This story highlights the unique strategies and results achieved for this client.</p>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image width={100} height={100} src="/client3.png" alt="Client Story 3" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps= async() =>{

// }