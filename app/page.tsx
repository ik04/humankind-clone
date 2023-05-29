import Image from "next/image";
import React from "react";
import heroImg1 from "public/Humankind_Assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.png";
import heroImg2 from "public/Humankind_Assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.png";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="hero-section">
        <div className="hero flex flex-col justify-center items-center -space-y-72">
          <Image src={heroImg1} alt="placeholder" />
          <Image src={heroImg2} alt="placeholder" />
        </div>
        <div className="hero-text">
          <h2 className=" text-center font-serif text-3xl mt-5">
            Creating a magical world for the kid in all of us.
          </h2>
          <div className="hero-buttons font-bold flex items-center justify-center mt-10 space-x-3">
            <button className="border-black border-[3px] rounded-full p-2 text-black bg-white px-7 py-5">
              Get a Lunchbox
            </button>
            <button className="border border-black  rounded-full p-2 text-white bg-black px-7 py-5">
              Play Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
