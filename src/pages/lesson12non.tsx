import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import phraseImage31 from 'public/sound.png';
import phraseImage32 from 'public/sound.png';
import phraseImage33 from 'public/sound.png';
import phraseImage34 from 'public/sound.png';
import phraseImage35 from 'public/sound.png';
import phraseImage36 from 'public/sound.png';
import phraseImage37 from 'public/sound.png';
import phraseImage38 from 'public/sound.png';
import phraseImage39 from 'public/sound.png';
import phraseImage40 from 'public/sound.png';
import phraseImage41 from 'public/sound.png';
import phraseImage42 from 'public/sound.png';
import phraseImage43 from 'public/sound.png';
import phraseImage44 from 'public/sound.png';
import phraseImage45 from 'public/sound.png';
import phraseImage46 from 'public/sound.png';
import phraseImage47 from 'public/sound.png';
import phraseImage48 from 'public/sound.png';
import phraseImage49 from 'public/sound.png';
import phraseImage50 from 'public/sound.png';
import phraseImage51 from 'public/sound.png';
import phraseImage52 from 'public/sound.png';
import phraseImage53 from 'public/sound.png';
import phraseImage54 from 'public/sound.png';
import phraseImage55 from 'public/sound.png';
import phraseImage56 from 'public/sound.png';
import phraseImage57 from 'public/sound.png';
import phraseImage58 from 'public/sound.png';
import phraseImage59 from 'public/sound.png';
import phraseImage60 from 'public/sound.png';

import type { StaticImageData } from 'next/image';

interface Phrase {
  id: number;
  swedish: string;
  english: string;
  image: StaticImageData;
  audio: string;
  
}

interface Question {
  id:number;
  phraseId:number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const phrases: Phrase[] = [

  {id: 1, swedish: 'Vatten', english: 'Swedish translation for "Water"', image: phraseImage31, audio: 'Vatte.mp3' },
  {id: 2, swedish: 'Kaffe', english: 'Swedish translation for "Coffee"', image: phraseImage32, audio: 'Kaff.mp3' },
  {id: 3, swedish: 'Bröd', english: 'Swedish translation for "Bread"', image: phraseImage33, audio: 'Bread.mp3' },
  {id: 4, swedish: 'Ost', english: 'Swedish translation for "Cheese"', image: phraseImage34, audio: 'Os.mp3' },
  {id: 5, swedish: 'Kött', english: 'Swedish translation for "Meat"', image: phraseImage35, audio: 'Kot.mp3' },
  {id: 6, swedish: 'Sallad', english: 'Swedish translation for "Salad"', image: phraseImage36, audio: 'Salla.mp3' },
  {id: 7, swedish: 'Fisk', english: 'Swedish translation for "Fish"', image: phraseImage37, audio: 'Fis.mp3' },
  {id: 8, swedish: 'Juice', english: 'Swedish translation for "Juice"', image: phraseImage38, audio: 'Juic.mp3' },
  {id: 9, swedish: 'Glass', english: 'Swedish translation for "Ice cream"', image: phraseImage39, audio: 'Glas.mp3' },
  {id: 10, swedish: 'Pizza', english: 'Swedish translation for "Pizza"', image: phraseImage40, audio: 'Pizz.mp3' },
  {id: 11, swedish: 'Frukt', english: 'Swedish translation for "Fruit"', image: phraseImage41, audio: 'Frukt.mp3' },
  {id: 12, swedish: 'Grönsaker', english: 'Swedish translation for "Vegetables"', image: phraseImage42, audio: 'Gronsaker.mp3' },
  {id: 13, swedish: 'Ris', english: 'Swedish translation for "Rice"', image: phraseImage43, audio: 'Ris.mp3' },
  {id: 14, swedish: 'Majs', english: 'Swedish translation for "Corn"', image: phraseImage44, audio: 'majs.mp3' },
  {id: 15, swedish: 'Pommes frites', english: 'Swedish translation for "French Fries"', image: phraseImage45, audio: 'pommes frites.mp3' },
  {id: 16, swedish: 'Kaka', english: 'Swedish translation for "Cake"', image: phraseImage46, audio: 'kaka.mp3' },
  {id: 17, swedish: 'Vattenmelon', english: 'Swedish translation for "Watermelon"', image: phraseImage47, audio: 'Vattenmelon.mp3' },
  {id: 18, swedish: 'Druvor', english: 'Swedish translation for "Grapes"', image: phraseImage48, audio: 'druvor.mp3' },
  {id: 19, swedish: 'Mjölk', english: 'Swedish translation for "Milk"', image: phraseImage49, audio: 'Mjolk.mp3' },
  {id: 20, swedish: 'Te', english: 'Swedish translation for "Tea"', image: phraseImage50, audio: 'Te.mp3' },
  {id: 21, swedish: 'Socker', english: 'Swedish translation for "Sugar"', image: phraseImage51, audio: 'Socker.mp3' },
  {id: 22, swedish: 'Kyckling', english: 'Swedish translation for "Chicken"', image: phraseImage52, audio: 'Kyckling.mp3' },
  {id: 23, swedish: 'Ägg', english: 'Swedish translation for "Egg"', image: phraseImage53, audio: 'Agg.mp3' },
  {id: 24, swedish: 'Morot', english: 'Swedish translation for "Carrot"', image: phraseImage54, audio: 'Morot.mp3' },
  {id: 25, swedish: 'Choklad', english: 'Swedish translation for "Chocolate"', image: phraseImage55, audio: 'Choklad.mp3' },
  {id: 26, swedish: 'Gurka', english: 'Swedish translation for "Cucumber"', image: phraseImage56, audio: 'Gurka.mp3' },
  {id: 27, swedish: 'Brödrost', english: 'Swedish translation for "Toaster"', image: phraseImage57, audio: 'Brodrost.mp3' },
  {id: 28, swedish: 'Kex', english: 'Swedish translation for "Biscuits"', image: phraseImage58, audio: 'Kex.mp3' },
  {id: 29, swedish: 'Honung', english: 'Swedish translation for "Honey"', image: phraseImage59, audio: 'Honung.mp3' },
  {id: 30, swedish: 'Korv', english: 'Swedish translation for "Sausage"', image: phraseImage60, audio: 'Korv.mp3' },
];

const questions: Question[] = [
  {
    id: 1,
    phraseId: 1,
    question: "Swedish translation for \"Water\"",
    options: ["Vatten", "Choklad", "Lök", "Kaffe"],
    correctAnswer: "Vatten"
  },
  {
    id: 2,
    phraseId: 2,
    question: "Swedish translation for \"Coffee\"",
    options: ["Choklad", "Kaffe", "Bröd", "Ost"],
    correctAnswer: "Kaffe"
  },
  {
    id: 3,
    phraseId: 3,
    question: "Swedish translation for \"Bread\"",
    options: ["Lök", "Vatten", "Bröd", "Ost"],
    correctAnswer: "Bröd"
  },
  {
    id: 4,
    phraseId: 4,
    question: "Swedish translation for \"Cheese\"",
    options: ["Choklad", "Choklad", "Kaffe", "Ost"],
    correctAnswer: "Ost"
  },
  {
    id: 5,
    phraseId: 5,
    question: "Swedish translation for \"Meat\"",
    options: ["Kött", "Vatten", "Kaffe", "Ost"],
    correctAnswer: "Kött"
  },
  {
    id: 6,
    phraseId: 6,
    question: "Swedish translation for \"Salad\"",
    options: ["Kaffe", "Sallad", "Lök", "Pizza"],
    correctAnswer: "Sallad"
  },
  {
    id: 7,
    phraseId: 7,
    question: "Swedish translation for \"Fish\"",
    options: ["Ost", "Choklad", "Fisk", "Korv"],
    correctAnswer: "Fisk"
  },
  {
    id: 8,
    phraseId: 8,
    question: "Swedish translation for \"Juice\"",
    options: ["Choklad", "Vatten", "Ost", "Juice"],
    correctAnswer: "Juice"
  },
  {
    id: 9,
    phraseId: 9,
    question: "Swedish translation for \"Ice cream\"",
    options: ["Glas", "Korv", "Choklad","Kaffe"],
    correctAnswer: "Glas"
  },
  {
    id: 10,
    phraseId: 10,
    question: "Swedish translation for \"Pizza\"",
    options: ["Choklad", "Pizza", "Ost", "Apelsin"],
    correctAnswer: "Pizza"
  },
  {
    id: 11,
    phraseId: 11,
    question: "Swedish translation for \"Fruit\"",
    options: ["Kaffe", "Ost", "Frukt", "Mjölk"],
    correctAnswer: "Frukt"
  },
  {
    id: 12,
    phraseId: 12,
    question: "Swedish translation for \"Vegetables\"",
    options: ["Ost", "Korv", "Choklad", "Grönsaker"],
    correctAnswer: "Grönsaker"
  },
  {
    id: 13,
    phraseId: 13,
    question: "Swedish translation for \"Rice\"",
    options: ["Ris", "Kaffe", "Lök", "Vattenmelon"],
    correctAnswer: "Ris"
  },
  {
    id: 14,
    phraseId: 14,
    question: "Swedish translation for \"Corn\"",
    options: ["Ost", "Majs", "Choklad","Äpple"],
    correctAnswer: "Majs"
  },
  {
    id: 15,
    phraseId: 15,
    question: "Swedish translation for \"French Fries\"",
    options: ["Choklad", "Korv", "Pommes frites", "Ost"],
    correctAnswer: "Pommes frites"
  },
  {
    id: 16,
    phraseId: 16,
    question: "Swedish translation for \"Cake\"",
    options: ["Korv", "Choklad", "Tomat", "Kaka"],
    correctAnswer: "Kaka"
  },
  {
    id: 17,
    phraseId: 17,
    question: "Swedish translation for \"Watermelon\"",
    options: ["Vattenmelon", "Choklad", "Ost","Gurka"],
    correctAnswer: "Vattenmelon"
  },
  {
    id: 18,
    phraseId: 18,
    question: "Swedish translation for \"Grapes\"",
    options: ["Ost", "Druvor", "Gurka", "Korv"],
    correctAnswer: "Druvor"
  },
  {
    id: 19,
    phraseId: 19,
    question: "Swedish translation for \"Milk\"",
    options: ["Kaffe", "Choklad", "Mjölk", "Pommes frites"],
    correctAnswer: "Mjölk"
  },
  {
    id: 20,
    phraseId: 20,
    question: "Swedish translation for \"Tea\"",
    options: ["Choklad", "Kaffe","Pizza", "Te"],
    correctAnswer: "Te"
  },
  {
    id: 21,
    phraseId: 21,
    question: "Swedish translation for \"Sugar\"",
    options: ["Socker", "Ost","Korv","Kaffe"],
    correctAnswer: "Socker"
  },
  {
    id: 22,
    phraseId: 22,
    question: "Swedish translation for \"Chicken\"",
    options: ["Kaffe", "Kyckling", "Lök","Druvor"],
    correctAnswer: "Kyckling"
  },
  {
    id: 23,
    phraseId: 23,
    question: "Swedish translation for \"Egg\"",
    options: ["Ost", "Kex", "Ägg", "Lök"],
    correctAnswer: "Ägg"
  },
  {
    id: 24,
    phraseId: 24,
    question: "Swedish translation for \"Carrot\"",
    options: ["Vatten", "Korv", "Choklad", "Morot"],
    correctAnswer: "Morot"
  },
  {
    id: 25,
    phraseId: 25,
    question: "Swedish translation for \"Chocolate\"",
    options: ["Choklad", "Kaffe", "Ost", "Tomat"],
    correctAnswer: "Choklad"
  },
  {
    id: 26,
    phraseId: 26,
    question: "Swedish translation for \"Cucumber\"",
    options: ["Kaffe", "Gurka","Vatten", "Ost"],
    correctAnswer: "Gurka"
  },
  {
    id: 27,
    phraseId: 27,
    question: "Swedish translation for \"Toaster\"",
    options: ["Ost", "Choklad", "Brödrost", "Korv"],
    correctAnswer: "Brödrost"
  },
  {
    id: 28,
    phraseId: 28,
    question: "Swedish translation for \"Biscuits\"",
    options: ["Kaffe", "Vatten", "Ost", "Kex"],
    correctAnswer: "Kex"
  },
  {
    id: 29,
    phraseId: 29,
    question: "Swedish translation for \"Honey\"",
    options: ["Honung", "Choklad", "Vatten", "Korv"],
    correctAnswer: "Honung"
  },
  {
    id: 30,
    phraseId: 30,
    question: 'Swedish translation for "Sausage"',
    options: ["Vatten", "Korv", "Äpple", "Choklad"],
    correctAnswer: "Korv"
  },
];



const PhrasesPage = () => {
  const [phrasesSubset, setPhrasesSubset] = useState<Phrase[]>([]);
  const [questionsSubset, setQuestionsSubset] = useState<Question[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showMCQs, setShowMCQs] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [mcqsFinished, setMCQsFinished] = useState(false);
  const [showResponses, setShowResponses] = useState(false);
  const [userResponses, setUserResponses] = useState<Array<number | null>>(
    Array(questionsSubset.length).fill(null)
  );  

  
  useEffect(() => {
    const indicesArray = Array.from({ length: phrases.length }, (_, i) => i);
    const shuffledIndices = indicesArray.sort(() => Math.random() - 0.5);

    const shuffledPhrases = shuffledIndices.map(index => phrases[index]);
    const shuffledQuestions = shuffledIndices.map(index => questions[index]);

    const nonUndefinedShuffledPhrases = shuffledPhrases.filter(phrase => phrase !== undefined) as Phrase[];
    setPhrasesSubset(nonUndefinedShuffledPhrases.slice(0, 10));

    // Filter questions that correspond to the shuffled phrases
    const correspondingQuestions = shuffledQuestions.filter(question => {
      const matchingPhrase = nonUndefinedShuffledPhrases.find(phrase => phrase?.id === question?.phraseId);
      return matchingPhrase !== undefined;
    }) as Question[];

    setQuestionsSubset(correspondingQuestions.slice(0, 10));
  }, []);
  

  const handleImageClick = (audioSrc: string): void => {
    const audio = new Audio(audioSrc);
    audio.play()
      .then(() => {
        // Audio played successfully, do any additional handling here if needed
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
      });
  };

  const HandleNextPhrase = () => {
      setShowMCQs(true); 
  };

  const HandleNextQuestion = () => {
    if (selectedOptionIndex !== null) {
      const selectedAnswer = questionsSubset[currentQuestionIndex]?.options[selectedOptionIndex];
      const correctAnswer = questionsSubset[currentQuestionIndex]?.correctAnswer;

      const updatedResponses = [...userResponses];
      updatedResponses[currentQuestionIndex] = selectedOptionIndex;
      setUserResponses(updatedResponses);

      if (selectedAnswer === correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setIncorrectAnswers(incorrectAnswers + 1);
      }

      setSelectedOptionIndex(null); // Reset selected option index

      if (currentQuestionIndex < questionsSubset.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setMCQsFinished(true);
      }
    } else {
      // User hasn't selected an option, show an alert or provide feedback
      alert("Please select an answer before proceeding.");
    }
  };
  



  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {!mcqsFinished ? (
      showMCQs ? (
        <>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Multiple Choice Questions</h2><div style={{ marginTop: '20px', background: 'white', padding: '100px', borderRadius: '10px' }}>
              <p style={{ fontSize: '27px', marginBottom: '20px' }}>{questionsSubset[currentQuestionIndex]?.question}</p>
              {questionsSubset[currentQuestionIndex]?.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label style={{ fontSize: '18px', display: 'block', marginBottom: '10px', position: 'relative', paddingLeft: '30px' }}>
                    <input type="radio" name="mcq" value={option}
                      checked={selectedOptionIndex === optionIndex}
                      onChange={() => setSelectedOptionIndex(optionIndex)}
                      style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px' }} />
                    {option}
                  </label>
                </div>
              ))}
            </div>
              <div style={{ marginTop: '70px', display: 'flex' }}>
              {currentQuestionIndex < questionsSubset.length - 1 && (
    <div style={{ marginTop: '10px', marginRight: '340px' }}>
      <Link href="/learnnon" className='grow rounded-2xl border-b-4 border-pink-600 bg-pink-400 p-4 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0'>Exit</Link>
    </div>
  )}
  <button
  onClick={HandleNextQuestion}
  className='grow rounded-2xl border-b-4 border-pink-600 bg-pink-400 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0'
  >
    {currentQuestionIndex < questionsSubset.length - 1 ? "Next Question" : "Finish"}
    </button>
    </div></>
      ) : (
        <>
              <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                {phrasesSubset.map((phrase, index) => (
                  <div key={index}>
                    <div style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ margin: '0', flex: 1 }}>
                        <strong>&#8226;</strong>{phrase?.english ?? ""}:{phrase?.swedish ?? ""}
                      </p>
                      <div style={{ marginLeft: '10px' }}>
                        {phrase?.image && (
                          <Image src={phrase.image} width="50" height="40" alt={''} onClick={() => handleImageClick(phrase.audio)} />
                        )}
                      </div>
                    </div>
                    {index < phrasesSubset.length - 1 && <hr style={{ margin: '0px 0', border: '0', borderTop: '1px solid #ccc' }} />}
                  </div>
                ))}
              </div><div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  <button onClick={HandleNextPhrase} className='grow rounded-2xl border-b-4 border-pink-600 bg-pink-400 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0'>Continue to MCQs</button>
                </div>
              </>
              )
              ) : (
            <>
            {showResponses ? (
            <><>
                <h2 style={{ fontSize: '25px', marginBottom: '10px' }}>Your Responses</h2><div style={{ marginTop: '10px', background: 'white', padding: '10px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                  {userResponses.map((response, index) => {
                    const question = questionsSubset[index];
                    if (!question) return null;
                    const selectedOption = response !== null ? question.options[response] : 'Not answered';
                    const isCorrect = response === question.options.indexOf(question.correctAnswer);
                    const correctAnswerIndex = question.options.indexOf(question.correctAnswer);
                    if (correctAnswerIndex === -1) return null;

                    const correctAnswer = question.options[correctAnswerIndex];

                    return (
                      <div key={index}>
                        <p>
                          <strong>Question {index + 1}:</strong> {question.question}
                        </p>
                        <p>
                          <strong>Your Answer:</strong> <span style={{ color: isCorrect ? 'green' : 'red' }}>{selectedOption}</span>
                          {response !== null && isCorrect && ' (Correct)'}
                          {response !== null && !isCorrect && <span> (Correct answer: <span style={{ color: 'green' }}>{correctAnswer}</span>)</span>}
                        </p>
                        <hr style={{ margin: '5px 0', border: '0', borderTop: '1px solid #ccc' }} />
                      </div>
                    );
                  })}
                </div></><div style={{ marginTop: '30px', justifyContent: 'center' }}>
                  <Link href="/learnnon" className='grow rounded-2xl border-b-4 border-pink-600 bg-pink-400 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0'>Exit</Link>
                </div></>
        ) : (
          <div style={{ marginTop: '30px', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', marginTop: '-50px' }}>
            <h2 style={{ fontSize: '50px', marginBottom: '30px' }}>Results</h2>
            <div style={{ background: 'white', padding: '50px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <p style={{ fontSize: '48px' }}>Correct Answers: {correctAnswers}</p>
            <p style={{ fontSize: '48px' }}>Incorrect Answers: {incorrectAnswers}</p>
            </div>
            </div>
            <div style={{ marginTop: '30px', justifyContent: 'center',marginLeft:'150px' }}>
            <button
              onClick={() => setShowResponses(true)}
              className='grow rounded-2xl border-b-4 border-pink-600 bg-pink-400 p-5 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0'
            >
              Review Responses
            </button>
            </div>
          </div>
        )}
      </>
    )}
  </div>
); 
        }

export default PhrasesPage;
