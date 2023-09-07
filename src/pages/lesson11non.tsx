import { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import phraseImage1 from 'public/sound.png';
import phraseImage2 from 'public/sound.png';
import phraseImage3 from 'public/sound.png';
import phraseImage4 from 'public/sound.png';
import phraseImage5 from 'public/sound.png';
import phraseImage6 from 'public/sound.png';
import phraseImage7 from 'public/sound.png';
import phraseImage8 from 'public/sound.png';
import phraseImage9 from 'public/sound.png';
import phraseImage10 from 'public/sound.png';
import phraseImage11 from 'public/sound.png';
import phraseImage12 from 'public/sound.png';
import phraseImage13 from 'public/sound.png';
import phraseImage14 from 'public/sound.png';
import phraseImage15 from 'public/sound.png';
import phraseImage16 from 'public/sound.png';
import phraseImage17 from 'public/sound.png';
import phraseImage18 from 'public/sound.png';
import phraseImage19 from 'public/sound.png';
import phraseImage20 from 'public/sound.png';
import phraseImage21 from 'public/sound.png';
import phraseImage22 from 'public/sound.png';
import phraseImage23 from 'public/sound.png';
import phraseImage24 from 'public/sound.png';
import phraseImage25 from 'public/sound.png';
import phraseImage26 from 'public/sound.png';
import phraseImage27 from 'public/sound.png';
import phraseImage28 from 'public/sound.png';
import phraseImage29 from 'public/sound.png';
import phraseImage30 from 'public/sound.png';

import type { StaticImageData } from 'next/image';

interface Phrase {
  id:number;
  swedish: string;
  english: string;
  audio: string;
  image: StaticImageData;
}

interface Question {
  id:number;
  phraseId:number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const phrases: Phrase[] = [
  { id:1,swedish: 'Hej!', english: 'Swedish translation for "Hello!"', image: phraseImage1, audio: 'He.mp3' },
  { id:2,swedish: 'Hejdå', english: 'Swedish translation for "bye"', image: phraseImage2, audio: 'Hejda.mp3' },
  { id:3,swedish: 'Tack', english: 'Swedish translation for "Thank you"', image: phraseImage3, audio: 'Tac.mp3' },
  { id:4,swedish: 'Ursäkta mig', english: 'Swedish translation for "Excuse me"', image: phraseImage4, audio: 'Ursakta mi.mp3' },
  { id:5,swedish: 'Ja', english: 'Swedish translation for "Yes"', image: phraseImage5, audio: 'ja.mp3' },
  { id:6,swedish: 'Nej', english: 'Swedish translation for "No"', image: phraseImage6, audio: 'Nej.mp3' },
  { id:7,swedish: 'Snälla', english: 'Swedish translation for "Please"', image: phraseImage7, audio: 'Snall.mp3' },
  { id:8,swedish: 'Förlåt', english: 'Swedish translation for "Sorry"', image: phraseImage8, audio: 'Forla.mp3' },
  { id:9,swedish: 'Hur mår du?', english: 'Swedish translation for "How are you?"', image: phraseImage9, audio: 'Hur mar d.mp3' },
  { id:10,swedish: 'Jag förstår inte', english: 'Swedish translation for "I don\'t understand"', image: phraseImage10, audio: 'Jag forstar int.mp3' },
  { id:11,swedish: 'God morgon', english: 'Swedish translation for "Good morning"', image: phraseImage11, audio: 'God morgon.mp3' },
  { id:12,swedish: 'Trevligt att träffas', english: 'Swedish translation for "Nice to meet you"', image: phraseImage12, audio: 'Trevligt att traffas.mp3' },
  { id:13,swedish: 'Vart finns toaletten?', english: 'Swedish translation for "Where is the toilet?"', image: phraseImage13, audio: 'Vart finns toaletten.mp3' },
  { id:14,swedish: 'jag är vilse', english: 'Swedish translation for "I\'m lost"', image: phraseImage14, audio: 'jag ar vilse.mp3' },
  { id:15,swedish: 'jag är hungrig', english: 'Swedish translation for "I\'m hungry"', image: phraseImage15, audio: 'jag ar hungrig.mp3' },
  { id:16,swedish: 'jag är törstig', english: 'Swedish translation for "I\'m thirsty"', image: phraseImage16, audio: 'jag ar torstig.mp3' },
  { id:17,swedish: 'Vad är klockan?', english: 'Swedish translation for "What time is it?"', image: phraseImage17, audio: 'Vad ar klockan.mp3' },
  { id:18,swedish: 'Vad är ditt telefonnummer?', english: 'Swedish translation for "What\'s your phone number?"', image: phraseImage18, audio: 'Vad ar ditt telefonnummer.mp3' },
  { id:19,swedish: 'Var kommer du ifrån?', english: 'Swedish translation for "Where are you from?"', image: phraseImage19, audio: 'Var kommer du ifran.mp3' },
  { id:20,swedish: 'Kan jag ta ett foto?', english: 'Swedish translation for "Can I take a photo?"', image: phraseImage20, audio: 'Kan jag ta ett foto.mp3' },
  { id:21,swedish: 'Hur är vädret idag?', english: 'Swedish translation for "What\'s the weather like today?"', image: phraseImage21, audio: 'Hur ar vadret idag.mp3' },
  { id:22,swedish: 'Godnatt', english: 'Swedish translation for "Good night"', image: phraseImage22, audio: 'Godnatt.mp3' },
  { id:23,swedish: 'Hjälp', english: 'Swedish translation for "Help"', image: phraseImage23, audio: 'hjalp.mp3' },
  { id:24,swedish: 'Ha en bra dag!', english: 'Swedish translation for "Have a good day!"', image: phraseImage24, audio: 'Ha en bra dag.mp3' },
  { id:25,swedish: 'God eftermiddag', english: 'Swedish translation for "Good Afternoon"', image: phraseImage25, audio: 'god eftermiddag.mp3' },
  { id:26,swedish: 'Öppen', english: 'Swedish translation for "Open"', image: phraseImage26, audio: 'oppen.mp3' },
  { id:27,swedish: 'Stängd', english: 'Swedish translation for "Closed"', image: phraseImage27, audio: 'Stangd.mp3' },
  { id:28,swedish: 'Hur gammal är du?!', english: 'Swedish translation for "How old are you?"', image: phraseImage28, audio: 'Hur gammal ar du.mp3' },
  { id:29,swedish: 'Skål!', english: 'Swedish translation for "Cheers!"', image: phraseImage29, audio: 'Skal.mp3' },
  { id:30,swedish: 'Varsågod', english: 'Swedish translation for "You\'re welcome"', image: phraseImage30, audio: 'Varsagod.mp3' },
];

const questions: Question[] = [
  {
    id: 1,
    phraseId: 1,
    question: "Swedish translation for \"Hello\"",
    options: ["God eftermiddag", "God morgon", "Godnatt", "Hej"],
    correctAnswer: "Hej"
  },
  {
    id: 2,
    phraseId: 2,
    question: "Swedish translation for \"bye\"",
    options: ["Hejdå", "Hej", "Godnatt", "Snälla"],
    correctAnswer: "Hejdå"
  },
  {
    id: 3,
    phraseId: 3,
    question: "Swedish translation for \"Thank you\"",
    options: ["Förlåt","Tack", "Snälla", "Ja"],
    correctAnswer: "Tack"
  },
  {
    id: 4,
    phraseId: 4,
    question: "Swedish translation for \"Excuse me\"",
    options: ["Tack", "Nej","Ursäkta mig","Hej"],
    correctAnswer: "Ursäkta mig"
  },
  {
    id: 5,
    phraseId: 5,
    question: "Swedish translation for \"Yes\"",
    options: ["Nej", "Ja", "Tack", "Adjö"],
    correctAnswer: "Ja"
  },
  {
    id: 6,
    phraseId: 6,
    question: "Swedish translation for \"No\"",
    options: ["Ja","Hej", "Förlåt","Nej"],
    correctAnswer: "Nej"
  },
  {
    id: 7,
    phraseId: 7,
    question: "Swedish translation for \"Please\"",
    options: ["Snälla", "Tack", "Ursäkta mig", "Var kommer du ifrån?"],
    correctAnswer: "Snälla"
  },
  {
    id: 8,
    phraseId: 8,
    question: "Swedish translation for \"Sorry\"",
    options: ["Godnatt", "Adjö", "Ursäkta mig", "Förlåt"],
    correctAnswer: "Förlåt"
  },
  {
    id: 9,
    phraseId: 9,
    question: "Swedish translation for \"How are you?\"",
    options: ["Hur mår du?", "Varsågod","Hur gammal är du?!","Vart finns toaletten?"],
    correctAnswer: "Hur mår du?"
  },
  {
    id: 10,
    phraseId: 10,
    question: "Swedish translation for \"I don't understand\"",
    options: ["Vad är ditt telefonnummer?", "Jag förstår inte", "Skål!", "Vart finns toaletten?"],
    correctAnswer: "Jag förstår inte"
  },
  {
    id: 11,
    phraseId: 11,
    question: "Swedish translation for \"Good morning\"",
    options: ["God morgon", "God eftermiddag", "Godnatt", "Hej"],
    correctAnswer: "God morgon"
  },
  {
    id: 12,
    phraseId: 12,
    question: "Swedish translation for \"Nice to meet you\"",
    options: ["Var kommer du ifrån?","Trevligt att träffas","Ha en bra dag!", "God eftermiddag"],
    correctAnswer: "Trevligt att träffas"
  },
  {
    id: 13,
    phraseId: 13,
    question: "Swedish translation for \"Where is the toilet?\"",
    options: ["Vad är klockan?", "Var kommer du ifrån?","Vart finns toaletten?","Kan jag ta ett foto?"],
    correctAnswer: "Vart finns toaletten?"
  },
  {
    id: 14,
    phraseId: 14,
    question: "Swedish translation for \"I'm lost\"",
    options: ["jag är törstig", "jag är hungrig","Vad är ditt telefonnummer?","jag är vilse"],
    correctAnswer: "jag är vilse"
  },
  {
    id: 15,
    phraseId: 15,
    question: "Swedish translation for \"I'm hungry\"",
    options: ["jag är hungrig","jag är vilse","jag är törstig", "Vad är klockan?"],
    correctAnswer: "jag är hungrig"
  },
  {
    id: 16,
    phraseId: 16,
    question: "Swedish translation for \"I'm thirsty\"",
    options: ["jag är hungrig","jag är törstig","jag är vilse", "Hur gammal är du?!"],
    correctAnswer: "jag är törstig"
  },
  {
    id: 17,
    phraseId: 17,
    question: "Swedish translation for \"What time is it?\"",
    options: ["Var kommer du ifrån?", "Hur gammal är du?!","Vad är klockan?","Hur är vädret idag?"],
    correctAnswer: "Vad är klockan?"
  },
  {
    id: 18,
    phraseId: 18,
    question: "Swedish translation for \"What's your phone number?\"",
    options: ["Hur gammal är du?!","Var kommer du ifrån?","Hur är vädret idag?","Vad är ditt telefonnummer?"],
    correctAnswer: "Vad är ditt telefonnummer?"
  },
  {
    id: 19,
    phraseId: 19,
    question: "Swedish translation for \"Where are you from?\"",
    options: ["Var kommer du ifrån?", "Vad är ditt telefonnummer?", "Hur gammal är du?!", "Hur är vädret idag?"],
    correctAnswer: "Var kommer du ifrån?"
  },
  {
    id: 20,
    phraseId: 20,
    question: "Swedish translation for \"Can I take a photo?\"",
    options: ["Var kommer du ifrån?","Kan jag ta ett foto?","Hur gammal är du?!", "Hur är vädret idag?"],
    correctAnswer: "Kan jag ta ett foto?"
  },
  {
    id: 21,
    phraseId: 21,
    question: "Swedish translation for \"What's the weather like today?\"",
    options: ["Vad är klockan?", "Var kommer du ifrån?","Hur är vädret idag?","Hur gammal är du?!"],
    correctAnswer: "Hur är vädret idag?"
  },
  {
    id: 22,
    phraseId: 22,
    question: "Swedish translation for \"Good night\"",
    options: ["Vad är klockan?", "Var kommer du ifrån?", "Hur gammal är du?!","Godnatt"],
    correctAnswer: "Godnatt"
  },
  {
    id: 23,
    phraseId: 23,
    question: "Swedish translation for \"Help\"",
    options: ["Hjälp", "Vad är klockan?", "Var kommer du ifrån?", "Hur gammal är du?!"],
    correctAnswer: "Hjälp"
  },
  {
    id: 24,
    phraseId: 24,
    question: "Swedish translation for \"Have a good day!\"",
    options: ["Vad är klockan?","Ha en bra dag!","Var kommer du ifrån?", "Hur gammal är du?!"],
    correctAnswer: "Ha en bra dag!"
  },
  {
    id: 25,
    phraseId: 25,
    question: "Swedish translation for \"Good Afternoon\"",
    options: ["God morgon", "Godnatt","God eftermiddag","Hej"],
    correctAnswer: "God eftermiddag"
  },
  {
    id: 26,
    phraseId: 26,
    question: "Swedish translation for \"Open\"",
    options: ["Öppen", "Stängd", "Vad är klockan?", "Var kommer du ifrån?"],
    correctAnswer: "Öppen"
  },
  {
    id: 27,
    phraseId: 27,
    question: "Swedish translation for \"Closed\"",
    options: ["Öppen","Stängd","Vad är klockan?", "Var kommer du ifrån?"],
    correctAnswer: "Stängd"
  },
  {
    id: 28,
    phraseId: 28,
    question: "Swedish translation for \"How old are you?\"",
    options: ["Vad är ditt telefonnummer?", "Vad är klockan?","Hur gammal är du?!","Var kommer du ifrån?"],
    correctAnswer: "Hur gammal är du?!"
  },
  {
    id: 29,
    phraseId: 29,
    question: "Swedish translation for \"Cheers!\"",
    options: ["Vad är ditt telefonnummer?", "Vad är klockan?", "Var kommer du ifrån?","Skål!"],
    correctAnswer: "Skål!"
  },
  {
    id: 30,
    phraseId: 30,
    question: "Swedish translation for \"You're welcome\"",
    options: ["Varsågod", "Vad är ditt telefonnummer?", "Vad är klockan?", "Var kommer du ifrån?"],
    correctAnswer: "Varsågod"
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


