import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgSrc, name, description, webLink, androidLink, iosLink }) => {
  return (
    <div className="flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-4 rounded-lg hover:shadow-xl transition-all h-full">
      <Image src={imgSrc} width={300} height={200} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mb-1">{name}</h2>
      <p className="leading-snug text-sm flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {webLink && (
          <Link href={webLink} target="_blank" className="text-rose-600 font-[500] hover:underline text-sm">
            Web App
          </Link>
        )}
        {androidLink && (
          <Link href={androidLink} target="_blank" className="text-green-600 font-[500] hover:underline text-sm">
            Android App
          </Link>
        )}
        {iosLink && (
          <Link href={iosLink} target="_blank" className="text-blue-600 font-[500] hover:underline text-sm">
            iOS App
          </Link>
        )}
      </div>
    </div>
  );
};

const ProjectsApp = () => {
  const projectsData = [
    {
      imgSrc: "/projects/apps/1.png",
      name: "Fulfillment",
      description: "Inventory Management App",
      webLink: "http://fulfillment.vip",
      androidLink: "https://play.google.com/store/apps/details?id=com.thought.fulfillment",
      iosLink: null
    },
    {
      imgSrc: "/projects/apps/2.png",
      name: "Net Fit",
      description: "Fitness App",
      webLink: null,
      androidLink: "https://play.google.com/store/apps/details?id=theappmatch.netfitapp",
      iosLink: "https://apps.apple.com/pk/app/netfit-netball/id1389098661"
    },
    {
      imgSrc: "/projects/apps/3.png",
      name: "Salon",
      description: "Saloon Management App",
      webLink: null,
      androidLink: "https://play.google.com/store/apps/details?id=com.arabiasalons.user",
      iosLink: "https://apps.apple.com/pk/app/salon-beauty-booking/id1454667659"
    },
    
    {
      imgSrc: "/projects/apps/4.png",
      name: "Anantara",
      description: "Hotels App",
      webLink: null,
      androidLink: "https://play.google.com/store/apps/details?id=com.anantara.android.app",
      iosLink: "https://apps.apple.com/pk/app/anantara-hotels/id1455199656"
    },
  ];

  return (
    <section className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5" id="projects">
      <div>
        <span className="service-name text-center block">PROJECTS</span>
        <h2 className="title text-center">Our Live Apps</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            name={project.name}
            description={project.description}
            webLink={project.webLink}
            androidLink={project.androidLink}
            iosLink={project.iosLink}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsApp;