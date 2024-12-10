// import React from 'react';
import alphaImage from '../assets/alpha_photo.jpg';
import duresaImage from '../assets/icon-modified.jpg';
import hilinaImage from '../assets/hilina_photo-modified.jpg';
import ruthImage from '../assets/ruth_photo-modified.jpg';
import tolosaImage from '../assets/tolosa_photo.jpg';
import mohammedImage from '../assets/mohammed_photo-modified.jpg';
import digitalMarketingImage from '../assets/digital-marketing.png';
import socialMediaManagementImage from '../assets/social-media-management.png';
import websiteDevelopmentImage from '../assets/website-development.png';
import seoOptimizationImage from '../assets/SEO-optimization.png';
import contentCreationImage from '../assets/content-creation.png';
import graphicDesignImage from '../assets/graphic-design.png';
import videoEditingImage from '../assets/video-editing.png';

const About = () => {
  const teamMembers = [
    {
      name: 'Duresa Guye',
      role: 'CEO, SEO Specialist & Full-Stack Developer',
      description: 'Responsible for driving the overall business strategy, enhancing online presence through effective SEO practices, and developing comprehensive digital solutions from front-end to back-end to ensure seamless user experiences and functionality.',
      link: 'https://www.linkedin.com/in/duresa-guye-5aba5625a/',
      image: duresaImage,
    },
    {
      name: 'Alpha Lencho',
      role: 'Social Media Manager & AI and ML Engineer',
      description: 'Responsible for managing social media strategies, creating engaging content, and fostering a strong online presence while also developing and deploying machine learning models and AI-driven solutions to optimize processes and enhance user experience.',
      link: 'https://www.linkedin.com/in/alpha-lencho-13b8281bb/',
      image: alphaImage,
    },
    {
      name: 'Hilina Adane',
      role: 'Content Creator & Copyright Specialist',
      description: 'Responsible for creating engaging content across multiple platforms while ensuring adherence to copyright laws, managing intellectual property rights, and securing proper licensing and permissions to protect the originality and legality of all materials produced.',
      link: 'https://www.linkedin.com/in/hilina-adane-524494228/',
      image: hilinaImage,
    },
    {
      name: 'Ruth Dehene',
      role: 'UX/UI  & Graphics Designer',
      description: 'Responsible for designing user-centric interfaces that provide seamless, intuitive experiences while crafting visually appealing graphics to enhance brand identity and user engagement across digital platforms.',
      link: 'https://www.linkedin.com/in/ruth-dehene-404373318/',
      image: ruthImage,
    },
    {
      name: 'Tolosa Diriba',
      role: 'Video Editor, Web Developer & Digital Marketing Specialist',
      description: 'Responsible for transforming raw footage into engaging, high-quality videos, developing and maintaining websites with a focus on functionality and user experience, and implementing digital marketing strategies to boost online presence and drive audience engagement.',
      link: 'https://www.linkedin.com/in/tolosa-diriba-95624a286/',
      image: tolosaImage,
    },
    {
      name: 'Muhammed Ahmed',
      role: 'Video Editor and Security Analyst ',
      description: 'Responsible for editing and producing high-quality videos to effectively communicate messages, while ensuring the security and integrity of digital assets and systems by analyzing vulnerabilities, implementing protective measures, and maintaining secure online environments.',
      link: 'https://www.linkedin.com/in/muhammed-ahmed',
      image: mohammedImage,
    },
  ];

  return (
    <div className="p-6 mt-20 max-w-4xl mx-auto card">
      <h1 className="text-4xl font-bold mb-8 text-center">About Techኢት Digital Solutions</h1>
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <strong>Techኢት Digital Solutions</strong>, your one-stop shop for all things digital.
        Our team specializes in empowering businesses and individuals through cutting-edge technology
        services, including website development, SEO optimizations, digital marketing, social media management,
        and more.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        With a talented team of experts, we combine technical excellence with creativity to deliver exceptional
        solutions tailored to your needs. Whether you&apos;re building a strong online presence or creating captivating content,
        we are here to help you succeed in the digital age.
      </p>

        <h2 className="text-3xl font-bold mb-6 text-center">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

  {/* Digital Marketing Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={digitalMarketingImage} 
      alt="Digital Marketing"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Digital Marketing</h3>
      <p className="text-gray-800 dark:text-white">
        Tailored marketing strategies designed to maximize reach and deliver measurable results.
      </p>
    </div>
  </div>

  {/* Social Media Management Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={socialMediaManagementImage}
      alt="Social Media Management"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Social Media Management</h3>
      <p className="text-gray-800 dark:text-white">
        Engaging audiences and building your online presence across multiple social media platforms.
      </p>
    </div>
  </div>

  {/* Website Development Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={websiteDevelopmentImage}
      alt="Website Development"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Website Development</h3>
      <p className="text-gray-800 dark:text-white">
        Modern, responsive, and user-friendly websites designed to provide seamless user experiences.
      </p>
    </div>
  </div>

  {/* SEO Optimization Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={seoOptimizationImage}
      alt="SEO Optimization"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">SEO Optimizations</h3>
      <p className="text-gray-800 dark:text-white">
        Helping your business rank higher on search engines and reach its audience effectively.
      </p>
    </div>
  </div>

  {/* Content Creation Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={contentCreationImage}
      alt="Content Creation"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Content Creation</h3>
      <p className="text-gray-800 dark:text-white">
        Creating compelling and audience-focused content to tell your brand story.
      </p>
    </div>
  </div>

  {/* Graphic Design Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={graphicDesignImage} 
      alt="Graphic Design"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Graphic Design</h3>
      <p className="text-gray-800 dark:text-white">
        Stunning visuals designed to elevate your brand and create lasting impressions.
      </p>
    </div>
  </div>

  {/* Video Editing Card */}
  <div className="card border rounded-lg shadow-lg overflow-hidden">
    <img 
      src={videoEditingImage} 
      alt="Video Editing"
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">Video Editing</h3>
      <p className="text-gray-800 dark:text-white">
        Creating captivating videos that tell your brand&apos;s story and engage your audience.
      </p>
    </div>
  </div>
</div>



      <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow border"
          >
            {/* Profile Image */}
            <div className="flex justify-center p-4 bg-gray-100">
              <img
                src={member.image}
                alt={`${member.name}'s profile`}
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
              />
            </div>
        
            {/* Name and Role */}
            <div className="p-4 bg-gray-100 text-center">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 italic">{member.role}</p>
            </div>
        
            {/* Description */}
            <div className="p-4">
              <p className="text-gray-700 text-justify">{member.description}</p>
            </div>
        
            {/* Footer */}
            <div className="p-4 bg-gray-50 text-center">
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-900 transition-colors"
              >
                Visit LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>



      <p className="text-lg font-semibold text-center mt-10">
        Thank you for choosing Techኢት Digital Solutions as your partner in the digital journey.
      </p>
    </div>
  );
};

export default About;
