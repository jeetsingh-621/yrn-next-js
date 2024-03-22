import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-red-600 text-white flex gap-5 text-5xl">
        <Link className="text-5xl" href="/">home</Link>
        <Link className="text-5xl" href="/about">about</Link>
      </div>
    </>
  );
};

export default Hero;
