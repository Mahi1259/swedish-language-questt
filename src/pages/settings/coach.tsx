import type { NextPage } from "next";
import type { ComponentProps } from "react";
import React, { useState, useEffect } from "react";
import { BottomBar } from "../../components/BottomBar";
import { LeftBar } from "../../components/LeftBar";
import { TopBar } from "../../components/TopBar";
import { useBoundStore } from "../../hooks/useBoundStore";
import { useRouter } from "next/router";


const goalXpOptions = [
  { title: "Beginner ", xp: 10 },
  { title: "Easygoing", xp: 20 },
  { title: "Active ", xp: 30 },
  { title: "Dedicated", xp: 40 },
] as const;

const Coach: NextPage = () => {
  const goalXp = useBoundStore((x) => x.goalXp);
  const setGoalXp = useBoundStore((x) => x.setGoalXp);

  const [localGoalXp, setLocalGoalXp] = useState(goalXp);
  const router = useRouter();

  const handleSaveChangesAndGoBack = () => {
    // Save the localGoalXp to the global state using setGoalXp
    setGoalXp(localGoalXp);
    router.back();
  };


  return (
    <div>
      <TopBar />
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className="mx-auto flex flex-col gap-5 py-20 px-4 sm:py-10 md:pl-28 lg:pl-72">
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-800 sm:text-2xl ">
            Edit Daily Goal
          </h1>
        </div>
        <div className="flex justify-center gap-12">
          <div className="flex w-full max-w-xl flex-col gap-8">
            <p className="text-gray-400">
            Stay motivated with a daily LP (Language Points) goal. Change it anytime! 
            Your progress, your choice—earn those Language Points and keep track of your language learning journey!
            </p>
            <div className="flex gap-5">
              <div className="grow">
                {goalXpOptions.map(({ title, xp }, i) => {
                  return (
                    <button
                      key={title}
                      className={[
                        "flex w-full items-center justify-between border-2 p-4 first:rounded-t-2xl last:rounded-b-2xl last:border-b-2",
                        xp === localGoalXp
                          ? "border-b-2 border-blue-400 bg-blue-100 text-blue-500"
                          : "border-t-0 border-gray-400 first:border-t-2 hover:bg-gray-100",
                        goalXpOptions[i + 1]?.xp === localGoalXp
                          ? "border-b-0"
                          : "",
                      ].join(" ")}
                      onClick={() => setLocalGoalXp(xp)}
                    >
                      <div className="font-bold">{title}</div>
                      <div>{xp} LP per day</div>
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Add the "Save Changes" button */}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              onClick={handleSaveChangesAndGoBack} // Call the handleSaveChangesAndGoBack function when clicked
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
