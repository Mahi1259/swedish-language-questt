import { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import phraseImage91 from 'public/sound.png';
import phraseImage92 from 'public/sound.png';
import phraseImage93 from 'public/sound.png';
import phraseImage94 from 'public/sound.png';
import phraseImage95 from 'public/sound.png';
import phraseImage96 from 'public/sound.png';
import phraseImage97 from 'public/sound.png';
import phraseImage98 from 'public/sound.png';
import phraseImage99 from 'public/sound.png';
import phraseImage100 from 'public/sound.png';
import phraseImage101 from 'public/sound.png';
import phraseImage102 from 'public/sound.png';
import phraseImage103 from 'public/sound.png';
import phraseImage104 from 'public/sound.png';
import phraseImage105 from 'public/sound.png';
import phraseImage106 from 'public/sound.png';
import phraseImage107 from 'public/sound.png';
import phraseImage108 from 'public/sound.png';
import phraseImage109 from 'public/sound.png';
import phraseImage110 from 'public/sound.png';
import phraseImage111 from 'public/sound.png';
import phraseImage112 from 'public/sound.png';
import phraseImage113 from 'public/sound.png';
import phraseImage114 from 'public/sound.png';
import phraseImage115 from 'public/sound.png';
import phraseImage116 from 'public/sound.png';
import phraseImage117 from 'public/sound.png';
import phraseImage118 from 'public/sound.png';
import phraseImage119 from 'public/sound.png';
import phraseImage120 from 'public/sound.png';

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

  {id: 1, swedish: 'Vakna', english: 'Swedish translation for "Wake up"', image: phraseImage91, audio: 'Vakn.mp3' },
  {id: 2, swedish: 'Äta frukost', english: 'Swedish translation for "Eat breakfast"', image: phraseImage92, audio: 'Ata frukos.mp3' },
  {id: 3, swedish: 'Gå till jobbet', english: 'Swedish translation for "Go to work"', image: phraseImage93, audio: 'Ga till jobb.mp3' },
  {id: 4, swedish: 'Läsa', english: 'Swedish translation for "Read"', image: phraseImage94, audio: 'Las.mp3' },
  {id: 5, swedish: 'Träning', english: 'Swedish translation for "Exercise"', image: phraseImage95, audio: 'traning.mp3' },
  {id: 6, swedish: 'Titta på TV', english: 'Swedish translation for "Watch TV"', image: phraseImage96, audio: 'Titta pa T.mp3' },
  {id: 7, swedish: 'Laga mat', english: 'Swedish translation for "Cook"', image: phraseImage97, audio: 'Laga ma.mp3' },
  {id: 8, swedish: 'Gå och handla', english: 'Swedish translation for "Go shopping"', image: phraseImage98, audio: 'Ga och handl.mp3' },
  {id: 9, swedish: 'Ta en promenad', english: 'Swedish translation for "Take a walk"', image: phraseImage99, audio: 'Ta en promena.mp3' },
  {id: 10, swedish: 'Gå och lägga sig', english: 'Swedish translation for "Go to bed"', image: phraseImage100, audio: 'Ga och lagga si.mp3' },
  {id: 11, swedish: 'Lyssna', english: 'Swedish translation for "Listen"', image: phraseImage101, audio: 'Lyssna.mp3' },
  {id: 12, swedish: 'Prata', english: 'Swedish translation for "Talk"', image: phraseImage102, audio: 'Prata.mp3' },
  {id: 13, swedish: 'Studera', english: 'Swedish translation for "Study"', image: phraseImage103, audio: 'Studera.mp3' },
  {id: 14, swedish: 'Koppla av', english: 'Swedish translation for "Relax"', image: phraseImage104, audio: 'Koppla av.mp3' },
  {id: 15, swedish: 'Skriva', english: 'Swedish translation for "Write"', image: phraseImage105, audio: 'Skriva.mp3' },
  {id: 16, swedish: 'Måla', english: 'Swedish translation for "Paint"', image: phraseImage106, audio: 'Mala.mp3' },
  {id: 17, swedish: 'Sjunga', english: 'Swedish translation for "Sing"', image: phraseImage107, audio: 'Sjunga.mp3' },
  {id: 18, swedish: 'Dansa', english: 'Swedish translation for "Dance"', image: phraseImage108, audio: 'Dansa.mp3' },
  {id: 19, swedish: 'Spela ett instrument', english: 'Swedish translation for "Play an instrument"', image: phraseImage109, audio: 'Spela ett instrument.mp3' },
  {id: 20, swedish: 'Borsta tänderna', english: 'Swedish translation for "Brush teeth"', image: phraseImage110, audio: 'Borsta tanderna.mp3' },
  {id: 21, swedish: 'Rengöring', english: 'Swedish translation for "Cleaning"', image: phraseImage111, audio: 'rengoring.mp3' },
  {id: 22, swedish: 'Spelar', english: 'Swedish translation for "Playing"', image: phraseImage112, audio: 'spelar.mp3' },
  {id: 23, swedish: 'Tvättar kläder', english: 'Swedish translation for "Washing clothes"', image: phraseImage113, audio: 'tvattar klader.mp3' },
  {id: 24, swedish: 'Kör', english: 'Swedish translation for "Drive"', image: phraseImage114, audio: 'kor.mp3' },
  {id: 25, swedish: 'Springa', english: 'Swedish translation for "Run"', image: phraseImage115, audio: 'springa.mp3' },
  {id: 26, swedish: 'Möte', english: 'Swedish translation for "Meeting"', image: phraseImage116, audio: 'mote.mp3' },
  {id: 27, swedish: 'Jag klär på mig', english: 'Swedish translation for "I get dressed"', image: phraseImage117, audio: 'jag klar pa mig.mp3' },
  {id: 28, swedish: 'Ta en dusch', english: 'Swedish translation for "Take a shower"', image: phraseImage118, audio: 'ta en dusch.mp3' },
  {id: 29, swedish: 'Vatten plantor', english: 'Swedish translation for "Water plants"', image: phraseImage119, audio: 'vatten plantor.mp3' },
  {id: 30, swedish: 'Diska', english: 'Swedish translation for "Wash dishes"', image: phraseImage120, audio: 'diska.mp3' },
];

const questions: Question[] = [

    {
      id: 1,
      phraseId: 1,
      question: "Swedish translation for \"Wake up\"",
      options: ["Vakna", "Gå till jobbet", "Titta på TV", "Äta frukost"],
      correctAnswer: "Vakna"
    },
    {
      id: 2,
      phraseId: 2,
      question: "Swedish translation for \"Eat breakfast\"",
      options: ["Spela ett instrument", "Äta frukost", "Skriva", "Springa"],
      correctAnswer: "Äta frukost"
    },
    {
      id: 3,
      phraseId: 3,
      question: "Swedish translation for \"Go to work\"",
      options: ["Springa", "Rengöring", "Gå till jobbet", "Lyssna"],
      correctAnswer: "Gå till jobbet"
    },
    {
      id: 4,
      phraseId: 4,
      question: "Swedish translation for \"Read\"",
      options: ["Skriva", "Dansa", "Kör", "Läsa"],
      correctAnswer: "Läsa"
    },
    {
      id: 5,
      phraseId: 5,
      question: "Swedish translation for \"Exercise\"",
      options: ["Träning", "Äta frukost", "Kör", "Rengöring"],
      correctAnswer: "Träning"
    },
    {
      id: 6,
      phraseId: 6,
      question: "Swedish translation for \"Watch TV\"",
      options: ["Måla", "Titta på TV", "Prata", "Vakna"],
      correctAnswer: "Titta på TV"
    },
    {
      id: 7,
      phraseId: 7,
      question: "Swedish translation for \"Cook\"",
      options: ["Lyssna", "Skriva", "Laga mat", "Dansa"],
      correctAnswer: "Laga mat"
    },
    {
      id: 8,
      phraseId: 8,
      question: "Swedish translation for \"Go shopping\"",
      options: ["Rengöring", "Äta frukost", "Titta på TV", "Gå och handla"],
      correctAnswer: "Gå och handla"
    },
    {
      id: 9,
      phraseId: 9,
      question: "Swedish translation for \"Take a walk\"",
      options: ["Ta en promenad", "Gå till jobbet", "Koppla av", "Titta på TV"],
      correctAnswer: "Ta en promenad"
    },
    {
      id: 10,
      phraseId: 10,
      question: "Swedish translation for \"Go to bed\"",
      options: ["Vakna", "Gå och lägga sig", "Kör", "Lyssna"],
      correctAnswer: "Gå och lägga sig"
    },
    {
      id: 11,
      phraseId: 11,
      question: "Swedish translation for \"Listen\"",
      options: ["Läsa", "Måla", "Lyssna", "Skriva"],
      correctAnswer: "Lyssna"
    },
    {
      id: 12,
      phraseId: 12,
      question: "Swedish translation for \"Talk\"",
      options: ["Kör", "Träning", "Rengöring", "Prata"],
      correctAnswer: "Prata"
    },
    {
      id: 13,
      phraseId: 13,
      question: "Swedish translation for \"Study\"",
      options: ["Studera", "Skriva", "Koppla av", "Titta på TV"],
      correctAnswer: "Studera"
    },
    {
      id: 14,
      phraseId: 14,
      question: "Swedish translation for \"Relax\"",
      options: ["Skriva", "Koppla av", "Träning", "Rengöring"],
      correctAnswer: "Koppla av"
    },
    {
      id: 15,
      phraseId: 15,
      question: "Swedish translation for \"Write\"",
      options: ["Måla", "Prata","Skriva", "Kör"],
      correctAnswer: "Skriva"
    },
    {
      id: 16,
      phraseId: 16,
      question: "Swedish translation for \"Paint\"",
      options: ["Dansa", "Rengöring", "Lyssna","Måla"],
      correctAnswer: "Måla"
    },
    {
      id: 17,
      phraseId: 17,
      question: "Swedish translation for \"Sing\"",
      options: ["Sjunga", "Koppla av", "Träning", "Rengöring"],
      correctAnswer: "Sjunga"
    },
    {
      id: 18,
      phraseId: 18,
      question: "Swedish translation for \"Dance\"",
      options: ["Kör", "Dansa", "Titta på TV", "Prata"],
      correctAnswer: "Dansa"
    },
    {
      id: 19,
      phraseId: 19,
      question: "Swedish translation for \"Play an instrument\"",
      options: ["Måla", "Skriva", "Spela ett instrument", "Kör"],
      correctAnswer: "Spela ett instrument"
    },
    {
      id: 20,
      phraseId: 20,
      question: "Swedish translation for \"Brush teeth\"",
      options: ["Titta på TV", "Rengöring", "Koppla av", "Borsta tänderna"],
      correctAnswer: "Borsta tänderna"
    },
    {
      id: 21,
      phraseId: 21,
      question: "Swedish translation for \"Cleaning\"",
      options: ["Rengöring", "Gå och lägga sig", "Träning", "Koppla av"],
      correctAnswer: "Rengöring"
    },
    {
      id: 22,
      phraseId: 22,
      question: "Swedish translation for \"Playing\"",
      options: ["Kör", "Spela ett instrument", "Gå och handla", "Sjunga"],
      correctAnswer: "Spela ett instrument"
    },
    {
      id: 23,
      phraseId: 23,
      question: "Swedish translation for \"Washing clothes\"",
      options: ["Rengöring", "Äta frukost", "Tvättar kläder", "Titta på TV"],
      correctAnswer: "Tvättar kläder"
    },
    {
      id: 24,
      phraseId: 24,
      question: "Swedish translation for \"Drive\"",
      options: ["Rengöring", "Träning", "Titta på TV", "Kör"],
      correctAnswer: "Kör"
    },
    {
      id: 25,
      phraseId: 25,
      question: "Swedish translation for \"Run\"",
      options: ["Springa", "Skriva", "Koppla av", "Rengöring"],
      correctAnswer: "Springa"
    },
    {
      id: 26,
      phraseId: 26,
      question: "Swedish translation for \"Meeting\"",
      options: ["Gå och handla", "Möte", "Dansa", "Kör"],
      correctAnswer: "Möte"
    },
    {
      id: 27,
      phraseId: 27,
      question: "Swedish translation for \"I get dressed\"",
      options: ["Koppla av", "Rengöring", "Jag klär på mig", "Dansa"],
      correctAnswer: "Jag klär på mig"
    },
    {
      id: 28,
      phraseId: 28,
      question: "Swedish translation for \"Take a shower\"",
      options: ["Måla", "Borsta tänderna", "Kör", "Ta en dusch"],
      correctAnswer: "Ta en dusch"
    },
    {
      id: 29,
      phraseId: 29,
      question: "Swedish translation for \"Water plants\"",
      options: ["Vatten plantor", "Gå och handla", "Koppla av", "Dansa"],
      correctAnswer: "Vatten plantor"
    },
    {
      id: 30,
      phraseId: 30,
      question: "Swedish translation for \"Wash dishes\"",
      options: ["Sjunga", "Diska", "Rengöring", "Titta på TV"],
      correctAnswer: "Diska"
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
  
