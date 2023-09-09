import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import meat from 'public/project assets/food and drinks/meat.png'
import hello from 'public/project assets/Basic Phrases/Hello.png'
import please from 'public/project assets/Basic Phrases/please.png'
import water from 'public/project assets/food and drinks/water.png'
import yes from 'public/project assets/Basic Phrases/yes.png'
import icecream from 'public/project assets/food and drinks/ice-cream.png'
import Goodbye from 'public/project assets/Basic Phrases/goodbye.png'
import Thankyou from 'public/project assets/Basic Phrases/Thankyou.png'
import salad from 'public/project assets/food and drinks/salad.png'
import cheese from 'public/project assets/food and drinks/cheese.png'
import fish from 'public/project assets/food and drinks/fish.png'
import excuseme from 'public/project assets/Basic Phrases/excuse-me.png'
import tvwatching from 'public/project assets/Everyday activities/tv-watching.png'
import no from 'public/project assets/Basic Phrases/no.png'
import cook from 'public/project assets/Everyday activities/cooking.png'
import howareyou from 'public/project assets/Basic Phrases/how-are-you.png'
import pizza from 'public/project assets/food and drinks/pizza.png'
import sorry from 'public/project assets/Basic Phrases/I am sorry.png'
import understand from 'public/project assets/Basic Phrases/understand.png'
import straight from 'public/project assets/Travel and directions/Straight-ahead.png'
import left from 'public/project assets/Travel and directions/left-turn.png'
import airport from 'public/project assets/Travel and directions/airport.png'
import journalist from 'public/biking.gif'
import mother from 'public/ambulance.gif'
import croupie from 'public/pushups.gif'
import fathe from 'public/skateboarding.gif'
import grandmothe from 'public/police-car.gif'
import studen from 'public/truck-delivery.gif'
import judg from 'public/victory-success.gif'
import mine from 'public/food-truck.gif'
import policema from 'public/walking-person.gif'
import showma from 'public/bicycle.gif'
import _ from "lodash";
import clapss from 'public/applause.gif'
import better from 'public/thumb-down.gif'
import elep from 'public/ele.png'

import {
  AppleSvg,
  BigCloseSvg,
  BoySvg,
  CloseSvg,
  DoneSvg,
  LessonFastForwardEndFailSvg,
  LessonFastForwardEndPassSvg,
  LessonFastForwardStartSvg,
  LessonTopBarEmptyHeart,
  LessonTopBarHeart,
  WomanSvg,
} from "../components/Svgs";
import womanPng from "../../public/woman.png";
import { useBoundStore } from "../hooks/useBoundStore";
import { useRouter } from "next/router"

const lessonProblem1 = {
  type: "SELECT_1_OF_3",
  question: `What is the Swedish translation of "Hello!"?`,
  answers: [
    { icon: <Image src={meat} width="300" height="200" alt={""} />, name: "Kött" },
    { icon: <Image src={hello} width="300" height="200" alt={""} />, name: "Hej!" },
    { icon: <Image src={please} width="300" height="200" alt={""} />, name: "Snälla" },
    { icon: <Image src={water} width="300" height="200" alt={""} />, name: "Vatten" },
  ],
  correctAnswer: 1,
} as const;


const lessonProblem2 = {
  type: "WRITE_IN_ENGLISH",
  question: "What is the English translation for 'Vakna'?",
  answerTiles: ["Take a walk", "Wake up", "Go to bed", "Eat breakfast"],
  correctAnswer: [1],
} as const;

const lessonProblem3 = {
  type: "WRITE_IN_ENGLIS",
  question: "Identify the English translation for 'Laga mat'.",
  answerTiles: ["Read","Exercise","Cook","Go shopping"],
  correctAnswer: [2],
} as const;

const lessonProblem111 = {
  type: "WRITE_IN_ENGLIS1",
  question: "How would you say 'Äta frukost' in English?",
  answerTiles: ["Go to work","Eat breakfast","Watch TV", "Take a walk"],
  correctAnswer: [1],
} as const;

const lessonProblem222 = {
  type: "WRITE_IN_ENGLIS2",
  question: "What is the English translation for 'Ta en promenad'?",
  answerTiles: ["Cook","Go shopping", "Go to bed","Take a walk"],
  correctAnswer: [3],
} as const;

const lessonProblem333 = {
  type: "WRITE_IN_ENGLIS3",
  question: "Identify the English translation for 'Gå till jobbet'.",
  answerTiles: ["Cook","Go to work","Exercise", "Read"],
  correctAnswer: [1],
} as const;

const lessonProblem444 = {
  type: "WRITE_IN_ENGLIS4",
  question: "How would you say 'Tågstation' in English?",
  answerTiles: ["Exercise","Wake up","Watch TV", "Train station"],
  correctAnswer: [3],
} as const;


const lessonProblem555 = {
  type: "WRITE_IN_ENGLIS5",
  question: "What is the English translation for 'Titta på TV'?",
  answerTiles: ["Take a walk","Go shopping","Watch TV", "Eat breakfast"],
  correctAnswer: [2],
} as const;

const lessonProblem666 = {
  type: "WRITE_IN_ENGLIS6",
  question: "Identify the English translation for 'Gå och handla'.",
  answerTiles: ["Read","Cook","Go shopping","Go to bed"],
  correctAnswer: [2],
} as const;

const lessonProblem777 = {
  type: "WRITE_IN_ENGLIS7",
  question: "How would you say 'Gå och lägga sig' in English?",
  answerTiles: ["Take a walk","Go to bed","Exercise", "Wake up"],
  correctAnswer: [1],
} as const;

const lessonProblem999 = {
  type: "WRITE_IN_ENGLIS9",
  question: "What is the English translation for 'Läsa'?",
  answerTiles: ["Read","Cook","Go shopping", "Eat breakfast"],
  correctAnswer: [0],
} as const;



const lessonProblems = [lessonProblem2, lessonProblem3, lessonProblem111, lessonProblem222,lessonProblem333, lessonProblem444, lessonProblem555, lessonProblem666, lessonProblem777, lessonProblem999];

const numbersEqual = (a: readonly number[], b: readonly number[]): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i]);
};

const formatTime = (timeMs: number): string => {
  const seconds = Math.floor(timeMs / 1000) % 60;
  const minutes = Math.floor(timeMs / 1000 / 60) % 60;
  const hours = Math.floor(timeMs / 1000 / 60 / 60);
  if (hours === 0)
    return [minutes, seconds]
      .map((x) => x.toString().padStart(2, "0"))
      .join(":");
  return [hours, minutes, seconds]
    .map((x) => x.toString().padStart(2, "0"))
    .join(":");
};

const Lesson: NextPage = () => {
  const router = useRouter();

  const [lessonProblem, setLessonProblem] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [quitMessageShown, setQuitMessageShown] = useState(false);

  const [shuffledLessonProblems, setShuffledLessonProblems] = useState(
    lessonProblems
  );

  const shuffleProblems = () => {
    setShuffledLessonProblems(_.shuffle(lessonProblems));
  };

  useEffect(() => {
    shuffleProblems();
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const startTime = useRef(Date.now());
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33);

  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
  const [reviewLessonShown, setReviewLessonShown] = useState(false);

  const problem = shuffledLessonProblems[lessonProblem] ?? lessonProblem1;
  

  const totalCorrectAnswersNeeded = 5;

  const [isStartingLesson, setIsStartingLesson] = useState(true);
  const hearts =
    "fast-forward" in router.query &&
    !isNaN(Number(router.query["fast-forward"]))
      ? 3 - incorrectAnswerCount
      : null;

  const { correctAnswer } = problem;
  const isAnswerCorrect = Array.isArray(correctAnswer)
    ? numbersEqual(selectedAnswers, correctAnswer)
    : selectedAnswer === correctAnswer;

  const onCheckAnswer = () => {
    setCorrectAnswerShown(true);
    if (isAnswerCorrect) {
      setCorrectAnswerCount((x) => x + 1);
    } else {
      setIncorrectAnswerCount((x) => x + 1);
    }
    setQuestionResults((questionResults) => [
      ...questionResults,
      {
        question: problem.question,
        yourResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
            : selectedAnswers.map((i) => problem.answerTiles[i]).join(" "),
        correctResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[problem.correctAnswer].name
            : problem.correctAnswer.map((i) => problem.answerTiles[i]).join(" "),
      }
      ,
    ]);
  };
  const onFinish = () => {
    setSelectedAnswer(null);
    setSelectedAnswers([]);
    setCorrectAnswerShown(false);
    setLessonProblem((x) => (x + 1) % lessonProblems.length);
    endTime.current = Date.now();
  };

  const onSkip = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
  };

  const unitNumber = Number(router.query["fast-forward"]);

  if (hearts !== null && hearts < 0 && !correctAnswerShown) {
    return (
      <LessonFastForwardEndFail
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (
    hearts !== null &&
    hearts >= 0 &&
    !correctAnswerShown &&
    correctAnswerCount >= totalCorrectAnswersNeeded
  ) {
    return (
      <LessonFastForwardEndPass
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  if (hearts !== null && isStartingLesson) {
    return (
      <LessonFastForwardStart
        unitNumber={unitNumber}
        setIsStartingLesson={setIsStartingLesson}
      />
    );
  }

  if (correctAnswerCount >= totalCorrectAnswersNeeded && !correctAnswerShown) {
    return (
      <LessonComplete
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        startTime={startTime}
        endTime={endTime}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    );
  }

  switch (problem.type) {
    case "WRITE_IN_ENGLISH": {
      return (
        <ProblemWriteInEnglish
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }
    
    case "WRITE_IN_ENGLIS": {
      return (
        <ProblemWriteInEnglis
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS1": {
      return (
        <ProblemWriteInEnglis1
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS2": {
      return (
        <ProblemWriteInEnglis2
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS3": {
      return (
        <ProblemWriteInEnglis3
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS4": {
      return (
        <ProblemWriteInEnglis4
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS5": {
      return (
        <ProblemWriteInEnglis5
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS6": {
      return (
        <ProblemWriteInEnglis6
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS7": {
      return (
        <ProblemWriteInEnglis7
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }

    case "WRITE_IN_ENGLIS9": {
      return (
        <ProblemWriteInEnglis9
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      );
    }
    
  }
};

export default Lesson;

const ProgressBar = ({
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  setQuitMessageShown,
  hearts,
}: {
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  setQuitMessageShown: (isShown: boolean) => void;
  hearts: null | number;
}) => {
  return (
    <header className="flex items-center gap-4">
      {correctAnswerCount === 0 ? (
        <Link href="/learn" className="text-gray-400">
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </Link>
      ) : (
        <button
          className="text-gray-400"
          onClick={() => setQuitMessageShown(true)}
        >
          <CloseSvg />
          <span className="sr-only">Exit lesson</span>
        </button>
      )}
      <div
        className="h-4 grow rounded-full bg-gray-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={3}
        aria-valuenow={correctAnswerCount / totalCorrectAnswersNeeded}
      >
        <div
          className={
            "h-full rounded-full bg-green-500 transition-all duration-700 " +
            (correctAnswerCount > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(correctAnswerCount / totalCorrectAnswersNeeded) * 100}%`,
          }}
        >
          <div className="h-[5px] w-full rounded-full bg-green-400"></div>
        </div>
      </div>
      {hearts !== null &&
        [1, 2, 3].map((heart) => {
          if (heart <= hearts) {
            return <LessonTopBarHeart key={heart} />;
          }
          return <LessonTopBarEmptyHeart key={heart} />;
        })}
    </header>
  );
};

const QuitMessage = ({
  quitMessageShown,
  setQuitMessageShown,
}: {
  quitMessageShown: boolean;
  setQuitMessageShown: (isShown: boolean) => void;
}) => {
  return (
    <>
      <div
        className={
          quitMessageShown
            ? "fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-60 transition-all duration-300"
            : "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-0 transition-all duration-300"
        }
        onClick={() => setQuitMessageShown(false)}
        aria-label="Close quit message"
        role="button"
      ></div>

      <article
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 z-40 flex flex-col gap-4 bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
            : "fixed -bottom-96 left-0 right-0 z-40 flex flex-col bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
        }
        aria-hidden={!quitMessageShown}
      >
        <div className="flex grow flex-col gap-4">
          <h2 className="text-lg font-bold sm:text-2xl">
          Are you certain you wish to exit?
          </h2>
          <p className="text-gray-500 sm:text-lg">
          This lesson progress will be lost.
          </p>
        </div>
        <div className="flex grow flex-col items-center justify-center gap-4 sm:flex-row-reverse">
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-pink-400 bg-pink-400 py-3 font-bold uppercase text-white transition hover:brightness-105 sm:w-48"
            href="/learn"
          >
            Quit
          </Link>
          <button
            className="w-full rounded-2xl py-3 font-bold uppercase text-blue-400 transition hover:brightness-90 sm:w-48 sm:border-2 sm:border-b-4 sm:border-gray-300 sm:text-gray-400 sm:hover:bg-gray-100"
            onClick={() => setQuitMessageShown(false)}
          >
            Stay
          </button>
        </div>
      </article>
    </>
  );
};

const CheckAnswer = ({
  isAnswerSelected,
  isAnswerCorrect,
  correctAnswerShown,
  correctAnswer,
  onCheckAnswer,
  onFinish,
  onSkip,
}: {
  isAnswerSelected: boolean;
  isAnswerCorrect: boolean;
  correctAnswerShown: boolean;
  correctAnswer: string;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
}) => {
  return (
    <>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={onSkip}
          >
            Skip
          </button>
          {!isAnswerSelected ? (
            <button
              className="grow rounded-2xl bg-gray-200 p-3 font-bold uppercase text-gray-400 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
              disabled
            >
              Check
            </button>
          ) : (
            <button
              onClick={onCheckAnswer}
              className="grow rounded-2xl border-b-4 border-pink-600 bg-pink-400 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
            >
              Check
            </button>
          )}
        </div>
      </section>

      <div
        className={
          correctAnswerShown
            ? isAnswerCorrect
              ? "fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all"
              : "fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all"
            : "fixed -bottom-52 left-0 right-0"
        }
      >
        <div className="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14">
          <>
            {isAnswerCorrect ? (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-green-500 sm:block">
                  <DoneSvg />
                </div>
                <div className="text-2xl">Good job!</div>
              <div>
              <Image src={clapss} width="60" height="60" alt={""} />
              </div>
              </div>
            ) : (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-red-500 sm:block">
                  <BigCloseSvg />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl">Correct solution:</div>{" "}
                  <div className="text-sm font-normal">{correctAnswer}</div>
                </div>
                <div>
                  <Image src={better} width="60" height="60" alt={""} />
                  </div>
              </div>
            )}
          </>
          <button
            onClick={onFinish}
            className={
              isAnswerCorrect
                ? "w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
                : "w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

const ProblemSelect1Of3 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswer,
  setSelectedAnswer,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem1;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswer: number | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<number | null>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, answers, correctAnswer } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-6xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-0">
          <h1 className="self-start text-2xl font-bold sm:text-4xl">
            {question}
          </h1>
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            role="radiogroup"
          >
            {answers.map((answer, i) => {
              return (
                <div
                  key={i}
                  className={
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  }
                  role="radio"
                  aria-checked={i === selectedAnswer}
                  tabIndex={0}
                  onClick={() => setSelectedAnswer(i)}
                >
                  {answer.icon}
                  <h2 className="text-center">{answer.name}</h2>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={answers[correctAnswer].name}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswer !== null}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglish = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem2;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={journalist} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem3;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={mother} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis1 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem111;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={croupie} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis2 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem222;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={fathe} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis3 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem333;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={grandmothe} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis4 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem444;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={studen} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis5 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem555;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={judg} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis6 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem666;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={mine} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis7 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem777;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={policema} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};

const ProblemWriteInEnglis9 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem999;
  correctAnswerCount: number;
  totalCorrectAnswersNeeded: number;
  selectedAnswers: number[];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  correctAnswerShown: boolean;
  quitMessageShown: boolean;
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>;
  isAnswerCorrect: boolean;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
  hearts: number | null;
}) => {
  const { question, correctAnswer, answerTiles } = problem;

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className="flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24">
          <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
            Write this in English
          </h1>

          <div className="w-full">
            <div className="flex items-center gap-2 px-2">
              <Image src={showma} alt="" width={92} height={115} />
              <div className="relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4">
                {question}
                <div
                  className="absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white"
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1">
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className="rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i);
                      });
                    }}
                  >
                    {answerTiles[i]}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-2xl border-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200"
                      : "rounded-2xl border-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers;
                      }
                      return [...selectedAnswers, i];
                    })
                  }
                >
                  {answerTile}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  );
};


const LessonComplete = ({
  correctAnswerCount,
  incorrectAnswerCount,
  startTime,
  endTime,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  correctAnswerCount: number;
  incorrectAnswerCount: number;
  startTime: React.MutableRefObject<number>;
  endTime: React.MutableRefObject<number>;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const router = useRouter();
  const isPractice = "practice" in router.query;

  const increaseXp = useBoundStore((x) => x.increaseXp);
  const addToday = useBoundStore((x) => x.addToday);
  const increaseLingots = useBoundStore((x) => x.increaseLingots);
  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted
  );
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        <div><Image src={elep} width="300" height="200" alt={""} /></div>
        <h1 className="text-center text-3xl text-black">
          Lesson Complete!
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="min-w-[110px] rounded-xl border-5 bg-[#e75ea3] border-bg-[#e75ea3]">
            <h2 className="py-1 text-center text-white">Total LP</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-[#e75ea3]">
              {correctAnswerCount}
            </div>
          </div>
          <div className="min-w-[110px] rounded-xl border-5 bg-[#fdd310] border-bg-[#fdd310]">
            <h2 className="py-1 text-center text-white">Committed</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-[#fdd310]">
              {formatTime(endTime.current - startTime.current)}
            </div>
          </div>
          <div className="min-w-[110px] rounded-xl border-5 bg-[#757acd] border-bg-[#757acd]">
            <h2 className="py-1 text-center text-white">Amazing</h2>
            <div className="flex justify-center rounded-xl bg-white py-4 text-[#757acd]">
              {Math.round(
                (correctAnswerCount /
                  (correctAnswerCount + incorrectAnswerCount)) *
                  100
              )}
              %
            </div>
          </div>
        </div>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className={
              "flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
            href="/learn"
            onClick={() => {
              increaseXp(correctAnswerCount);
              addToday();
              increaseLingots(isPractice ? 0 : 1);
              if (!isPractice) {
                increaseLessonsCompleted();
              }
            }}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};

type QuestionResult = {
  question: string;
  yourResponse: string;
  correctResponse: string;
};

const ReviewLesson = ({
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const [selectedQuestionResult, setSelectedQuestionResult] =
    useState<null | QuestionResult>(null);
  return (
    <div
      className={[
        "fixed inset-0 flex items-center justify-center p-5 transition duration-300",
        reviewLessonShown ? "" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 bg-black",
          reviewLessonShown ? "opacity-75" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setReviewLessonShown(false)}
      ></div>
      <div className="relative flex w-full max-w-4xl flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8">
        <button
          className="absolute -top-5 -right-5 rounded-full border-2 border-gray-200 bg-gray-100 p-1 text-gray-400 hover:brightness-90"
          onClick={() => setReviewLessonShown(false)}
        >
          <BigCloseSvg className="h-8 w-8" />
          <span className="sr-only">Close</span>
        </button>
        <h2 className="text-center text-3xl">Review your answers!</h2>
        <p className="text-center text-xl text-gray-400">
          Click the tiles below to reveal the solutions
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {questionResults.map((questionResult, i) => {
            return (
              <button
                key={i}
                className={[
                  "relative flex flex-col items-stretch gap-3 rounded-xl p-5 text-left",
                  questionResult.yourResponse === questionResult.correctResponse
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-500",
                ].join(" ")}
                onClick={() =>
                  setSelectedQuestionResult((selectedQuestionResult) =>
                    selectedQuestionResult === questionResult
                      ? null
                      : questionResult
                  )
                }
              >
                <div className="flex justify-between gap-2">
                  <h3 className="font-bold">{questionResult.question}</h3>
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                    {questionResult.yourResponse ===
                    questionResult.correctResponse ? (
                      <DoneSvg className="h-5 w-5" />
                    ) : (
                      <BigCloseSvg className="h-5 w-5" />
                    )}
                  </div>
                </div>
                <div>{questionResult.yourResponse}</div>
                {selectedQuestionResult === questionResult && (
                  <div className="absolute top-20 left-1 right-1 z-10 rounded-2xl border-2 border-gray-200 bg-white p-3 text-sm tracking-tighter">
                    <div
                      className="absolute -top-2 h-3 w-3 rotate-45 border-l-2 border-t-2 border-gray-200 bg-white"
                      style={{ left: "calc(50% - 6px)" }}
                    ></div>
                    <div className="font-bold uppercase text-gray-400">
                      Your response:
                    </div>
                    <div className="mb-3 text-gray-700">
                      {questionResult.yourResponse}
                    </div>
                    <div className="font-bold uppercase text-gray-400">
                      Correct response:
                    </div>
                    <div className="text-gray-700">
                      {questionResult.correctResponse}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const LessonFastForwardStart = ({
  unitNumber,
  setIsStartingLesson,
}: {
  unitNumber: number;
  setIsStartingLesson: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardStartSvg />
        <h1 className="text-lg font-bold">
          Want to jump to Unit {unitNumber}?
        </h1>
        <p className="text-sm text-gray-400">
          {`Pass the test to jump ahead. We won't make it easy for you though.`}
        </p>
      </div>
      <div className="flex flex-col gap-5"></div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between">
          <Link
            href="/learn"
            className="font-bold uppercase text-blue-400 transition hover:brightness-110"
          >
            Maybe later
          </Link>
          <button
            className="w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 p-3 font-bold uppercase text-white transition hover:brightness-110 sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setIsStartingLesson(false)}
          >
            {`Let's go`}
          </button>
        </div>
      </section>
    </div>
  );
};

const LessonFastForwardEndFail = ({
  unitNumber,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  unitNumber: number;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardEndFailSvg />
        <h1 className="text-2xl font-bold">
          {`You didn't unlock Unit ${unitNumber}`}
        </h1>
        <p className="text-lg text-gray-500">
          {`Don't worry! Practice makes perfect.`}
        </p>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/learn"
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};

const LessonFastForwardEndPass = ({
  unitNumber,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  unitNumber: number;
  reviewLessonShown: boolean;
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
  questionResults: QuestionResult[];
}) => {
  const jumpToUnit = useBoundStore((x) => x.jumpToUnit);
  return (
    <div className="flex min-h-screen flex-col px-5 py-8 text-center">
      <div className="flex grow flex-col items-center justify-center gap-5">
        <LessonFastForwardEndPassSvg />
        <h1 className="text-2xl font-bold">You unlocked Unit {unitNumber}!</h1>
        <p className="text-lg text-gray-500">
          Way to go! You’re making great strides!
        </p>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={() => setReviewLessonShown(true)}
          >
            Review lesson
          </button>
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/learn"
            onClick={() => jumpToUnit(unitNumber)}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  );
};
