import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "../components/Svgs";
import React from "react";
import { LanguageHeader } from "../components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "../components/LoginScreen";
import _bgSnow from "public/wallpaper.jpg";
import type { StaticImageData } from "next/image";
import { LanguageCarousel } from "../components/LanguageCarousel";



const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-[#235390] text-white" style={{ backgroundImage: `url(${_bgSnow.src})`,backgroundSize:'cover', }}>
      <LanguageHeader />
      <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-16 md:flex-row md:gap-36">
        <div>
          <p className="mb-6 max-w-[900px] text-center text-5xl font-bold md:mb-12 ">
            Welcome to Swedish Language Quest !
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3">
            <Link
              href="/register"
              className="flex cursor-pointer flex-col items-center w-full rounded-2xl border-2 border-b-2 border-gray-700 bg-gray-700 px-8 py-5 font-bold uppercase transition hover:bg-gray-900 hover:bg-opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;
