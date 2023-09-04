import React from "react";
import Border from "../common/Border";
import Image1 from "../../assets/work-1.png";
import Image2 from "../../assets/work-2.png";
import Image3 from "../../assets/work-3.png";

export default function LatestWorks() {
  const gallery = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-20 py-20 grid grid-cols-12 gap-8">
        <div className="col-span-6 pr-20">
          <h1 className="mb-4 text-[24px] text-secondary">Latest Works</h1>
          <h2 className="mb-4 text-[40px] text-accent leading-none">
            Made With Pride.
          </h2>
          <Border />
          <div className="mt-16">
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat.
            </p>
          </div>
        </div>
        {gallery.map((data, index) => (
          <div key={index} className="col-span-3">
            <img
              src={data.image}
              alt=""
              srcSet=""
              className="object-cover w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
