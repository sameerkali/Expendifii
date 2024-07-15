import Image from "next/image";

const Card = ({ imgSrc, title, description   }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt="community image"
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold">
        {title}
      </h2>
      <p className="leading-loose">
        {description}
      </p>
    </div>
  );
};

const Community = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        <Card
          imgSrc="/community/1.svg"
          title="Open Platform"
          description="As a freelancer, connect with fellow developers, share your expertise, and collaborate on exciting projects that can boost your portfolio"
        />
        <Card
          imgSrc="/community/2.svg"
          title="Requirement Analysis"
          description="Engage in real-time discussions with clients and peers, get help with project requirements, and provide support to others in our interactive chat rooms.
"
        />
        <Card
          imgSrc="/community/3.svg"
          title="Code Access"
          description="Contribute to open-source projects, access repositories, and collaborate on code with developers worldwide. Enhance your skills and showcase your contributions to potential clients."
        />
      </div>
    </section>
  );
};

export default Community;
