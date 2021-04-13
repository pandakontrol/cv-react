import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import Typical from 'react-typical'
import content from "../../content";

export default function Header() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "#091c29",
      }}
    >
      <div className="flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
            <LazyLoadImage
            src={content.header.img}  effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512.png'} />
        </div>
        <div className="text-white font-dosis text-center md:text-left">
          <h2 className="text-white md:text-5xl text-3xl font-bold">
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1 className="text-white font-bold text-2xl text-gray-500"> {content.header.text[2]}{' '}
          <Typical
        steps={content.header.typical}
        loop={Infinity}
        className="inline-block"
      />
          </h1>
          <button className=" animate-float bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg"> {content.header.btnText}</button>
        </div>
    </div>
    </div>
  );
}

