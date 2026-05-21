'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {

  const images = [
    "/assets/banner1.jpg",
    "/assets/banner2.jpg",
    "/assets/banner3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto my-10 gap-5 p-5">
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="flex h-full transition-transform duration-700"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {
            images.map((img, index) => (
              <div
                key={index}
                className="relative min-w-full h-125"
              >
                <Image
                  src={img}
                  alt="banner"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className="flex flex-col justify-center px-10 md:px-20 bg-slate-900 text-white gap-6 rounded-3xl">
        <h1 className="text-5xl font-bold leading-tight mt-5">
          Learn From The Best Tutors Online
        </h1>
        <p className="text-lg text-gray-300">
          Discover expert tutors, improve your skills,
          and achieve your learning goals with interactive
          and engaging lessons.
        </p>
        <div>
          <Link href="/tutor">
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-md font-semibold m-5">
              Explore Tutors
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;