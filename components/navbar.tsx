import React from "react";
import test from "public/Humankind_Assets/images/62c34c43823219cb54a56164_icon.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed w-screen">
      <div className="flex justify-between bg-white h-[60px] mr-auto ml-auto pr-4 pl-4">
        <div className="flex items-center justify-center">
          <Image src={test} alt="Logo" />
          <h1 className="text-2xl font-extrabold mx-2">humankind</h1>
        </div>
        <ul className="flex justify-around space-x-5 items-center font-bold">
          <li>Art</li>
          <li>Collectibles</li>
          <li>Studios</li>
          <li>Community</li>
          <li>Subscribe</li>
          <li>
            <button className="border border-black rounded-full p-2 text-white bg-black px-7 mr-4 py-2 ">
              Play Now!
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
