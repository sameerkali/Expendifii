"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { restaurantsData } from "../app/utils";

const buildDescription = ({ category, city, address, opening_hours, phone }) => {
  const parts = [`${category} in ${city}.`, `${address}.`];
  if (opening_hours) parts.push(`Open ${opening_hours}.`);
  if (phone) parts.push(`Phone: ${phone}.`);
  return parts.join(" ");
};

const RestaurantCard = ({ imgSrc, name, description, liveLink }) => {
  return (
    <div className="flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-4 rounded-lg hover:shadow-xl transition-all h-full">
      <Image
        src={imgSrc}
        width={300}
        height={200}
        alt={name}
        className="w-full h-40 object-cover rounded-lg"
      />
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

const Restaurants = () => {
  const cities = ["All", ...new Set(restaurantsData.map((r) => r.city))];
  const [activeCity, setActiveCity] = useState("All");

  const visibleRestaurants =
    activeCity === "All"
      ? restaurantsData
      : restaurantsData.filter((r) => r.city === activeCity);

  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="restaurants"
    >
      <div>
        <span className="service-name text-center block">PROJECTS</span>
        <h2 className="title text-center">Restaurant &amp; Cafe Directory</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={`${
              activeCity === city
                ? "bg-rose-600 text-white border-rose-600"
                : "border-[#4e4e4e31] hover:border-rose-600 hover:text-rose-600"
            } text-sm font-medium border rounded-full px-5 py-2 transition-all`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            imgSrc={restaurant.imgSrc}
            name={restaurant.name}
            description={buildDescription(restaurant)}
            liveLink={restaurant.website}
          />
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
