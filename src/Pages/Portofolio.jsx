import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "React JS" },
  { icon: "next-js.svg", language: "Next JS" },
  { icon: "laravellogo.svg", language: "Laravel" },
  { icon: "vite.svg", language: "Vite" },
  // { icon: "nodejs.svg", language: "Node JS" },
  // { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "framer.svg", language: "Framer Motion" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
  { icon: "vercel.svg", language: "Vercel" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  var [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  // const fetchData = useCallback(async () => {
    //   try {
      //     const projectCollection = collection(db, "projects");
      //     const certificateCollection = collection(db, "certificates");
      
  //     const [projectSnapshot, certificateSnapshot] = await Promise.all([
  //       getDocs(projectCollection),
  //       getDocs(certificateCollection),
  //     ]);
      
  //     const projectData = projectSnapshot.docs.map((doc) => ({
    //       id: doc.id,
  //       ...doc.data(),
  //       TechStack: doc.data().TechStack || [],
  //     }));
      
  //     console.log("abc123", projectData);
  //     const certificateData = certificateSnapshot.docs.map((doc) => doc.data());
  
  //     setProjects(projectData);
  //     setCertificates(certificateData);
  
  //     // Store in localStorage
  //     localStorage.setItem("projects", JSON.stringify(projectData));
  //     localStorage.setItem("certificates", JSON.stringify(certificateData));
  //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // }, []);
    
    // useEffect(() => {
      //   fetchData();
      // }, [fetchData]);
      
      const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  projects = [
    
    {
      "id": "tool-matrix",
      "Features": [
        "AI-powered handwriting recognition using a Python-based model integrated with the Gemini API, achieving 95% accuracy in solving handwritten math problems.",
        "A visually appealing and dynamic web platform designed for seamless interaction and an optimal user experience.",
        "Comprehensive calculators for various domains, catering to a wide range of user needs."
      ],
      "Link": "https://tool-matrix.vercel.app/",
      "Img": "/tool matrix dark.png",
      "TechStack": [
          "Python", "React JS" , "Node JS", "Tailwind CSS", "Gemini API", "Vite", "GitHub", "Vercel"
      ],
      "Github": "https://github.com/masabqurban",
      "Description": "A web-based platform developed in React JS, Node JS, Python and Tailwind CSS featuring calculators for various domains. Integrated a Python-powered AI model utilizing Gemini API to solve handwritten math problems. Achieved 95% accuracy in solving math queries through the AI-powered handwriting recognition feature.",
      "Title": "Tool Matrix (FYP)"
    },
  {
    "id": "portfolio",
    "Features": [
      "Interactive Physics: Objects move and react dynamically with the cursor, influenced by gravity and magnetic forces.",
      "Realistic Gravity and Magnetism: Simulates natural physics, creating immersive and engaging interactions.",
      "Fluid Animations: Smooth transitions and object movements enhance user experience with Matter.js-powered effects."
    ],
    "Link": "https://masab-qurban-portfolio.vercel.app/",
    "Img": "/portfolio1.png",
    "TechStack": [
      "React JS", "Matter JS" , "Tailwind CSS", "Framer Motion", "Vite", "GitHub", "Vercel"
    ],
    "Github": "https://github.com/masabqurban",
    "Description": "My portfolio integrates Matter.js to bring interactive physics to life. Using Matter.js, I’ve created a dynamic environment where objects move with the cursor, influenced by gravity-like forces, and even magnetic effects. This adds a layer of realism and engagement, offering an immersive experience that showcases my skills in combining design and physics for web interactivity.",
    "Title": "MotionCode Portfolio"
  },
  {
    "id": "png-to-text",
    "Features": [
        "A versatile web platform designed to simplify file processing with tools for image conversion, compression, and text extraction.",
        "Enhanced file handling through integrated features that streamline image optimization and text extraction tasks.",
        "Efficient processing with advanced tools that improve workflow and save time in handling various file types."
    ],
    "Link": "https://pngtotext.com/",
    "Img": "/pngtotext dark.png",
    "TechStack": [
      "Laravel", "JavaScript" , "Tailwind CSS", "Figma", "MySQL", "Tesseract OCR", "GitHub"
    ],
    "Github": "https://github.com/masabqurban",
    "Description": "Developed a feature-rich web-based platform using PHP, Laravel and Tailwind CSS. Integrated tools for image conversion, compression, and text extraction to enhance file processing efficiency.",
    "Title": "PNG to TEXT"
  },
  {
  "id": "snowdreamstudios",
  "Features": [
    "A Swiss-based digital studio offering a visually immersive experience with fluid animations, interactive elements, and a modern design powered by Framer Motion and Tailwind CSS.",
    "Showcases a comprehensive portfolio, including case studies, projects, services, and team insights, all presented in a structured and visually appealing way.",
    "Built with Next.js for fast load times, optimized performance, and seamless navigation, ensuring a top-tier user experience across devices."
  ],
  "Link": "https://snowdreamstudios.com/",
  "Img": "/snowdreamstudios.png",
  "TechStack": [
    "Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Figma", "GitHub", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "Snow Dream Studios is a Swiss-based digital studio blending cutting-edge tech with stunning design. Built with Next.js, Tailwind CSS, Framer Motion, and JavaScript, and hosted on Vercel, it delivers a visually rich, interactive experience. The platform features smooth animations, a modern design, and a comprehensive portfolio, including case studies, services, career opportunities, and team insights. With intuitive design and optimized performance, it sets a new standard for corporate websites.",
  "Title": "Snow Dream Studios"
},
{
  "id": "estorefoam",
  "Features": [
    "Users can input foam measurements to instantly generate a visual representation of the foam’s size and shape, enhancing the shopping experience.",
    "Offers a wide variety of foam materials, including polyurethane and polyethylene, cut to any shape or size, catering to diverse industries.",
    "Built with PHP Laravel and Tailwind CSS, the website features a sleek, user-friendly design with seamless navigation for easy browsing and purchasing."
  ],
  "Link": "https://estorefoam.co.uk/",
  "Img": "/estorefoam.png",
  "TechStack": [
    "Laravel", "Tailwind CSS", "JavaScript", "Figma", "GitHub"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "Estorefoam, the UK’s largest online foam supplier since 2000, has a revamped e-commerce platform built with PHP Laravel and Tailwind CSS. The website offers custom foam visualization, allowing users to input measurements and see a visual representation of their foam. With over 25 years of expertise, it provides high-quality foam materials, including polyurethane and polyethylene, cut to any shape or size. Catering to upholsterers, crafters, and more, the platform combines modern design, functionality, and ease of use for an exceptional shopping experience.",
  "Title": "Estorefoam"
},
{
  "id": "sds-erp",
  "Features": [
    "Centralizes business operations, including project management, resource allocation, and client data, for improved efficiency and collaboration.",
    "Provides real-time analytics and reporting tools, enabling data-driven decision-making and better tracking of studio performance.",
    "Built with PHP Laravel and Tailwind CSS, the ERP system features a sleek, modern interface with intuitive navigation for seamless workflow management."
  ],
  "Link": "",
  "Img": "/ERP.png",
  "TechStack": [
    "Laravel", "Tailwind CSS", "JavaScript", "GitHub"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "The SDS ERP system is a powerful, centralized platform designed to streamline operations for Snow Dream Studios. Built with PHP Laravel and Tailwind CSS, it offers tools for managing projects, resources, and client data with precision. The system includes real-time analytics and reporting features, empowering data-driven decisions and performance tracking. With its modern, user-friendly interface, the SDS ERP enhances collaboration and workflow efficiency, ensuring seamless operations for the studio’s creative and business needs.",
  "Title": "SDS - ERP"
},
{
  "id": "sbs-rms",
  "Features": [
    "A mobile-friendly POS system designed for seamless order management, payment processing, and real-time inventory tracking on the go.",
    "Provides real-time sales analytics and reporting tools, enabling businesses to make data-driven decisions and optimize performance.",
    "Built with PHP Laravel and Tailwind CSS, the RMS system features a sleek, modern interface with intuitive navigation for quick and efficient transactions."
  ],
  "Link": "",
  "Img": "/RMS.png",
  "TechStack": [
    "Laravel", "Tailwind CSS", "JavaScript", "GitHub"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "The SBS RMS is a robust Mobile POS system designed to streamline retail and hospitality operations. Built with PHP Laravel and Tailwind CSS, it offers tools for order management, payment processing, and real-time inventory tracking. The system includes real-time sales analytics and reporting features, empowering businesses to make data-driven decisions and optimize performance. With its modern, user-friendly interface, the SBS RMS ensures quick and efficient transactions, making it an ideal solution for businesses on the go.",
  "Title": "SBS - RMS"
},
{
  "id": "sbs-crm",
  "Features": [
    "A comprehensive CRM system designed to manage client relationships, track leads, and streamline communication for brokers and agents.",
    "Provides real-time analytics and reporting tools, enabling brokers to make data-driven decisions and optimize client engagement strategies.",
    "Built with PHP Laravel and Tailwind CSS, the CRM system features a sleek, modern interface with intuitive navigation for efficient client and lead management."
  ],
  "Link": "",
  "Img": "/CRM.png",
  "TechStack": [
    "Laravel", "Tailwind CSS", "JavaScript", "GitHub"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "The SBS CRM is a powerful broker system designed to enhance client relationship management for brokers and agents. Built with PHP Laravel and Tailwind CSS, it offers tools for tracking leads, managing client interactions, and streamlining communication. The system includes real-time analytics and reporting features, empowering brokers to make data-driven decisions and optimize engagement strategies. With its modern, user-friendly interface, the SBS CRM ensures efficient client and lead management, making it an essential tool for brokers in the real estate and financial industries.",
  "Title": "SBS - CRM"
},
{
  "id": "Sertify",
  "Features": [
    "Real-time case tracking and collaboration tools with automated deadline alerts to ensure timely legal submissions.",
    "Role-based access control (RBAC) to safeguard sensitive client data and restrict permissions by seniority or department.",
    "Integrated encrypted document vault with AI-powered search, ensuring quick retrieval and compliance with UAE data protection laws.",
  ],
  "Link": "",
  "Img": "/Sertify.png",
  "TechStack": [
    "React JS", "Node JS", "MySQL", "Tailwind CSS", "GitHub", "Vite", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "Sertify is a modern, secure admin panel designed exclusively for Dubai-based legal professionals, developed using React.js for a dynamic frontend and Node.js for a robust backend. It streamlines case management, client communication, document handling, and appointment scheduling with an intuitive interface. Features include role-based access, real-time updates, encrypted data storage, and compliance with UAE legal standards. Built for scalability, Sertify empowers law firms to enhance productivity, organize workflows, and deliver seamless client services while adhering to Dubai’s regulatory requirements.", 
  "Title": "Sertify"
},
{
  "id": "ZENE",
  "Features": [
    "Unified dashboard for managing services, real estate listings, e-commerce products, orders, and transactions with real-time inventory tracking and automated order processing.",
    "Secure multi-payment gateway integration supporting credit cards, digital wallets, and local payment methods, backed by end-to-end encryption and real-time financial analytics.",
    "Customizable vendor/agent roles with granular permissions, audit logs, and commission tracking to streamline operations and ensure transparency across diverse business verticals.",
  ],
  "Link": "",
  "Img": "/ZENE.png",
  "TechStack": [
    "React JS", "Node JS", "MySQL", "Tailwind CSS", "GitHub", "Vite", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "Zene is a comprehensive all-in-one vendor admin panel built with React.js and Node.js, enabling seamless management of services, real estate, e-commerce, orders, and transactions. It offers a unified dashboard with real-time inventory tracking, automated workflows, and integrated multi-payment gateways, all secured by end-to-end encryption. Designed for scalability, Zene simplifies cross-industry operations with customizable roles, audit trails, and compliance tools for businesses in Dubai and beyond.", 
  "Title": "ZENE"
},
{
  "id": "0NE",
  "Features": [
    "AI-powered personalized fitness plans with step-by-step video guides, calorie tracking, and adaptive recommendations based on user progress.",
    "Real-time health dashboards with interactive graphs (weight, steps, hydration, calories) and cross-device synchronization for seamless tracking.",
    "Secure HIPAA-compliant data storage, end-to-end encryption, and smart alerts for hydration, exercise, and goal milestones.",
  ],
  "Link": "",
  "Img": "/0NE.png",
  "TechStack": [
    "React JS", "Node JS", "MySQL", "Tailwind CSS", "GitHub", "Vite", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "0NE is a holistic health management platform developed with React.js and Node.js, offering real-time tracking of weight, steps, water intake, calories (burned/consumed), and personalized exercise guides with step-by-step video tutorials. It features interactive graphs for trend analysis, AI-driven health recommendations, and goal-setting tools. Built with end-to-end encryption, the app ensures secure storage of sensitive health data while providing cross-device synchronization. Ideal for fitness enthusiasts and healthcare providers, 0NE simplifies wellness journeys with actionable insights and compliance with global health standards.", 
  "Title": "0NE"
},
{
  "id": "shopease",
  "Features": [
    "Seamless client management with order history tracking, automated customer segmentation, and real-time communication tools for sellers.",
    "Real-time sales metrics, inventory insights, and customer behavior reports to optimize pricing and marketing strategies.",
    "Scalable, responsive frontend and backend architecture with a user-friendly interface for effortless browsing and checkout experiences."
  ],
  "Link": "",
  "Img": "/ShopEase.png",
  "TechStack": [
    "Next JS", "Tailwind CSS", "TypeScript", "GitHub"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "ShopEase is a modern E-Commerce platform crafted as a personal project, leveraging Next.js, TypeScript, and Tailwind CSS for a performant and visually polished experience. It showcases dynamic product catalogs, real-time inventory management, and a secure checkout process with integrated payment gateways. The platform includes smooth animations, personalized user dashboards, and AI-powered product recommendations for tailored shopping journeys. Built with clean code architecture and mobile-first responsiveness, ShopEase emphasizes intuitive navigation, fast load times, and developer-friendly scalability, serving as a robust showcase of full-stack development and modern design practices.",
  "Title": "ShopEase"
},
{
  "id": "mind-vs-machine",
  "Features": [
    "Adaptive AI opponent that learns from your moves, making each game more challenging and engaging. Also includes a multiplayer mode for real-time matches against friends.",
    "Keyboard and touch controls provide flexible gameplay, allowing players to use arrow keys and Enter for precise moves or tap for smooth interactions on any device.",
    "Dark and light mode toggle lets you switch themes for a comfortable visual experience, ensuring clear visibility and reduced eye strain in any lighting condition."
  ],
  "Link": "https://mind-vs-machine-tic-tac-toe-game.vercel.app/",
  "Img": "/mind vs machine.png",
  "TechStack": [
    "React JS", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "A modern twist on the classic Tic Tac Toe game, built with React.js and JavaScript and styled using Tailwind CSS. This game features an intelligent AI opponent with adaptive difficulty, challenging players to think strategically. It also includes a multiplayer mode for real-time competitive matches and move analytics to help refine strategies. The sleek, retro-modern design ensures a visually appealing experience, while touch-friendly controls make it accessible across all devices. With full keyboard navigation support, players can effortlessly place their moves using arrow keys and the Enter key. A built-in dark and light mode toggle enhances visibility and comfort, allowing for seamless gameplay in any environment.",
  "Title": "Mind vs Machine Game"
},
{
  "id": "snap-puzzle-game",
  "Features": [
    "Players can upload their own images to create personalized puzzles, making each game unique and more engaging.",
    "The game records the number of moves and completion time, helping players analyze their performance and improve their skills.",
    "Features adaptive difficulty scaling, smooth animations, and logic-testing grids for a challenging yet enjoyable puzzle-solving experience."
  ],
  "Link": "https://snap-puzzle-game.vercel.app/",
  "Img": "/snap puzzle game 1.png",
  "TechStack": [
    "React JS", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "A fast-paced puzzle game built with React.js and JavaScript, styled with Tailwind CSS. Features drag-and-drop tile mechanics and dynamic difficulty scaling. Includes smooth animations, a minimalist UI, and a progress tracker with scoreboards. Players can upload custom images to generate unique puzzles, adding a personal touch to the gameplay. The game also tracks moves and time, allowing players to analyze their performance and improve their puzzle-solving skills. Designed for cross-device play, it combines logic-testing grids with vibrant visuals for an engaging brain-teasing experience.",
  "Title": "Snap Puzzle Game"
},
{
  "id": "wormhole-snake-game",
  "Features": [
    "Wormhole portals, speed boosts, and maze challenges add unique twists to traditional snake gameplay, making each level more dynamic and unpredictable.",
    "Keyboard-based movement with precise controls ensures smooth navigation and responsiveness, allowing players to maneuver the snake with accuracy and ease.",
    "Global leaderboard system tracks high scores and player rankings, encouraging competition and replayability as users strive to improve their performance."
  ],
  "Link": "https://wormhole-snake-game.vercel.app/",
  "Img": "/wormhole snake game.png",
  "TechStack": [
    "React JS", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"
  ],
  "Github": "https://github.com/masabqurban",
  "Description": "A retro-inspired arcade game built with React.js and JavaScript, styled with Tailwind CSS. It enhances classic snake gameplay with wormhole portals, speed boosts, and maze challenges, adding new layers of excitement. The game features fluid animations, smooth controls, and dynamic obstacles for an engaging experience. Players can navigate using keyboard arrow keys for precise movement. A global leaderboard system tracks high scores, encouraging competitive play. Optimized for performance, it blends nostalgic mechanics with modern physics for a fast-paced, gravity-defying adventure.",
  "Title": "Wormhole Snake Game"
}
]
 useEffect (() => {
  localStorage.setItem("projects", JSON.stringify(projects));
 },[])
  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        {/* <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        > */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <CardProject
                      Img={project.Img}
                      Title={project.Title}
                      Description={project.Description}
                      Link={project.Link}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
            </div>
            {projects.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('projects')}
                  isShowingMore={showAllProjects}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {certificates.length > initialItems && (
              <div className="mt-6 w-full flex justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        {/* </SwipeableViews> */}
      </Box>
    </div>
  );
}