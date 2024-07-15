import React from "react";
import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const TestimonialCard = ({ name, testimonial, rating, social }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarRoundedIcon key={i} className="text-rose-600" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarHalfRoundedIcon key={i} className="text-rose-600" />);
      } else {
        stars.push(<StarOutlineRoundedIcon key={i} className="text-rose-600" />);
      }
    }
    return stars;
  };

  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="flex">
        {renderStars(rating)}
      </div>
      <p className="leading-loose italic">{testimonial}</p>
      <div className="mt-5">
        <h3 className="font-semibold">{name}</h3>
        <Link
          href={`https://twitter.com/${social}`}
          target="_blank"
          className="text-rose-600 font-[500]"
        >
          @{social}
        </Link>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Yash Khurana",
      testimonial: "Their expertise in both web and mobile development helped bring our vision to life. The final product exceeded our expectations.",
      rating: 5,
      social: "yashkhurana"
    },
    {
      name: "Shalini Sharma",
      testimonial: "Responsive, professional, and technically skilled. They delivered a high-quality website on time and within budget.",
      rating: 4.5,
      social: "shalinisharma"
    },
    {
      name: "Sharvein Brown",
      testimonial: "Our app's user engagement skyrocketed after the redesign. Their intuitive UI/UX approach made all the difference.",
      rating: 5,
      social: "sharveinbrown"
    },
    {
      name: "Jamie Elevate",
      testimonial: "We've worked with many developers, but none match their level of dedication and attention to detail.",
      rating: 4.5,
      social: "jamie_elevate"
    },
    {
      name: "Sam Khurana",
      testimonial: "From concept to launch, they guided us through every step. Their full-stack capabilities were invaluable.",
      rating: 5,
      social: "samkhurana"
    },
    {
      name: "Allen Lewis",
      testimonial: "The custom e-commerce solution they built has streamlined our operations and boosted sales significantly.",
      rating: 4.5,
      social: "allenlewis"
    },
    {
      name: "Archie Vincent",
      testimonial: "Their ability to translate complex ideas into user-friendly interfaces is remarkable. Highly recommended!",
      rating: 5,
      social: "archievincent"
    },
    {
      name: "Aron Lewis",
      testimonial: "We needed a developer who could handle both our website and mobile app - they delivered on both fronts flawlessly.",
      rating: 5,
      social: "aronlewis"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
  };

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center block">TESTIMONIAL</span>
        <h2 className="title text-center">Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              social={testimonial.social}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;