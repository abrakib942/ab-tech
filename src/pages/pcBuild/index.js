import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const PcBuild = () => {
  const categories = [
    "CPU",
    "Motherboard",
    "RAM",
    "PSU",
    "Storage",
    "Monitor",
    "Others",
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="text-center my-8 font-semibold text-3xl">
          Categories
        </div>
        <div className="container mx-auto mb-8 p-4">
          <div className="grid gap-4">
            {categories?.map((category, i) => (
              <div
                key={i}
                className=" flex mx-auto items-center justify-between gap-24 w-96 border border-gray-300 p-4 bg-base-200"
              >
                <div className="font-semibold">{category}</div>
                <Link href="/pcBuild/[...slug]" as={`/pcBuild/${category}`}>
                  <button className="btn btn-accent btn-outline">Choose</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuild;
