import React from "react";
import Header from "../components/Header";
import SiteContext from "../context/SiteContext";
import { useContext } from "react";
import Footer from '../components/Footer';

const About = () => {
  const theme = useContext(SiteContext);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main class="bg-light py-8 px-4 md:px-8 w-5/6  mx-auto text-dark font-mono">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-4">About Me</h1>
          <p class="text-gray-700 mb-6">
            I am a web developer specializing in creating websites and
            applications using various technology stacks. With a primary focus
            on JavaScript and Python, I have a deep understanding of these
            programming languages and their ecosystems.
          </p>
          <p class="text-gray-700 mb-6">
            My journey in web development has allowed me to build dynamic and
            interactive user interfaces, develop server-side logic, and work
            with databases to create robust and scalable solutions.
          </p>
          <p class="text-gray-700 mb-6">
            Whether it's crafting responsive front-end experiences with modern
            JavaScript frameworks like React, implementing server-side
            functionality with Node.js or Flask, or designing efficient database
            structures with SQL or NoSQL solutions, I strive to deliver
            high-quality, maintainable code.
          </p>
          <p class="text-gray-700 mb-6">
            I am passionate about leveraging technology to solve real-world
            problems and collaborate with teams to create exceptional web
            applications. I stay updated with the latest industry trends and
            continuously enhance my skills to deliver cutting-edge solutions
            that meet the unique needs of each project.
          </p>
          <p class="text-gray-700 mb-6">
            If you have a project in mind or need assistance with web
            development, I'd love to hear from you. Feel free to reach out and
            let's bring your ideas to life!
          </p>
          <p className="text-2xl">
            <a href="mailto:msaliogullari@gmail.com">Send email </a>
            or contact me on
            <a href="https://www.linkedin.com/in/said1854/"> linkedin</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
