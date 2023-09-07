  import Link from "next/link";
  import type { ComponentProps } from "react";
  import React, { useState } from "react";
  import Image from "next/image";
  import type { Tab } from "./BottomBar";
  import { useBottomBarItems } from "./BottomBar";
  import type { LoginScreenState } from "./LoginScreen";
  import { LoginScreen } from "./LoginScreen";
  import { GlobeIconSvg, PodcastIconSvg } from "./Svgs";
  import { useBoundStore } from "../hooks/useBoundStore";
  import elep from 'public/ele.png'


  const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
    return (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
        <circle
          cx="23"
          cy="23"
          r="19"
          fill="#CE82FF"
          stroke="#CE82FF"
          strokeWidth="2"
        />
        <circle cx="15" cy="23" r="2" fill="white" />
        <circle cx="23" cy="23" r="2" fill="white" />
        <circle cx="31" cy="23" r="2" fill="white" />
      </svg>
    );
  };

  export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {

    const handleNavigateToRegister = () => {
      window.location.href = '/register';
    };
    
    const [moreMenuShown, setMoreMenuShown] = useState(false);

    const bottomBarItems = useBottomBarItems();

    return (
      <>
        <nav className="fixed left-0 top-0 bottom-0 hidden flex-col gap-5  p-3 md:flex lg:w-64 lg:p-5">
        <div><Image src={elep} width="300" height="200" alt={""} /></div>
          <Link
            href="/learn"
            className="ml-5 mb-5 mt-5 hidden text-2xl font-bold text-white lg:block"
          >
            Swedish Language Quest
          </Link>
          <ul className="flex flex-col items-stretch gap-3">
            {bottomBarItems.map((item) => {
              return (
                <li key={item.href} className="flex flex-1">
                  {item.name === selectedTab ? (
                    <Link
                      href={item.href}
                      className="flex grow items-center w-full rounded-2xl border-2 border-b-4 border-white bg-white-400 p-1 font-bold uppercase text-gray-700 transition font-bold uppercase"
                    >
                      {item.icon}{" "}
                      <span className="sr-only lg:not-sr-only">{item.name}</span>
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex grow items-center w-full rounded-2xl border-2 border-b-4 border-white bg-white-400 p-1 font-bold uppercase text-gray-700 transition font-bold uppercase transition hover:bg-gray-500 hover:bg-opacity-20"
                    >
                      {item.icon}{" "}
                      <span className="sr-only lg:not-sr-only">{item.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
            <div
              className="">
              <div>
            </div>
            </div>
          </ul>
        </nav>
      </>
    );
  };
