import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import meat from 'public/project assets/food and drinks/meat.png'
import hello from 'public/hiii.png'
import please from 'public/project assets/Basic Phrases/please.png'
import water from 'public/project assets/food and drinks/water.png'
import yes from 'public/yesss.png'
import icecream from 'public/project assets/food and drinks/ice-cream.png'
import Goodbye from 'public/bye.png'
import Thankyou from 'public/project assets/Basic Phrases/Thankyou.png'
import salad from 'public/project assets/food and drinks/salad.png'
import cheese from 'public/project assets/food and drinks/cheese.png'
import fish from 'public/project assets/food and drinks/fish.png'
import excuseme from 'public/excusemee.png'
import tvwatching from 'public/project assets/Everyday activities/tv-watching.png'
import no from 'public/nooo.png'
import howareyou from 'public/project assets/Basic Phrases/how-are-you.png'
import pizza from 'public/project assets/food and drinks/pizza.png'
import sorry from 'public/sorryyy.png'
import understand from 'public/project assets/Basic Phrases/understand.png'
import straight from 'public/project assets/Travel and directions/Straight-ahead.png'
import left from 'public/project assets/Travel and directions/left-turn.png'
import airport from 'public/project assets/Travel and directions/airport.png'
import clapss from 'public/applause.gif'
import better from 'public/thumb-down.gif'
import elep from 'public/ele.png'
import goodmorningg from 'public/goodmor.png'
import nicetomeetyou from 'public/nicetomeetyou.png'
import whereistoilet from 'public/whereistoilet.png'
import imlost from 'public/lost.png'
import imhungry from 'public/hungry.png'
import imthirsty from 'public/thristy.png'
import whatistime from 'public/whatistime.png'
import whatsyournumber from 'public/whatisphonenymber.png'
import whereareyoufrom from 'public/whereareyoufrom.png'
import canitakephoto from 'public/canitakephoto.png'
import whatstheweather from 'public/whatstheweather.png'
import goodnight from 'public/goodnight.png'
import helpp from 'public/help.png'
import haveagoodday from 'public/goodday.png'
import goodafternoon from 'public/goodafternoon.png'
import openn from 'public/open.png'
import closedd from 'public/clos.png'
import howoldareyou from 'public/howoldareyou.png'
import cheerss from 'public/cheers.png'
import youarewelcome from 'public/welcomeyou.png'


import _ from "lodash";

const handleClick = () => {
  const audio = new Audio('He.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick1 = () => {
  const audio = new Audio('Hejda.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick2 = () => {
  const audio = new Audio('Snall.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick3 = () => {
  const audio = new Audio('Kot.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick4 = () => {
  const audio = new Audio('ja.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick5 = () => {
  const audio = new Audio('Vatte.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick6 = () => {
  const audio = new Audio('Glas.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick7 = () => {
  const audio = new Audio('Tac.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick8 = () => {
  const audio = new Audio('Fis.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick9 = () => {
  const audio = new Audio('Os.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick10 = () => {
  const audio = new Audio('Salla.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick11 = () => {
  const audio = new Audio('Ursakta mi.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick12 = () => {
  const audio = new Audio('Titta pa T.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick14 = () => {
  const audio = new Audio('Nej.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick16 = () => {
  const audio = new Audio('Hur mar d.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick17 = () => {
  const audio = new Audio('Pizz.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick18 = () => {
  const audio = new Audio('Forla.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick19 = () => {
  const audio = new Audio('Jag forstar int.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick20 = () => {
  const audio = new Audio('Rakt fra.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick21 = () => {
  const audio = new Audio('Vanste.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClick22 = () => {
  const audio = new Audio('Flygplat.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic1 = () => {
  const audio = new Audio('God morgon.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic2 = () => {
  const audio = new Audio('Trevligt att traffas.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic3 = () => {
  const audio = new Audio('Vart finns toaletten.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic4 = () => {
  const audio = new Audio('jag ar vilse.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic5 = () => {
  const audio = new Audio('jag ar hungrig.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic6 = () => {
  const audio = new Audio('jag ar torstig.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic7 = () => {
  const audio = new Audio('Vad ar klockan.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic8 = () => {
  const audio = new Audio('Vad ar ditt telefonnummer.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic9 = () => {
  const audio = new Audio('Var kommer du ifran.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic10 = () => {
  const audio = new Audio('Kan jag ta ett foto.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic11 = () => {
  const audio = new Audio('Hur ar vadret idag.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic12 = () => {
  const audio = new Audio('Godnatt.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic13 = () => {
  const audio = new Audio('hjalp.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic14 = () => {
  const audio = new Audio('Ha en bra dag.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic15 = () => {
  const audio = new Audio('god eftermiddag.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic16 = () => {
  const audio = new Audio('oppen.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic17 = () => {
  const audio = new Audio('Stangd.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic18 = () => {
  const audio = new Audio('Hur gammal ar du.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic19 = () => {
  const audio = new Audio('Skal.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

const handleClic20 = () => {
  const audio = new Audio('Varsagod.mp3');

  audio.play().catch((error) => {
    console.error('Error playing sound:', error);
  });
};

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
  question: `What is the Swedish translation of "Hi"?`,
  answers: [
    { icon: <button onClick={handleClick3}><Image src={meat} width="300" height="200" alt={""} /></button>, name: "Kött" },
    { icon: <button onClick={handleClick}><Image src={hello} width="300" height="200" alt={""} /></button>, name: "Hej" },
    { icon: <button onClick={handleClick2}><Image src={please} width="300" height="200" alt={""} /></button>, name: "Snälla" },
    { icon: <button onClick={handleClick5}><Image src={water} width="300" height="200" alt={""} /></button>, name: "Vatten" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem5 = {
  type: "SELET",
  question: `Identify the Swedish translation for "bye".`,
  answers: [
    { icon: <button onClick={handleClick4}><Image src={yes} width="300" height="200" alt={""} /></button>, name: "Ja" },
    { icon: <button onClick={handleClick6}><Image src={icecream} width="300" height="200" alt={""} /></button>, name: "Glass" },
    { icon: <button onClick={handleClick1}><Image src={Goodbye} width="300" height="200" alt={""} /></button>, name: "Hejdå" },
    { icon: <button onClick={handleClick16}><Image src={howareyou} width="300" height="200" alt={""} /></button>, name: "Hur mår du?" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem4 = {
  type: "SELECT",
  question: `How would you say "Thank you" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClick10}><Image src={salad} width="300" height="200" alt={""} /></button>, name: "Sallad" },
    { icon: <button onClick={handleClick7}><Image src={Thankyou} width="300" height="200" alt={""} /></button>, name: "Tack" },
    { icon: <button onClick={handleClick9}><Image src={cheese} width="300" height="200" alt={""} /></button>, name: "Ost" },
    { icon: <button onClick={handleClick14}><Image src={no} width="300" height="200" alt={""} /></button>, name: "Nej" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem6 = {
  type: "SELECT1",
  question: `What is the Swedish translation for "Excuse me"?`,
  answers: [
    { icon: <button onClick={handleClick11}><Image src={excuseme} width="300" height="200" alt={""} /></button>, name: "Ursäkta mig" },
    { icon: <button onClick={handleClick12}><Image src={tvwatching} width="300" height="200" alt={""} /></button>, name: "Titta på TV" },
    { icon: <button onClick={handleClick14}><Image src={no} width="300" height="200" alt={""} /></button>, name: "Nej" },
    { icon: <button onClick={handleClick8}><Image src={fish} width="300" height="200" alt={""} /></button>, name: "Fisk" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem7 = {
  type: "SELECT2",
  question: `Identify the Swedish translation for "Yes".`,
  answers: [
    { icon: <button onClick={handleClick3}><Image src={meat} width="300" height="200" alt={""} /></button>, name: "Kött" },
    { icon: <button onClick={handleClick4}><Image src={yes} width="300" height="200" alt={""} /></button>, name: "Ja" },
    { icon: <button onClick={handleClick7}><Image src={Thankyou} width="300" height="200" alt={""} /></button>, name: "Tack" },
    { icon: <button onClick={handleClick17}><Image src={pizza} width="300" height="200" alt={""} /></button>, name: "Pizza" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem8 = {
  type: "SELECT3",
  question: `How would you say "No" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClick14}><Image src={no} width="300" height="200" alt={""} /></button>, name: "Nej" },
    { icon: <button onClick={handleClick5}><Image src={water} width="300" height="200" alt={""} /></button>, name: "Vatten" },
    { icon: <button onClick={handleClick6}><Image src={icecream} width="300" height="200" alt={""} /></button>, name: "Glass" },
    { icon: <button onClick={handleClick7}><Image src={Thankyou} width="300" height="200" alt={""} /></button>, name: "Tack" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem9 = {
  type: "SELECT4",
  question: `What is the Swedish translation for "Please"?`,
  answers: [
    { icon: <button onClick={handleClick4}><Image src={yes} width="300" height="200" alt={""} /></button>, name: "Ja" },
    { icon: <button onClick={handleClick11}><Image src={excuseme} width="300" height="200" alt={""} /></button>, name: "Ursäkta mig" },
    { icon: <button onClick={handleClick2}><Image src={please} width="300" height="200" alt={""} /></button>, name: "Snälla" },
    { icon: <button onClick={handleClick3}><Image src={meat} width="300" height="200" alt={""} /></button>, name: "Kött" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem10 = {
  type: "SELECT5",
  question: `Identify the Swedish translation of "sorry".`,
  answers: [
    { icon: <button onClick={handleClick3}><Image src={meat} width="300" height="200" alt={""} /></button>, name: "Kött" },
    { icon: <button onClick={handleClick21}><Image src={left} width="300" height="200" alt={""} /></button>, name: "Vänster" },
    { icon: <button onClick={handleClick18}><Image src={sorry} width="300" height="200" alt={""} /></button>, name: "Förlåt" },
    { icon: <button onClick={handleClick20}><Image src={straight} width="300" height="200" alt={""} /></button>, name: "Rakt fram" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem11 = {
  type: "SELECT6",
  question: `How would you say "How are you?" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClick19}><Image src={understand} width="300" height="200" alt={""} /></button>, name: "Jag förstår inte" },
    { icon: <button onClick={handleClick16}><Image src={howareyou} width="300" height="200" alt={""} /></button>, name: "Hur mår du?" },
    { icon: <button onClick={handleClick14}><Image src={no} width="300" height="200" alt={""} /></button>, name: "Nej" },
    { icon: <button onClick={handleClick7}><Image src={Thankyou} width="300" height="200" alt={""} /></button>, name: "Tack" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem12 = {
  type: "SELECT7",
  question: `What is the Swedish translation of "I don't understand"?`,
  answers: [
    { icon: <button onClick={handleClick2}><Image src={please} width="300" height="200" alt={""} /></button>, name: "Snälla" },
    { icon: <button onClick={handleClick11}><Image src={excuseme} width="300" height="200" alt={""} /></button>, name: "Ursäkta mig" },
    { icon: <button onClick={handleClick19}><Image src={understand} width="300" height="200" alt={""} /></button>, name: "Jag förstår inte" },
    { icon: <button onClick={handleClick22}><Image src={airport} width="300" height="200" alt={""} /></button>, name: "Flygplats" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem13 = {
  type: "SELECT9",
  question: `What is the Swedish translation of "Good morning"?`,
  answers: [
    { icon: <button onClick={handleClic1}><Image src={goodmorningg} width="300" height="200" alt={""} /></button>, name: "God morgon" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
    { icon: <button onClick={handleClic4}><Image src={imlost} width="300" height="200" alt={""} /></button>, name: "Jag är vilse" },
    { icon: <button onClick={handleClic9}><Image src={whereareyoufrom} width="300" height="200" alt={""} /></button>, name: "Var kommer du ifrån?" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem14 = {
  type: "SELECT10",
  question: `How would you say "Nice to meet you" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClick5}><Image src={water} width="300" height="200" alt={""} /></button>, name: "Vatten" },
    { icon: <button onClick={handleClick}><Image src={hello} width="300" height="200" alt={""} /></button>, name: "Hej" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
    { icon: <button onClick={handleClic6}><Image src={imthirsty} width="300" height="200" alt={""} /></button>, name: "jag är törstig" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem15 = {
  type: "SELECT11",
  question: `Which option is the correct Swedish translation for "Where is the toilet?"?`,
  answers: [
    { icon: <button onClick={handleClic4}><Image src={imlost} width="300" height="200" alt={""} /></button>, name: "Jag är vilse" },
    { icon: <button onClick={handleClic12}><Image src={goodnight} width="300" height="200" alt={""} /></button>, name: "Godnatt" },
    { icon: <button onClick={handleClick2}><Image src={please} width="300" height="200" alt={""} /></button>, name: "Snälla" },
    { icon: <button onClick={handleClic3}><Image src={whereistoilet} width="300" height="200" alt={""} /></button>, name: "Vart finns toaletten?" },
  ],
  correctAnswer: 3,
} as const;

const lessonProblem16 = {
  type: "SELECT12",
  question: `How do you say "I'm lost" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic5}><Image src={imhungry} width="300" height="200" alt={""} /></button>, name: "Jag är hungrig" },
    { icon: <button onClick={handleClic6}><Image src={imthirsty} width="300" height="200" alt={""} /></button>, name: "jag är törstig" },
    { icon: <button onClick={handleClic4}><Image src={imlost} width="300" height="200" alt={""} /></button>, name: "Jag är vilse" },
    { icon: <button onClick={handleClick21}><Image src={left} width="300" height="200" alt={""} /></button>, name: "Vänster" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem17 = {
  type: "SELECT13",
  question: `What is the Swedish translation for "I'm hungry"?`,
  answers: [
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
    { icon: <button onClick={handleClic7}><Image src={whatistime} width="300" height="200" alt={""} /></button>, name: "Vad är klockan?" },
    { icon: <button onClick={handleClick3}><Image src={meat} width="300" height="200" alt={""} /></button>, name: "Kött" },
    { icon: <button onClick={handleClic5}><Image src={imhungry} width="300" height="200" alt={""} /></button>, name: "Jag är hungrig" },
  ],
  correctAnswer: 3,
} as const;

const lessonProblem18 = {
  type: "SELECT14",
  question: `How would you say "I'm thirsty" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic3}><Image src={whereistoilet} width="300" height="200" alt={""} /></button>, name: "Vart finns toaletten?" },
    { icon: <button onClick={handleClic6}><Image src={imthirsty} width="300" height="200" alt={""} /></button>, name: "jag är törstig" },
    { icon: <button onClick={handleClic20}><Image src={youarewelcome} width="300" height="200" alt={""} /></button>, name: "Varsågod" },
    { icon: <button onClick={handleClic14}><Image src={haveagoodday} width="300" height="200" alt={""} /></button>, name: "Ha en bra dag!" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem19 = {
  type: "SELECT15",
  question: `Identify the Swedish translation for "What time is it?"`,
  answers: [
    { icon: <button onClick={handleClick18}><Image src={sorry} width="300" height="200" alt={""} /></button>, name: "Förlåt" },
    { icon: <button onClick={handleClic9}><Image src={whereareyoufrom} width="300" height="200" alt={""} /></button>, name: "Var kommer du ifrån?" },
    { icon: <button onClick={handleClic4}><Image src={imlost} width="300" height="200" alt={""} /></button>, name: "Jag är vilse" },
    { icon: <button onClick={handleClic7}><Image src={whatistime} width="300" height="200" alt={""} /></button>, name: "Vad är klockan?" },
  ],
  correctAnswer: 3,
} as const;

const lessonProblem20 = {
  type: "SELECT16",
  question: `What's the correct Swedish translation for "What's your phone number?"?`,
  answers: [
    { icon: <button onClick={handleClic8}><Image src={whatsyournumber} width="300" height="200" alt={""} /></button>, name: "Vad är ditt telefonnummer?" },
    { icon: <button onClick={handleClic3}><Image src={whereistoilet} width="300" height="200" alt={""} /></button>, name: "Vart finns toaletten?" },
    { icon: <button onClick={handleClic10}><Image src={canitakephoto} width="300" height="200" alt={""} /></button>, name: "Kan jag ta ett foto?" },
    { icon: <button onClick={handleClic20}><Image src={youarewelcome} width="300" height="200" alt={""} /></button>, name: "Varsågod" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem21 = {
  type: "SELECT17",
  question: `How do you ask "Where are you from?" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic18}><Image src={howoldareyou} width="300" height="200" alt={""} /></button>, name: "Hur gammal är du?" },
    { icon: <button onClick={handleClic9}><Image src={whereareyoufrom} width="300" height="200" alt={""} /></button>, name: "Var kommer du ifrån?" },
    { icon: <button onClick={handleClic1}><Image src={goodmorningg} width="300" height="200" alt={""} /></button>, name: "God morgon" },
    { icon: <button onClick={handleClic19}><Image src={cheerss} width="300" height="200" alt={""} /></button>, name: "Skål!" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem22 = {
  type: "SELECT18",
  question: `Which option is the correct way to ask "Can I take a photo?" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic12}><Image src={goodnight} width="300" height="200" alt={""} /></button>, name: "Godnatt" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
    { icon: <button onClick={handleClic14}><Image src={haveagoodday} width="300" height="200" alt={""} /></button>, name: "Ha en bra dag!" },
    { icon: <button onClick={handleClic10}><Image src={canitakephoto} width="300" height="200" alt={""} /></button>, name: "Kan jag ta ett foto?" },
  ],
  correctAnswer: 3,
} as const;

const lessonProblem23 = {
  type: "SELECT19",
  question: `How do you inquire "What's the weather like today?" in Swedish`,
  answers: [
    { icon: <button onClick={handleClic14}><Image src={haveagoodday} width="300" height="200" alt={""} /></button>, name: "Ha en bra dag!" },
    { icon: <button onClick={handleClic4}><Image src={imlost} width="300" height="200" alt={""} /></button>, name: "Jag är vilse" },
    { icon: <button onClick={handleClic11}><Image src={whatstheweather} width="300" height="200" alt={""} /></button>, name: " Hur är vädret idag?" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem24 = {
  type: "SELECT20",
  question: `What is the Swedish translation for "Good night"?`,
  answers: [
    { icon: <button onClick={handleClic12}><Image src={goodnight} width="300" height="200" alt={""} /></button>, name: "Godnatt" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
    { icon: <button onClick={handleClic5}><Image src={imhungry} width="300" height="200" alt={""} /></button>, name: "Jag är hungrig" },
    { icon: <button onClick={handleClic19}><Image src={cheerss} width="300" height="200" alt={""} /></button>, name: "Skål!" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem25 = {
  type: "SELECT21",
  question: `Identify the correct Swedish translation for "Help".`,
  answers: [
    { icon: <button onClick={handleClick12}><Image src={tvwatching} width="300" height="200" alt={""} /></button>, name: "Titta på TV" },
    { icon: <button onClick={handleClic12}><Image src={goodnight} width="300" height="200" alt={""} /></button>, name: "Godnatt" },
    { icon: <button onClick={handleClic13}><Image src={helpp} width="300" height="200" alt={""} /></button>, name: "Hjälp" },
    { icon: <button onClick={handleClic19}><Image src={cheerss} width="300" height="200" alt={""} /></button>, name: "Skål!" },
    
  ],
  correctAnswer: 2,
} as const;

const lessonProblem26 = {
  type: "SELECT22",
  question: `How would you wish someone to "Have a good day!" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic4}><Image src={imlost} width="300" height="200" alt={""} /></button>, name: "Jag är vilse" },
    { icon: <button onClick={handleClick8}><Image src={fish} width="300" height="200" alt={""} /></button>, name: "Fisk" },
    { icon: <button onClick={handleClic14}><Image src={haveagoodday} width="300" height="200" alt={""} /></button>, name: "Ha en bra dag!" },
    { icon: <button onClick={handleClic3}><Image src={whereistoilet} width="300" height="200" alt={""} /></button>, name: "Vart finns toaletten?" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem27 = {
  type: "SELECT23",
  question: `What's the appropriate Swedish phrase for "Good Afternoon"?`,
  answers: [
    { icon: <button onClick={handleClic19}><Image src={cheerss} width="300" height="200" alt={""} /></button>, name: "Skål!" },
    { icon: <button onClick={handleClic15}><Image src={goodafternoon} width="300" height="200" alt={""} /></button>, name: "God eftermiddag" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
    { icon: <button onClick={handleClic18}><Image src={howoldareyou} width="300" height="200" alt={""} /></button>, name: "Hur gammal är du?" },
  ],
  correctAnswer: 1,
} as const;

const lessonProblem28 = {
  type: "SELECT24",
  question: `How would you indicate that something is "Open" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic16}><Image src={openn} width="300" height="200" alt={""} /></button>, name: "Öppen" },
    { icon: <button onClick={handleClic7}><Image src={whatistime} width="300" height="200" alt={""} /></button>, name: "Vad är klockan?" },
    { icon: <button onClick={handleClic12}><Image src={goodnight} width="300" height="200" alt={""} /></button>, name: "Godnatt" },
    { icon: <button onClick={handleClick5}><Image src={water} width="300" height="200" alt={""} /></button>, name: "Vatten" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem29 = {
  type: "SELECT25",
  question: `Which option is the correct Swedish translation for "Closed"?`,
  answers: [
    { icon: <button onClick={handleClic17}><Image src={closedd} width="300" height="200" alt={""} /></button>, name: "Stängd" },
    { icon: <button onClick={handleClic6}><Image src={imthirsty} width="300" height="200" alt={""} /></button>, name: "jag är törstig" },
    { icon: <button onClick={handleClic14}><Image src={haveagoodday} width="300" height="200" alt={""} /></button>, name: "Ha en bra dag!" },
    { icon: <button onClick={handleClic18}><Image src={howoldareyou} width="300" height="200" alt={""} /></button>, name: "Hur gammal är du?" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem30 = {
  type: "SELECT26",
  question: `How do you ask "How old are you?" in Swedish?`,
  answers: [
    { icon: <button onClick={handleClic17}><Image src={closedd} width="300" height="200" alt={""} /></button>, name: "Stängd" },
    { icon: <button onClick={handleClic10}><Image src={canitakephoto} width="300" height="200" alt={""} /></button>, name: "Kan jag ta ett foto?" },
    { icon: <button onClick={handleClic18}><Image src={howoldareyou} width="300" height="200" alt={""} /></button>, name: "Hur gammal är du?" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
  ],
  correctAnswer: 2,
} as const;

const lessonProblem31 = {
  type: "SELECT27",
  question: `What is the Swedish equivalent for "Cheers!"?`,
  answers: [
    { icon: <button onClick={handleClic19}><Image src={cheerss} width="300" height="200" alt={""} /></button>, name: "Skål!" },
    { icon: <button onClick={handleClic12}><Image src={goodnight} width="300" height="200" alt={""} /></button>, name: "Godnatt" },
    { icon: <button onClick={handleClic3}><Image src={whereistoilet} width="300" height="200" alt={""} /></button>, name: "Vart finns toaletten?" },
    { icon: <button onClick={handleClic2}><Image src={nicetomeetyou} width="300" height="200" alt={""} /></button>, name: "Trevligt att träffas" },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem32 = {
  type: "SELECT29",
  question: `Identify the Swedish translation for "You're welcome".`,
  answers: [
    { icon: <button onClick={handleClic6}><Image src={imthirsty} width="300" height="200" alt={""} /></button>, name: "jag är törstig" },
    { icon: <button onClick={handleClic13}><Image src={helpp} width="300" height="200" alt={""} /></button>, name: "Hjälp" },
    { icon: <button onClick={handleClic20}><Image src={youarewelcome} width="300" height="200" alt={""} /></button>, name: "Varsågod" },
    { icon: <button onClick={handleClic16}><Image src={openn} width="300" height="200" alt={""} /></button>, name: "Öppen" },
  ],
  correctAnswer: 2,
} as const;


const lessonProblems = [lessonProblem1,lessonProblem13, lessonProblem5, lessonProblem14,lessonProblem4, lessonProblem15,lessonProblem6, lessonProblem16,lessonProblem7, 
  lessonProblem17,lessonProblem8, lessonProblem18,lessonProblem9, lessonProblem19,lessonProblem10, lessonProblem20,lessonProblem11, lessonProblem21,lessonProblem12,lessonProblem22,
  lessonProblem23,lessonProblem24,lessonProblem25,lessonProblem26,lessonProblem27,lessonProblem28,lessonProblem29,lessonProblem30,lessonProblem31,lessonProblem32];



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
  

  const totalCorrectAnswersNeeded = 10 ;

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
    const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);


  const onCheckAnswer = () => {
    setIsCorrectAnswerSelected(isAnswerCorrect);
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
            : problem.type === "SELECT"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELET"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT1"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT2"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT3"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT4"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT5"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT6"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT7"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT9"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT10"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT11"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT12"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT13"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT14"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT15"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT16"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT17"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT18"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT19"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT20"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT21"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT22"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT23"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT24"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT25"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT26"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT27"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            : problem.type === "SELECT29"
            ? problem.answers[selectedAnswer ?? 1]?.name ?? ""
            :"",

        correctResponse:
          problem.type === "SELECT_1_OF_3"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELET"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT1"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT2"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT3"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT4"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT5"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT6"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT7"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT9"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT10"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT11"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT12"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT13"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT14"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT15"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT16"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT17"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT18"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT19"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT20"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT21"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT22"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT23"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT24"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT25"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT26"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT27"
            ? problem.answers[problem.correctAnswer].name
            : problem.type === "SELECT29"
            ? problem.answers[problem.correctAnswer].name
            :"",
    
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
    case "SELECT_1_OF_3": {
      return (
        <ProblemSelect1Of3
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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
    case "SELECT": {
      return (
        <ProblemSelect1Of
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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
    case "SELET": {
      return (
        <ProblemSelect1f3
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT1": {
      return (
        <ProblemSelect1Of1
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT2": {
      return (
        <ProblemSelect1Of2
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT3": {
      return (
        <ProblemSelect1Of4
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT4": {
      return (
        <ProblemSelect1Of5
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT5": {
      return (
        <ProblemSelect1Of6
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT6": {
      return (
        <ProblemSelect1Of7
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT7": {
      return (
        <ProblemSelect1Of8
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT9": {
      return (
        <ProblemSelect1Of9
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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
    
    case "SELECT10": {
      return (
        <ProblemSelect1Of10
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT11": {
      return (
        <ProblemSelect1Of11
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT12": {
      return (
        <ProblemSelect1Of12
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT13": {
      return (
        <ProblemSelect1Of13
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT14": {
      return (
        <ProblemSelect1Of14
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT15": {
      return (
        <ProblemSelect1Of15
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT16": {
      return (
        <ProblemSelect1Of16
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT17": {
      return (
        <ProblemSelect1Of17
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT18": {
      return (
        <ProblemSelect1Of18
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT19": {
      return (
        <ProblemSelect1Of19
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT20": {
      return (
        <ProblemSelect1Of20
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT21": {
      return (
        <ProblemSelect1Of21
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT22": {
      return (
        <ProblemSelect1Of22
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT23": {
      return (
        <ProblemSelect1Of23
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT24": {
      return (
        <ProblemSelect1Of24
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT25": {
      return (
        <ProblemSelect1Of25
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT26": {
      return (
        <ProblemSelect1Of26
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT27": {
      return (
        <ProblemSelect1Of27
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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

    case "SELECT29": {
      return (
        <ProblemSelect1Of29
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
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
          <p className="text-gray-500 sm:text-xl">
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
      <section className="sm:p-10">
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
              <Image src={clapss} width="70" height="60" alt={""} />
              </div>
              </div>
            ) : (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-red-500 sm:block">
                  <BigCloseSvg />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl"> Incorrect solution:</div>{" "}
                  <div className="text-sm font-normal">{'"' + correctAnswer + '"' + ' is the correct solution'}</div>
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);


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
                className={`${
                  i === selectedAnswer
                    ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                    : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                } ${
                  selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                } ${
                  correctAnswerShown && i === correctAnswer
                    ? isCorrectAnswerSelected
                      ? "ring-4 ring-red-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                    : ""
                }`}
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

const ProblemSelect1Of = ({
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
  problem: typeof lessonProblem4;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of1 = ({
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
  problem: typeof lessonProblem6;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of2 = ({
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
  problem: typeof lessonProblem7;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of4 = ({
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
  problem: typeof lessonProblem8;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of5 = ({
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
  problem: typeof lessonProblem9;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of6 = ({
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
  problem: typeof lessonProblem10;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of7 = ({
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
  problem: typeof lessonProblem11;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of8 = ({
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
  problem: typeof lessonProblem12;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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



const ProblemSelect1f3 = ({
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
  problem: typeof lessonProblem5;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of9 = ({
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
  problem: typeof lessonProblem13;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of10 = ({
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
  problem: typeof lessonProblem14;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of11 = ({
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
  problem: typeof lessonProblem15;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of12 = ({
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
  problem: typeof lessonProblem16;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of13 = ({
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
  problem: typeof lessonProblem17;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of14 = ({
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
  problem: typeof lessonProblem18;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of15 = ({
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
  problem: typeof lessonProblem19;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of16 = ({
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
  problem: typeof lessonProblem20;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of17 = ({
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
  problem: typeof lessonProblem21;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of18 = ({
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
  problem: typeof lessonProblem22;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of19 = ({
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
  problem: typeof lessonProblem23;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of20 = ({
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
  problem: typeof lessonProblem24;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of21 = ({
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
  problem: typeof lessonProblem25;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of22 = ({
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
  problem: typeof lessonProblem26;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of23 = ({
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
  problem: typeof lessonProblem27;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of24 = ({
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
  problem: typeof lessonProblem28;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of25 = ({
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
  problem: typeof lessonProblem29;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of26 = ({
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
  problem: typeof lessonProblem30;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of27 = ({
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
  problem: typeof lessonProblem31;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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

const ProblemSelect1Of29 = ({
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
  problem: typeof lessonProblem32;
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
  const [isCorrectAnswerSelected, setIsCorrectAnswerSelected] = useState(false);

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
                  className={`${
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  } ${
                    selectedAnswer === i ? "ring-2 ring-offset-2 " : ""
                  } ${
                    correctAnswerShown && i === correctAnswer
                      ? isCorrectAnswerSelected
                        ? "ring-4 ring-red-400"
                        : "cursor-pointer rounded-xl border-2 border-b-4 border-green-300 bg-green-100 p-4 text-green-400"
                      : ""
                  }`}
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
      <div className="relative flex w-full h-full max-w-4xl flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8">
      <div className="overflow-auto flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8">
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
                  "relative flex flex-col items-stretch gap-3 rounded-xl p-3 text-left",
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
