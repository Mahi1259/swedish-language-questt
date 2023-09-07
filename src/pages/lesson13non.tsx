import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import phraseImage61 from 'public/sound.png';
import phraseImage62 from 'public/sound.png';
import phraseImage63 from 'public/sound.png';
import phraseImage64 from 'public/sound.png';
import phraseImage65 from 'public/sound.png';
import phraseImage66 from 'public/sound.png';
import phraseImage67 from 'public/sound.png';
import phraseImage68 from 'public/sound.png';
import phraseImage69 from 'public/sound.png';
import phraseImage70 from 'public/sound.png';
import phraseImage71 from 'public/sound.png';
import phraseImage72 from 'public/sound.png';
import phraseImage73 from 'public/sound.png';
import phraseImage74 from 'public/sound.png';
import phraseImage75 from 'public/sound.png';
import phraseImage76 from 'public/sound.png';
import phraseImage77 from 'public/sound.png';
import phraseImage78 from 'public/sound.png';
import phraseImage79 from 'public/sound.png';
import phraseImage80 from 'public/sound.png';
import phraseImage81 from 'public/sound.png';
import phraseImage82 from 'public/sound.png';
import phraseImage83 from 'public/sound.png';
import phraseImage84 from 'public/sound.png';
import phraseImage85 from 'public/sound.png';
import phraseImage86 from 'public/sound.png';
import phraseImage87 from 'public/sound.png';
import phraseImage88 from 'public/sound.png';
import phraseImage89 from 'public/sound.png';
import phraseImage90 from 'public/sound.png';

import type { StaticImageData } from 'next/image';

interface Phrase {
  id:number;
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

  {id: 1, swedish: 'Flygplats', english: 'Swedish translation for "Airport"', image: phraseImage61, audio: 'Flygplat.mp3' },
  {id: 2, swedish: 'Tågstation', english: 'Swedish translation for "Train station"', image: phraseImage62, audio: 'Tagstatio.mp3' },
  {id: 3, swedish: 'Buss', english: 'Swedish translation for "Bus"', image: phraseImage63, audio: 'Bus.mp3' },
  {id: 4, swedish: 'Biljett', english: 'Swedish translation for "Ticket"', image: phraseImage64, audio: 'Bilje.mp3' },
  {id: 5, swedish: 'Hotell', english: 'Swedish translation for "Hotel"', image: phraseImage65, audio: 'Hotel.mp3' },
  {id: 6, swedish: 'Taxi', english: 'Swedish translation for "Taxi"', image: phraseImage66, audio: 'Tax.mp3' },
  {id: 7, swedish: 'Vänster', english: 'Swedish translation for "Left"', image: phraseImage67, audio: 'Vanste.mp3' },
  {id: 8, swedish: 'Höger', english: 'Swedish translation for "Right"', image: phraseImage68, audio: 'Hoge.mp3' },
  {id: 9, swedish: 'Rakt fram', english: 'Swedish translation for "Straight ahead"', image: phraseImage69, audio: 'Rakt fra.mp3' },
  {id: 10, swedish: 'Biljett räknare', english: 'Swedish translation for "Ticket counter"', image: phraseImage70, audio: 'Biljett raknare.mp3' },
  {id: 11, swedish: 'Karta', english: 'Swedish translation for "Map"', image: phraseImage71, audio: 'Karta.mp3' },
  {id: 12, swedish: 'Ingång', english: 'Swedish translation for "Entrance"', image: phraseImage72, audio: 'Ingang.mp3' },
  {id: 13, swedish: 'Utgång', english: 'Swedish translation for "Exit"', image: phraseImage73, audio: 'Utgang.mp3' },
  {id: 14, swedish: 'Avgång', english: 'Swedish translation for "Departure"', image: phraseImage74, audio: 'Avgang.mp3' },
  {id: 15, swedish: 'Ankomst', english: 'Swedish translation for "Arrival"', image: phraseImage75, audio: 'Ankomst.mp3' },
  {id: 16, swedish: 'Gata', english: 'Swedish translation for "Street"', image: phraseImage76, audio: 'Gata.mp3' },
  {id: 17, swedish: 'Rondell', english: 'Swedish translation for "Roundabout"', image: phraseImage77, audio: 'Rondell.mp3' },
  {id: 18, swedish: 'Bro', english: 'Swedish translation for "Bridge"', image: phraseImage78, audio: 'Bro.mp3' },
  {id: 19, swedish: 'Kör sakta', english: 'Swedish translation for "Drive slow"', image: phraseImage79, audio: 'kor sakta.mp3' },
  {id: 20, swedish: 'Distans', english: 'Swedish translation for "Distance"', image: phraseImage80, audio: 'distans.mp3' },
  {id: 21, swedish: 'Motorväg', english: 'Swedish translation for "Highway"', image: phraseImage81, audio: 'motorvag.mp3' },
  {id: 22, swedish: 'Tunnelbana', english: 'Swedish translation for "Subway"', image: phraseImage82, audio: 'tunnelbana.mp3' },
  {id: 23, swedish: 'Bagage', english: 'Swedish translation for "Luggage"', image: phraseImage83, audio: 'Bagage.mp3' },
  {id: 24, swedish: 'Spårvagn', english: 'Swedish translation for "Tram"', image: phraseImage84, audio: 'Sparvagn.mp3' },
  {id: 25, swedish: 'Stad', english: 'Swedish translation for "City"', image: phraseImage85, audio: 'Stad.mp3' },
  {id: 26, swedish: 'Gångväg', english: 'Swedish translation for "Walkway"', image: phraseImage86, audio: 'Gangvag.mp3' },
  {id: 27, swedish: 'Fara', english: 'Swedish translation for "Danger"', image: phraseImage87, audio: 'Fara.mp3' },
  {id: 28, swedish: 'Ingen parkering', english: 'Swedish translation for "No parking"', image: phraseImage88, audio: 'ingen parkering.mp3' },
  {id: 29, swedish: 'Enkelbiljett', english: 'Swedish translation for "One-way ticket"', image: phraseImage89, audio: 'enkelbiljett.mp3' },
  {id: 30, swedish: 'Pass', english: 'Swedish translation for "Passport"', image: phraseImage90, audio: 'pass.mp3' },
];

const questions: Question[] = [
    {
      id: 1,
      phraseId: 1,
      question: "Swedish translation for \"Airport\"",
      options: ["Flygplats", "Bagage", "Tågstation", "Utgång"],
      correctAnswer: "Flygplats"
    },
    {
      id: 2,
      phraseId: 2,
      question: "Swedish translation for \"Train station\"",
      options: ["Pass", "Tågstation", "Biljett", "Rondell"],
      correctAnswer: "Tågstation"
    },
    {
      id: 3,
      phraseId: 3,
      question: "Swedish translation for \"Bus\"",
      options: ["Kör sakta", "Ingång", "Buss", "Rakt fram"],
      correctAnswer: "Buss"
    },
    {
      id: 4,
      phraseId: 4,
      question: "Swedish translation for \"Ticket\"",
      options: ["Rakt fram", "Distans", "Höger","Biljett"],
      correctAnswer: "Biljett"
    },
    {
      id: 5,
      phraseId: 5,
      question: "Swedish translation for \"Hotell\"",
      options: ["Hotell", "Taxi", "Buss", "Kör sakta"],
      correctAnswer: "Hotell"
    },
    {
      id: 6,
      phraseId: 6,
      question: "Swedish translation for \"Taxi\"",
      options: ["Rakt fram", "Taxi", "Höger", "Distans"],
      correctAnswer: "Taxi"
    },
    {
      id: 7,
      phraseId: 7,
      question: "Swedish translation for \"Left\"",
      options: ["Karta", "Spårvagn", "Vänster", "Ankomst"],
      correctAnswer: "Vänster"
    },
    {
      id: 8,
      phraseId: 8,
      question: "Swedish translation for \"Right\"",
      options: ["Buss", "Rakt fram","Ingång", "Höger"],
      correctAnswer: "Höger"
    },
    {
      id: 9,
      phraseId: 9,
      question: "Swedish translation for \"Straight ahead\"",
      options: ["Rakt fram", "Rondell", "Hotell",  "Tunnelbana"],
      correctAnswer: "Rakt fram"
    },
    {
      id: 10,
      phraseId: 10,
      question: "Swedish translation for \"Ticket counter\"",
      options: ["Stad", "Biljett räknare", "Höger", "Karta"],
      correctAnswer: "Biljett räknare"
    },
    {
      id: 11,
      phraseId: 11,
      question: "Swedish translation for \"Map\"",
      options: ["Vänster", "Bagage", "Karta", "Gata"],
      correctAnswer: "Karta"
    },
    {
      id: 12,
      phraseId: 12,
      question: "Swedish translation for \"Entrance\"",
      options: ["Hotell", "Tunnelbana", "Stad", "Ingång"],
      correctAnswer: "Ingång"
    },
    {
      id: 13,
      phraseId: 13,
      question: "Swedish translation for \"Exit\"",
      options: ["Utgång", "Rakt fram", "Buss","motorväg"],
      correctAnswer: "Utgång"
    },
    {
      id: 14,
      phraseId: 14,
      question: "Swedish translation for \"Departure\"",
      options: ["Rakt fram", "Avgång", "Buss", "Spårvagn"],
      correctAnswer: "Avgång"
    },
    {
      id: 15,
      phraseId: 15,
      question: "Swedish translation for \"Arrival\"",
      options: ["Gata",  "Hotell", "Ankomst", "Kör sakta"],
      correctAnswer: "Ankomst"
    },
    {
      id: 16,
      phraseId: 16,
      question: "Swedish translation for \"Street\"",
      options: ["Stad", "Höger", "Buss", "Gata"],
      correctAnswer: "Gata"
    },
    {
      id: 17,
      phraseId: 17,
      question: "Swedish translation for \"Roundabout\"",
      options: ["Rondell", "Ingång", "Taxi", "Bagage"],
      correctAnswer: "Rondell"
    },
    {
      id: 18,
      phraseId: 18,
      question: "Swedish translation for \"Bridge\"",
      options: ["Distans", "Bro",  "Enkelbiljett", "Gångväg"],
      correctAnswer: "Bro"
    },
    {
      id: 19,
      phraseId: 19,
      question: "Swedish translation for \"Drive slow\"",
      options: ["Avgång", "Buss", "Kör sakta", "Gata"],
      correctAnswer: "Kör sakta"
    },
    {
      id: 20,
      phraseId: 20,
      question: "Swedish translation for \"Distance\"",
      options: ["Kör sakta", "Tågstation", "Enkelbiljett", "Distans"],
      correctAnswer: "Distans"
    },
    {
      id: 21,
      phraseId: 21,
      question: "Swedish translation for \"Highway\"",
      options: ["Motorväg", "Höger", "Bagage", "Ankomst"],
      correctAnswer: "Motorväg"
    },
    {
      id: 22,
      phraseId: 22,
      question: "Swedish translation for \"Subway\"",
      options: ["Stad", "Tunnelbana", "Bro", "Hotell"],
      correctAnswer: "Tunnelbana"
    },
    {
      id: 23,
      phraseId: 23,
      question: "Swedish translation for \"Luggage\"",
      options: ["Kör sakta", "Spårvagn", "Bagage", "Fara"],
      correctAnswer: "Bagage"
    },
    {
      id: 24,
      phraseId: 24,
      question: "Swedish translation for \"Tram\"",
      options: ["Tågstation", "Pass", "Höger", "Spårvagn"],
      correctAnswer: "Spårvagn"
    },
    {
      id: 25,
      phraseId: 25,
      question: "Swedish translation for \"City\"",
      options: ["Stad", "Biljett räknare", "Rondell", "Vänster"],
      correctAnswer: "Stad"
    },
    {
      id: 26,
      phraseId: 26,
      question: "Swedish translation for \"Walkway\"",
      options: ["Biljett", "Gångväg", "Avgång", "Motorväg"],
      correctAnswer: "Gångväg"
    },
    {
      id: 27,
      phraseId: 27,
      question: "Swedish translation for \"Danger\"",
      options: ["Buss", "Ingång", "Fara", "Hotell"],
      correctAnswer: "Fara"
    },
    {
      id: 28,
      phraseId: 28,
      question: "Swedish translation for \"No parking\"",
      options: ["Spårvagn", "Kör sakta", "Karta", "Ingen parkering"],
      correctAnswer: "Ingen parkering"
    },
    {
      id: 29,
      phraseId: 29,
      question: "Swedish translation for \"One-way ticket\"",
      options: ["Enkelbiljett", "Taxi", "Tunnelbana", "Vänster"],
      correctAnswer: "Enkelbiljett"
    },
    {
      id: 30,
      phraseId: 30,
      question: "Swedish translation for \"Passport\"",
      options: ["Tågstation", "Pass", "Fara", "Gångväg"],
      correctAnswer: "Pass"
    }
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
