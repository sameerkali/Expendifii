import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
      <p>
        {desc}
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHAT'S THE FUNCTION</span>
      <h2 className="title text-center">Meet the Features of Our Services</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Best and fastest performance solutions for your product."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Better Google Ranking"
          desc="Achieve the best in your business with our expert development."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Pro Subscription"
          desc="Get a free Pro Subscription for 3 months of maintenance."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="24/7 support for our valued customers."
        />
      </div>
    </section>
  );
};

export default Features;
