import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    inbee,
    postgress,
    // firebase,
    // swagger
    ecommerce,
    dashboard,
    movie
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mathematician",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Mongo DB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name:"postgress",
      icon:postgress
    },
    // {
    //   name:"firebase",
    //   icon:firebase
    // },
    // {
    //   name:"swagger",
    //   icon:swagger
    // }
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Inbeesight Technology",
      icon: inbee,
      iconBg: "white",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Designing and developing APIs and Swagger documentation for seamless integration and communication between software components",
        "Identified and resolved bugs in a Node.js Express application, ensuring smooth functionality and optimal performance",
        "Conducted thorough debugging and troubleshooting to pinpoint the root causes of the issues",
        "Implemented necessary code modifications and fixes to address the identified bugs",
        "Collaborated with the development team to validate the bug fixes and ensure they aligned with the application’s requirements and standards",
        "Conducted rigorous testing to verify the effectiveness of the bug fixes and prevent regression",
        "Contributing to the development of the ReactJS frontend, leveraging your expertise to enhance user experience and ensure responsiveness",
        "Providing support in manual testing activities, including test case creation, execution, and defect reporting",
        "• Utilized the AWS SDK to seamlessly integrate AWS cloud services into the application"

      ],
    },
    
  ];
  

  
  const projects = [
    {
      name: "E-commerce",
      description:
        "The ecommerce app is a streamlined platform that simplifies online shopping. With an intuitive interface, extensive product selection, and secure payment options, it offers a seamless experience for purchasing a wide range of items, from electronics to fashion, all delivered to your doorstep with convenience and reliability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/unaisshemim",
    },
    {
      name: "Admin Dashboard",
      description:
        "The admin dashboard I will describe is a feature-rich web-based interface designed specifically for administrators and authorized personnel. It provides an extensive array of graphs, charts, and detailed information to enable comprehensive monitoring, analysis, and control of a system, application, or website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },{
          name:"chartjs",
          color:"orange-text-gradient"
        }
      ],
      image: dashboard,
      source_code_link: "https://github.com/unaisshemim",
    },
    {
      name: "Movie Review ",
      description:"The movie review app is a must-have for film enthusiasts. It has a user-friendly interface for discovering, exploring, and sharing movie reviews. With a vast database of films, it offers comprehensive reviews from critics and users, enabling genre browsing, ratings, and detailed film information.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/unaisshemim",
    },
  ];
  
  export { services, technologies, experiences, projects };