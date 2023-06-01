import Image from "next/image";
import React from "react";
import heroImg1 from "public/Humankind_Assets/images/62d1b8e2c048c969e47514c7_hero-top-p-1600.png";
import heroImg2 from "public/Humankind_Assets/images/62d1b8e32e16f6b524514c60_hero-bottom-p-1600.png";
import card1 from "public/Humankind_Assets/images/card1.png";
import card2 from "public/Humankind_Assets/images/63e09ea82ae9b06d12ea9b91_028-band-playing-p-2000.png";
import card3 from "public/Humankind_Assets/images/63765b76de5f1356947d9d23_Lunchboxes.gif";

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
      <div className="card-section-1 flex-col flex justify-center items-center space-y-12">
        <div className="card-1 flex w-[1200px] hover:shadow-black/100 shadow-md  h-[800px] border-4 border-black  rounded-3xl justify-center items-center">
          <Image
            src={card1}
            alt="placeholder"
            className="w-[550px] rounded-xl mx-7"
          />
          <div className="text-section space-y-5 flex-col">
            {/* TODO: resize imafge to replicate the cards */}
            <h2 className="text-3xl font-extrabold">Play Herokind!</h2>
            <p className="text-2xl font-serif">
              Herokind is a unique game made just for Humankind NFT collectors.
              It combines the fun of collectibles with the anticipation of daily
              adventure events.
            </p>
            <p className="text-2xl font-serif">
              Send your Humankind collectibles to places like Tenotch Forest,
              Skull Volcano, and Cloud Island, where the environment and events
              are unpredictable and can change at any time.
            </p>
            <button className="border border-yellow-400 font-bold rounded-full p-2 text-black bg-yellow-400 px-7 py-5">
              Play Now!
            </button>
          </div>
        </div>

        <div className="card-1 flex w-[1200px] hover:shadow-black/100 shadow-md  h-[600px] border-4 border-black  rounded-3xl justify-center items-center">
          <Image
            src={card2}
            alt="placeholder"
            className="w-[550px] rounded-xl mx-7"
          />
          <div className="text-section space-y-5 flex-col">
            <h2 className="text-3xl font-extrabold">
              Bring your ideas to life with the Humankind Fund
            </h2>
            <p className="text-2xl font-serif">
              The Humankind Fund is a community-driven platform that supports
              and empowers projects that align with the values and mission of
              the Humankind brand. Join us in bringing creative ideas to life
              and making a positive impact in the world.
            </p>
            <button className="border border-yellow-400 font-bold rounded-full p-2 text-black bg-yellow-400 px-7 py-5">
              Learn More
            </button>
          </div>
        </div>

        <div className="card-1 flex w-[1200px] hover:shadow-black/100 shadow-md  h-[500px] border-4 border-black  rounded-3xl justify-center items-center">
          <Image
            src={card3}
            alt="placeholder"
            className="w-[550px] rounded-xl mx-7"
          />
          <div className="text-section mx-5 space-y-5 flex-col">
            {/* TODO: resize imafge to replicate the cards */}
            <h2 className="text-4xl font-extrabold">
              Grab your lunchbox. It will be a long journey.
            </h2>
            <p className="text-xl font-serif">
              We are delighted you’re finally joining our adventure alongside
              Maya and Dallas. It all starts with a simple and nostalgic object:
              a lunchbox. A lunchbox? What for? Well, it’s gonna be a long
              journey!
            </p>
            <p className="text-xl font-serif">
              Every lunchbox will unlock a Humankind on a brave quest. You’ll be
              able to claim your Kind with them. We’ve made our generative
              lunchboxes with art we’ve been creating for the last year.
            </p>
            <div className="buttons">
              <button className="border border-black rounded-full text-white font-bold bg-black px-7 mr-2 py-5">
                Get one from Opensea
              </button>
              <button className="border-black border-[3px] rounded-full font-bold text-black bg-white px-7 py-5">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
