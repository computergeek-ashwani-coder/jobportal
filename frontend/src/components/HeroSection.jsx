import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium ">
          No. 1 Technical Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
  Discover endless career opportunities with top employers! 🚀 Whether you're a
  <span className="font-semibold text-[#6A38C2]"> fresh graduate</span> or a
  <span className="font-semibold text-[#F83002]"> seasoned professional</span>,
  we provide <span className="font-semibold">personalized job recommendations</span>
  and a seamless <span className="font-semibold">application process</span>.
</p>
<p className="text-lg font-semibold text-[#6A38C2]">
  Your dream job is just a click away! 💼✨
</p>





        <div className="flex w-[48%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="outline-none border-none w-full"
          />
          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
