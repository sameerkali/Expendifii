import Link from "next/link";
import Image from "next/image";

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
  const projectsData = [
    {
      imgSrc: "/projects/1.png",
      name: "Walk State",
      description: "The largest real estate hub for home owners, buyers and agents.",
      liveLink: "https://walkestate.com/"
    },
    {
      imgSrc: "/projects/2.png",
      name: "Sport Skpi",
      description: "To providing cutting-edge sports analytics solutions that empower our clients with data-driven insights and strategies.",
      liveLink: "https://www.sportskpi.com/"
    },
    {
      imgSrc: "/projects/3.png",
      name: "Royal Floors",
      description: "Our extensive selection includes Australian hardwood, durable laminate, stylish vinyl, plush carpet, and sleek tile materials. Explore the variety of flooring solutions offered by Royal Floors to find the perfect fit for your space.",
      liveLink: "https://royalfloors.com.au/"
    },
    {
      imgSrc: "/projects/4.png",
      name: "Owltics",
      description: "Engineering teams benefit from hassle-free tracking. Capture every step seamlessly with simple log tracking.",
      liveLink: "https://owltics.com/"
    },
    {
      imgSrc: "/projects/5.png",
      name: "Mybhtc",
      description: "At MyBHTC, our team of providers believe getting in touch via tele-health is an essential part of raising up our community that needs us. If you are an existing client, your sessions will be via tele-health until further notice.",
      liveLink: "https://mybhtc.com/"
    },
    {
      imgSrc: "/projects/6.png",
      name: "Trusurant",
      description: "Choose Trusurant Today for more secure Tomorrow Your trusted partner in uncovering the truth. With a reputation for excellence and confidentiality, we specialize in providing comprehensive investigative services to individuals, businesses, and organizations worldwide.",
      liveLink: "https://www.trusurant.com/"
    },
    {
      imgSrc: "/projects/7.png",
      name: "Globaltechnoit",
      description: "We help businesses elevate their value through custom software development, product design, QA and consultancy services.",
      liveLink: "https://globaltechnoit.com/"
    },
    {
      imgSrc: "/projects/8.png",
      name: "Skesbadami",
      description: "Educational institutions are vital to the development of knowledge, skills and academic qualifications, and as a Secretary of such an organization.",
      liveLink: "https://skesbadami.org/"
    },
    {
      imgSrc: "/projects/9.png",
      name: "Acceltech",
      description: "At MyBHTC, our team of providers believe getting in touch via tele-health is an essential part advanced coding skills.",
      liveLink: "https://acceltech.in/"
    },
    
  ];

  return (
    <section className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5" id="projects">
      <div>
        <span className="service-name text-center block">PROJECTS</span>
        <h2 className="title text-center">Our Recent Work</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            name={project.name}
            description={project.description}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;