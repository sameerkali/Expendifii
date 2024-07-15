import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">QUALITY FEATURES</span>
      <h2 className="title text-center ">Amazing useful features</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Best and fastest performance solutions for your product."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Better Google Ranking"
          desc="Achieve the best in your business with our expert development."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="Get a free Pro Subscription for 3 months of maintenance."
          F
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="24/7 support for our valued customers."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
