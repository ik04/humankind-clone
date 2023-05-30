import Image from "next/image";
import React from "react";
import heroImg1 from "public/Humankind_Assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.png";
import heroImg2 from "public/Humankind_Assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.png";
import card1 from "public/Humankind_Assets/images/card1.png";

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
          <div className="flex-col">
            <div className="hero-buttons font-bold flex items-center justify-center mt-10 space-x-3">
              <button className="border-black border-[3px] rounded-full  text-black bg-white px-7 py-5">
                Get a Lunchbox
              </button>
              <button className="border border-black rounded-full text-white bg-black px-7 mr-4 py-5">
                Play Now!
              </button>
            </div>
            <div className="text-center mt-4 mb-28">
              <p>Lunchbox burn starts on Dec 13th, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-section-1 flex-col flex justify-center items-center ">
        <div className="card-1 flex w-[1100px] h-[700px] border-4 border-black p-3 rounded-3xl justify-center items-center">
          <Image src={card1} alt="placeholder" className="w-[500px] p-1" />
          <div className="text-section mx-5 space-y-5 flex-col">
            {/* TODO: resize imafge to replicate the cards */}
            <h2 className="text-3xl font-bold">Play Herokind!</h2>
            <p className="text-xl">
              Herokind is a unique game made just for Humankind NFT collectors.
              It combines the fun of collectibles with the anticipation of daily
              adventure events.
            </p>
            <p className="text-xl">
              Send your Humankind collectibles to places like Tenotch Forest,
              Skull Volcano, and Cloud Island, where the environment and events
              are unpredictable and can change at any time.
            </p>
            <button className="border border-yellow-400 font-bold rounded-full p-2 text-black bg-yellow-400 px-7 py-5">
              Play Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
