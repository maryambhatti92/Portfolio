import { FcGraduationCap } from "react-icons/fc";
import { HiOutlineUsers } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiVideoConference } from "react-icons/gi";
import { FcCollaboration } from "react-icons/fc";
import { GiArchiveResearch } from "react-icons/gi";

import React from 'react';

const CoreInitiavtiveSection = () => {
  const CoreInitiatives = [
    {
      id: 1,
      title: "Scholarships for Displaced Individuals",
      description:
        "We provide access to various scholarships available in the UK that are specifically tailored to support displaced individuals, helping them pursue their academic goals without financial constraints.",
      icon: <FcGraduationCap className="text-blue-500" />, 
    },
    {
      id: 2,
      title: "Mentorship and Guidance",
      description:
        "We offer personalized mentorship programs, advising students on selecting the best courses that align with their skills, interests, and future aspirations, ensuring they make informed decisions.",
      icon: <HiOutlineUsers className="text-yellow-500" />, // Example color
    },
    {
      id: 3,
      title: "AI and Data Science Bootcamp Referrals",
      description:
        "In collaboration with ZAKA AI, we refer selected students for AI and Data Science bootcamps, equipping them with cutting-edge skills for the future job market.",
      icon: <AiOutlineGlobal className="text-green-500" />, // Example color
    },
    {
      id: 4,
      title: "Live Sessions on Prestigious Scholarship",
      description:
        "We organize live sessions to guide students through application processes for significant scholarships such as the Said Scholarship and Chevening Scholarship, offering them crucial insights and strategies to succeed.",
      icon: <GiVideoConference className="text-yellow-500" />, // Example color
    },
    {
      id: 5,
      title: "Collaborations with Universities and Projects",
      description:
        "Partnering with leading institutions like the University of Leicester, we contribute to research and initiatives related to displacement, including collaborations with projects such as Penstreet Survey, which studies the impact of displacement on affected communities.",
      icon: <FcCollaboration  />, // Example color
    },
    {
      id: 6,
      title: "Inclusive Scholarships Promotion and Research",
      description:
        "We actively promote inclusive scholarships and publish articles highlighting our work, sharing insights, and advocating for the importance of educational opportunities for displaced individuals.",
      icon: <GiArchiveResearch className="text-orange-500" />, // Example color
    },
  ];

  return (
    <section className="CoreInitiatives-section bg-main py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Core Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CoreInitiatives.map((core) => (
            <div
              key={core.id}
              className="benefit-card p-6 bg-gray-100 shadow-lg rounded-lg text-center"
            >
              <div className="icon flex justify-center items-center text-4xl mb-4">{core.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{core.title}</h3>
              <p className="text-gray-600">{core.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreInitiavtiveSection;
