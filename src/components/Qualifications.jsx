import React from "react";
import { Box, Typography } from "@mui/material";
import { Star, GraduationCap, BriefcaseBusiness, Award } from "lucide-react";

const HighlightItem = ({ highlight }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors">
        {highlight}
      </span>
    </li>
  );
};
const Qualifications = () => {
  const qualifications = [
    {
      type: "Education",
      entries: [
        {
          title: "Bachelor of Science in Computer Science (Honours)",
          institution: "Government College University, Faisalabad, Pakistan",
          year: "2020 - 2024",
          marks: "CGPA: 3.55/4.00",
        },
        {
          title: "Intermediate of Computer Science (ICS)",
          institution: "Tips College of Science, Faisalabad, Pakistan",
          year: "2018 - 2020",
          // marks: "Marks: 70%",
        },
        {
          title: "Matriculation in Science",
          institution: "Government High School, Sheikhupura, Pakistan",
          year: "2015 - 2017",
          // marks: "Marks: 89%",
        },
      ],
    },
    {
      type: "Experience",
      entries: [
        {
          title: "Jr. Web Developer",
          company: "VendAxis FZ-LLC, Faisalabad, Pakistan",
          year: "02-2025 - Present",
        },
        {
          title: "Front-End Web Developer (Intern)",
          company: "Snow Dream Studios, Faisalabad, Pakistan",
          year: "11-2024 - 01-2025",
        },
        {
          title: "Data Entry Operator & Accountant",
          company: "Cambridge International College, Faisalabad, Pakistan",
          year: "05-2023 - 10-2023",
        },
        {
          title: "Lecturer in Computer Science",
          company: "Spirit Idea Tech System, Faisalabad, Pakistan",
          year: "05-2021 - 04-2023",
        },
      ],
    },
    {
      type: "Certificates",
      entries: [
        {
          title: "Web Development",
          institution: "Spirit Idea Tech System, Faisalabad, Pakistan",
          year: "2023",
        },
        {
          title: "Diploma in Computer Office Management",
          institution: "Quaid-e-Azam Educational College, Faisalabad, Pakistan.",
          year: "2020",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 3, md: 5 },
        width: "100%",
      }}
    >
      {/* First Column: Experience */}
      <Box>
        {qualifications
          .filter((qual) => qual.type === "Experience")
          .map((qual, index) => (
            <Box
              key={qual.type}
              sx={{
                mt: { xs: 1, md: 0 }, // Reduce margin-top for small screens
                mb: { xs: 0, md: 3 }, // Reduce margin-bottom for small screens
              }}
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  <BriefcaseBusiness className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  {qual.type}
                </h3>

                <div className="space-y-4">
                  {qual.entries.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300" />
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2">
                        <Typography
                          variant="h6"
                          sx={{ color: "#fff", fontWeight: 500 }}
                          className="text-white group-hover/title:text-white transition-colors"
                        >
                          {entry.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#94a3b8" }}
                          className="text-gray-300 group-hover/title:text-white transition-colors"
                        >
                          {entry.company} <br /> {entry.year}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          ))}
      </Box>

      {/* Second Column: Education and Certificates */}
      <Box>
        {qualifications
          .filter((qual) => qual.type === "Education" || qual.type === "Certificates")
          .map((qual, index) => (
            <Box
              key={qual.type}
              sx={{
                mb: { xs: 3, md: 3 }, // Reduce margin-bottom for small screens
              }}
              data-aos="fade-up-left"
              data-aos-duration="1200"
            >
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                  {qual.type === "Education" ? (
                    <GraduationCap className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  ) : (
                    <Award className="w-5 h-5 text-purple-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  )}
                  {qual.type}
                </h3>

                <div className="space-y-4">
                  {qual.entries.map((entry, entryIndex) => (
                    <div
                      key={entryIndex}
                      className="group/title flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                    >
                      <div className="relative mt-2">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover/title:opacity-100 opacity-0 transition-opacity duration-300" />
                        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover/title:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2">
                        <Typography
                          variant="h6"
                          sx={{ color: "#fff", fontWeight: 500 }}
                          className="text-white group-hover/title:text-white transition-colors"
                        >
                          {entry.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#94a3b8" }}
                          className="text-gray-300 group-hover/title:text-white transition-colors"
                        >
                          {entry.institution} <br /> {entry.year}
                          {entry.marks && <br />}
                          {entry.marks}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
export default Qualifications;