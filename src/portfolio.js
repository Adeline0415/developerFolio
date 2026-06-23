/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adeline",
  title: "Hi, I'm",
  name: "Chia-Suan Yu",
  subTitle: emoji(
    "I am a computer vision and machine learning researcher developing robotic perception, autonomous navigation, and AI-powered enterprise systems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17RwpCh0qEGsetHBw-Qisv1rU2F7JZLeB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Adeline0415",
  linkedin: "https://www.linkedin.com/in/adeline0415/",
  gmail: "adeline041503@gmail.com",
  facebook: "https://www.facebook.com/yu.chia.suan.0415",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I build computer vision systems, full-stack AI applications, and robot learning.",
  skills: [
    emoji(
      "⚡ Develop computer vision and deep learning pipelines for robotics and medical imaging."
    ),
    emoji("⚡ Deploy full-stack applications using React, Laravel, Azure, and real-time AI services."),
    emoji(
      "⚡ Research embodied agents, reinforcement learning, and adaptive planning for robotic systems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/cmuLogo.png"),
      subHeader: "M.S. in Computer Vision",
      duration: "Aug. 2026 - Dec. 2027",
      desc: "Robotics Institute, School of Computer Science",
      descBullets: [
        "Planned courses: Advanced Computer Vision, Deep Learning System, and Introduction to Robot Learning."
      ]
    },
    {
      schoolName: "National Tsing Hua University",
      logo: require("./assets/images/nthuLogo.png"),
      subHeader: "B.S. in Computer Science",
      duration: "Sep. 2021 - Jun. 2025",
      descBullets: ["Selected courses: Machine Learning, Robotic Navigation, Algorithms, Operating Systems, and Computer Architecture."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Computer Vision / ML",
      progressPercentage: "90%"
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Robotics & Systems",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Academia Sinica",
      companylogo: require("./assets/images/AcademiaSinicaLogo.png"),
      date: "Mar. 2026 – Jul. 2026",
      desc: "Supervised by Dr. Tyng-Luh Liu \n Focusing on runtime failure detection for generative robotic policies.",
      descBullets: [
        " Co-developed a success-only failure-detection layer for generative robot policies to safeguard closed-loop manipulation.",
        " Evaluated on the RoboMimic benchmark, achieving a 0.912 macro AUROC with a false positive rate under 6%."
      ]
    },
    {
      role: "Research Development Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "Mar. 2025 – Sep. 2025",
      desc: "Customer Success Unit",
      descBullets: [
        "Built genAI systems for enterprise use cases with the Semantic Kernel multi-agent framework and Azure AI Foundry.",
        "Deployed customized AI agents to Azure via Azure Function App, enabling real-time access via Server-Sent Events(SSE).",
        "Prototyped emerging NLWeb technologies for executive showcase at Microsoft DevDays Asia 2025."
      ]
    },
    {
      role: "Research Assistant",
      company: "National Tsing Hua University",
      companylogo: require("./assets/images/nthuLogo.png"),
      date: "Jan. 2024 – Jul. 2025",
      desc: "Supervised by Dr. Po-Chih Kuo \n Developed a Deep Learning Model to Differentiate Malignant from Benign Pleural Effusion",
      descBullets: [
        "Engineered a ResNet-18 deep learning model to classify malignant pleural effusion from ultrasound images.",
        "Trained on 1706 internal data and fine-tuned on 60 external cases, achieving AUCs of 0.81 (internal) and 0.75 (external).",
        "Served as first author and presenter, won Outstanding Academic Paper Award at TSPCCM 2024."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Key research and development projects demonstrating computer vision, robotics, and AI systems.",
  projects: [
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Pikachu Seeker: Autonomous Robot Navigation",
      projectDesc: "Integrated an autonomous robot in Unity using ROS 2 and YOLO for RGB-only target tracking.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Adeline0415/Pikachu_Seeker"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Tetris Battle AI Agent",
      projectDesc: "Implemented a Deep Q-Network with experience replay and adaptive rewards, achieving superhuman gameplay performance.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Adeline0415/TetrisBattle_with_Q-learning_model"
        }
      ]
    },
    {
      image: require("./assets/images/IOT.jpg"),
      projectName: "Smart Energy Saving IoT System",
      projectDesc: "Built an ESP32-based environmental monitoring system with MQTT real-time transmission, winning 2nd Prize in the 2024 Mobile Communications Competition.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Adeline0415/Smart_Energy_Saving_and_IoT_Application"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "BOYO Welfare Foundation Rental Platform",
      projectDesc: "Developed a full-stack rental platform using Laravel and database integration for early intervention services.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Adeline0415/BOYO-rental_platform"
        }
      ]
    },
    {
      image: require("./assets/images/Wallistic.png"),
      projectName: "Wallistic: Mobile Wallpaper App",
      projectDesc: "Designed and deployed a cross-platform React Native app to optimize wallpaper browsing and user efficiency.",
      footerLink: [
        {
          name: "View Repo",
          url: "https://github.com/Adeline0415/Wallistic_a_ReactNative_mobile_app"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Awards 🏆 "),
  subtitle:
    "Honors, awards, and publications from my research and development work.",

  achievementsCards: [
    {
      title: "Outstanding Academic Paper Award (Oral Presentation)",
      subtitle:
        "Awarded by the Taiwan Society of Pulmonary and Critical Care Medicine (TSPCCM) 2024.",
      image: require("./assets/images/academic_award.jpg"),
      imageAlt: "Academic Award",
      footerLink: [
        {
          name: "Award Detail",
          url: ""
        }
      ]
    },
    {
      title: "2nd Prize, Mobile Communications Practice Competition",
      subtitle:
        "Recognized for the Smart Energy Saving IoT System project in 2024.",
      image: require("./assets/images/IOT.jpg"),
      imageAlt: "Competition Award",
      footerLink: [
        {
          name: "Competition Info",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Publications Section
const publicationSection = {
  title: "Publications",
  publications: [
    {
      title:
        "A deep learning model based on ultrasound imaging to differentiate malignant from benign pleural effusion: a multicenter cohort study.",
      description:
        "Chang-Wei Wu, Chia-Suan Yu, Yen-Lin Chen, Po-Chih Kuo, Meng-Rui Lee, et al.",
      meta: "Respiratory Research, 2026.",
      link: "https://doi.org/10.1186/s12931-026-03574-w",
      linkLabel: "paper"
    },
    {
      title:
        "FlowGuard: Success-Only Runtime Monitoring for Receding-Horizon Generative Robot Policies.",
      description:
        "Pei-Chi Chen, Chia-Suan Yu, Tsung-Wei Ke, Hwann-Tzong Chen, Tyng-Luh Liu.",
      meta: "Under Submission to NeurIPS 2026.",
      link: "",
      linkLabel: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "(+886)980-218-448",
  email_address: "adeline041503@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set false to hide this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  publicationSection
};
