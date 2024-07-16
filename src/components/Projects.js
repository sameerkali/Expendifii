"use client"
import Link from "next/link";
import Image from "next/image";
import { projectsData } from '../app/utils'
import { useEffect, useState } from "react";

const ProjectCard = ({ imgSrc, name, description, liveLink }) => {
  return (
    <div className="flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-4 rounded-lg hover:shadow-xl transition-all h-full">
      <Image src={imgSrc} width={300} height={200} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="leading-snug text-sm flex-grow">{description}</p>
      <Link
        href={liveLink}
        target="_blank"
        className="text-rose-600 font-[500] mt-2 hover:underline text-sm"
      >
        View Live Project
      </Link>
    </div>
  );
};

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);
  const [projects, setProjects] = useState([]);

  const handleLoadMore = () => {
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const newProjects = projectsData.slice(startIndex, endIndex);
    setProjects([...projects, ...newProjects]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const updateCardsPerPage = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      setCardsPerPage(mediaQuery.matches ? 4 : 8);
    };

    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  useEffect(() => {
    const initialProjects = projectsData.slice(0, cardsPerPage);
    setProjects(initialProjects);
  }, [cardsPerPage]);

  return (
    <section className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5" id="projects">
      <div>
        <span className="service-name text-center block">PROJECTS</span>
        <h2 className="title text-center">Our Recent Work</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            name={project.name}
            description={project.description}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      {projects.length < projectsData.length && (
        <button onClick={handleLoadMore} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Load More
        </button>
      )}
    </section>
  );
};

export default Projects;
