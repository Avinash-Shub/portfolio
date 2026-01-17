export const resumeData = {
  profile: {
    name: "Sidam Avinash",
    role: "React Developer (Web/Android)",
    phone: "+91 9398499354",
    email: "sidamavinash1234@gmail.com",
    github: "https://github.com/Avinash-Shub",
    summary: "Results-driven Associate Developer with 1.5 years of experience in building web and mobile applications using ReactJS, React Native, Node.js, and MongoDB. Skilled in creating responsive UIs, state management, and integrating native modules. Experienced in 3D animations with Three.js.",
  },
  experience: [
    {
      role: "Associate Developer",
      company: "Capgemini India Private Ltd.",
      period: "May 2024 - Present",
      projects: [
        {
          name: "USB File Reader POC",
          tech: "React Native (Native Modules)",
          details: [
            "Created a React Native POC enabling users to access, view, and manage files/folders from a USB pen drive using Native Modules.",
            "Implemented file system features such as create, delete, rename, and search, supported by long-press actions.",
            "Added robust permission handling and smooth USB detection logic.",
            "Designed a user-friendly interface with bottom tab navigation focusing on performance."
          ]
        },
        {
          name: "NUMI 2.0",
          tech: "React.js, React Three Fiber, GSAP",
          details: [
            "Developed an immersive web experience using React.js with advanced scroll-based and timeline animations.",
            "Integrated React Three Fiber to render and animate a detailed 3D bathroom model.",
            "Built multiple animated sections including text reveals and media-triggered interactions.",
            "Optimized performance and responsiveness across devices."
          ]
        }
      ]
    }
  ],
  skills: {
    languages: ["Java", "JavaScript", "SQL", "Node.js", "HTML", "CSS", "MongoDB", "MySQL"],
    frameworks: ["ReactJS", "React Native", "Three.js", "React Three Fiber", "Express.js", "Redux Toolkit", "GSAP", "Tailwind CSS", "Material UI", "Bootstrap"],
    tools: ["GitHub", "Postman", "VS Code", "Vercel"],
    other: ["RESTful APIs", "Native Modules", "JWT", "Axios", "JSON"]
  },
  projects: [
    {
      name: "Video Streaming App",
      tech: "React Native, Video SDK Tool",
      description: "A real-time video streaming application enabling users to create rooms and host meetings.",
      keyFeatures: [
        "Real-time video streaming with room creation.",
        "Unique meeting ID generation for invites.",
        "Core video controls: play, pause, rewind, full screen.",
        "Low latency optimization for Android devices."
      ]
    }
  ],
  certifications: [
    {
      title: "Build Websites from Scratch with HTML & CSS",
      provider: "Udemy",
      description: "Gained foundational skills in structuring and styling web pages using semantic HTML and modern CSS techniques.",
      logo: "udemy",
      image: "/certs/html-css.jpg"
    },
    {
      title: "The Complete JavaScript Course",
      provider: "Udemy",
      description: "Learned modern JavaScript concepts including DOM manipulation, ES6+, asynchronous programming, and project-based application development.",
      logo: "udemy",
      image: "/certs/javascript.jpg"
    },
    {
      title: "The Complete MongoDB Course",
      provider: "Udemy",
      description: "Acquired hands-on experience with NoSQL database concepts, CRUD operations, schema design, and MongoDB data modeling.",
      logo: "udemy",
      image: "/certs/mongodb.jpg"
    },
    {
      title: "React.js Tutorial",
      provider: "W3Schools / Coursera",
      description: "Completed practical training in building interactive UI components using React fundamentals such as components, props, and state.",
      logo: "w3schools",
      image: "/certs/react-js.jpg"
    },
    {
      title: "React Native",
      provider: "Meta / Coursera",
      description: "Learned cross-platform mobile app development concepts including components, navigation, styling, and device-level integration.",
      logo: "meta",
      image: "/certs/react-native.jpg"
    }
  ]
};
