// Mock data for slider content
type SliderDataItem ={
    img: string;
    text: string;
    heading:string;
  };
  type SliderDataItems ={
    [key: string]: SliderDataItem;
  }
  export const sliderData:SliderDataItems = {
    "Digital Engineering": {
      img: "/digital-engineering.png",
      heading:"Digital Transformaton",
      text: "Empowering digital transformation through innovative engineering."
    },
    "Product Engineering": {
      img: "/product-engineering.png",
      heading:"Product Engineering",
      text: "Building robust, scalable products for the future."
    },
    "Application Development": {
      img: "/app-development.png",
      heading:"Application Development",
      text: "Custom solutions that drive business efficiency and success."
    },
    "Innovation Lab": {
      img: "/innovation-lab.png",
      heading:"Innovation Lab",
      text: "Where ideas meet innovation and transform into reality."
    },
    "UI/UX": {
      img: "/ui-ux.png",
      heading:"UI/UX",
      text: "Crafting intuitive and visually engaging user experiences."
    },
    "Artificial Intelligence (AI)": {
      img: "/ai.png",
      heading:"Artificial Intelligence (AI)",
      text: "Harnessing AI to make smarter, faster business decisions."
    },
    "Internet of Things (IoT)": {
      img: "/iot.png",
      heading:"Internet of Things (IoT)",
      text: "Connecting devices for an interconnected, smart ecosystem."
    },
    "Blockchain": {
      img: "/blockchain.png",
      heading:"Blockchain",
      text: "Secure, transparent solutions powered by blockchain."
    },
    "Data Science": {
      img: "/data-science.png",
      heading:"Data Science",
      text: "Data-driven insights for informed decision-making."
    },
    "Big Data & Analytics": {
      img: "/big-data.png",
      heading:"Big Data & Analytic",
      text: "Transforming data into actionable intelligence."
    }
  };