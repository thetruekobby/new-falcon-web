import React from "react";

const BTServices = () => {
  return (
    <section className="container mx-auto">
      <h1>Services</h1>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last animate-slide-in">
          <div className="">
            <h2 className="font-bold text-xl capitalize">heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              et porro architecto neque autem amet, eligendi est laboriosam
              natus ex, delectus nisi ea ducimus dolores quibusdam ipsum eos
              quos provident.
            </p>
          </div>
        </div>
        <div className="img-outline-left flex-1 order-first animate-slide-in2 z-10">
          <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last md:order-first animate-slide-in">
          <div className="">
            <h2 className="font-bold text-xl capitalize">heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              et porro architecto neque autem amet, eligendi est laboriosam
              natus ex, delectus nisi ea ducimus dolores quibusdam ipsum eos
              quos provident.
            </p>
          </div>
        </div>
        <div className="img-outline-right flex-1 order-first md:order-last animate-slide-in2 z-10">
          <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last animate-slide-in">
          <div className="">
            <h2 className="font-bold text-xl capitalize">heading</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              et porro architecto neque autem amet, eligendi est laboriosam
              natus ex, delectus nisi ea ducimus dolores quibusdam ipsum eos
              quos provident.
            </p>
          </div>
        </div>
        <div className="img-outline-left flex-1 order-first animate-slide-in2 z-10">
          <img src="/bg/banner_bg.jpg" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default BTServices;
