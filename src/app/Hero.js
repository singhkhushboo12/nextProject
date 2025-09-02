
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home({ Title, Subtitle, image }) {

console.log("Title---",Title);

  return (
    <>
      <div className="titleFont fade-in ">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // start invisible & slightly down
          animate={{ opacity: 1, y: 0 }} // fade in & move to position
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-screen relative bottom-6 mb-8 bg-center"
        >
          {/* Background layer */}
          <img
            // src="/tree.svg"
            src={"http://192.168.1.115:1337" + image?.url}
            alt="Background"
            className="absolute  inset-0 object-center w-full bg-no-repeat h-screen object-cover lg:object-contain top-[-175px]" 
            style={{zIndex:"-1"}}
          />
          <div className="absolute  bottom-[300px] lg:h-1/2 h-[48%] w-full flex flex-col items-center justify-between">
            <div className="flex items-end justify-center">
              <p className="paracolor titleFont backdrop-blur-xs text-lg  zoom-xl mac-zoom-3xl px-3 rounded font-semibold textgone">
                {Title ? (
                  <>
                    {Title.split(/\*\*(.*?)\*\*/)[0]}
                    <span className="myred ">
                      {Title.split(/\*\*(.*?)\*\*/)[1]}
                    </span>
                    {Title.split(/\*\*(.*?)\*\*/)[2]}
                  </>
                ) : (
                  <>
                    What's left when the voice is{" "}
                    <span className="myred">GONE newwww</span>?
                  </>
                )}
              </p>
            </div>

            <div className="flex items-center gap-4 justify-end flex-col">
              <p className="paracolor titleFont rounded text-center backdrop-blur-xs px-4 leading-snug text-3xl zoom-5xl font-semibold textforever">
              

                {Subtitle ? (
                  <>
                    {Subtitle.split(/\*\*(.*?)\*\*/)[0]}<br />
                    <span className="myred">
                      {Subtitle.split(/\*\*(.*?)\*\*/)[1]}
                    </span>
                    {Subtitle.split(/\*\*(.*?)\*\*/)[2]}
                  </>
                ) : (
                  <>
                    The voices we love.{" "}<br />
                    <span className="myred">Kept forever.</span>
                  </>
                )}


              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </>
  );
}
