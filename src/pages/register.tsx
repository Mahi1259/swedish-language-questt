import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import languages from "../utils/languages";
import { LanguageHeader } from "../components/LanguageHeader";
import { useBoundStore } from "../hooks/useBoundStore";
import { Flag } from "../components/Flag";
import _bgSnow from "public/wallpaper.jpg";
import type { StaticImageData } from "next/image";


import { useState, useEffect } from "react"; // Import useState and useEffect

// ... (existing code)

const Register: NextPage = () => {
  const setLanguage = useBoundStore((x) => x.setLanguage);
  const [isGoogleButtonTop, setIsGoogleButtonTop] = useState(false); // State to track whether Google button should be at the top

  useEffect(() => {
    // Generate a random boolean to decide the position of the Google button
    setIsGoogleButtonTop(Math.random() >= 0.5);
  }, []);

  // Function to handle the Google button click and redirect to Google page
  const handleGoogleButtonClick = () => {
    window.location.href = "/swedish-language-questt/disclaimernon";
  };

  // Shuffle the languages array to randomize the order of language buttons
  const shuffledLanguages = [...languages].sort(() => Math.random() - 0.5);

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#235390] text-white" style={{ backgroundImage: `url(${_bgSnow.src})`, backgroundSize: "cover" }}>
      <LanguageHeader />
      <div className="container flex flex-col items-center justify-center gap-20 px-4 py-16">
        <h1 className="mt-20 text-center text-5xl font-extrabold tracking-tight text-white">
          Select Version
        </h1>
        <section className="mx-auto grid w-full max-w-2xl grow grid-cols-1 flex-col gap-7">
          {isGoogleButtonTop && ( // Render the Google button at the top
            <button
              className="flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-500 bg-gray-700 py-8 px-5 text-3xl font-bold hover:bg-gray-700 hover:bg-opacity-200"
              onClick={handleGoogleButtonClick}
            >
              Non-Gamified Version
            </button>
          )}
          {shuffledLanguages.map((language) => ( // Render the language buttons in shuffled order
            <Link
              key={language.name}
              href="/disclaimer"
              className={
                "flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-500 bg-gray-700 py-8 px-5 text-3xl font-bold hover:bg-gray-700 hover:bg-opacity-200"
              }
              onClick={() => setLanguage(language)}
            >
              <span>{language.name}</span>
            </Link>
          ))}
          {!isGoogleButtonTop && ( // Render the Google button at the bottom
            <button
              className="flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-500 bg-gray-700 py-8 px-5 text-3xl font-bold hover:bg-gray-700 hover:bg-opacity-200"
              onClick={handleGoogleButtonClick}
            >
              Non-Gamified Version
            </button>
          )}
        </section>
      </div>
    </main>
  );
};

export default Register;
