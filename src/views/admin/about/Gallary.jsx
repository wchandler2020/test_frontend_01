import React from "react";
import hero from "../../../assets/img/about/hero.jpg";

const Gallery = () => {
  return (
    <div className="dark:bg-[#ffffff] dark:text-white duration-300 rounded-md shadow-lg">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {/* Image section */}
          <div
            style={{
              width: "100%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <h1 className="text-5xl text-gray-600">GALLERY COMING SOON</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
