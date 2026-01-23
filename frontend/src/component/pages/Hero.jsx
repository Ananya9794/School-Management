import React from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-purple-200 ">
          <img
            className="h-130 w-full"
            src="https://schoolmanage.techsima.in/images/background3.png "
            alt="hero img"
          />
        </div>
        <div className="absolute top-15  left-20 w-180 p-15" >
          <h3 className="text-2xl text-red-500 font-semibold">Technology & It Solutions</h3>
          <h1 className="text-6xl pt-5 pb-5">Excellent IT services for your success</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex laborum
            cupiditate incidunt, numquam asperiores nihil tenetur mollitia aut
            sint laudantium maiores praesentium? Odit facere inventore enim
            eveniet perspiciatis, nesciunt earum.
          </p>
          <div className="flex gap-6 h-10 pt-10 text-white text-lg">
            <a href="#" className="h-12 bg-red-400 rounded-2xl w-35 text-center pt-2" >Discover More</a>
            <a href="#" className="h-12 bg-red-400 rounded-full w-12 place-items-center pt-4">
              <FaPlay />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
