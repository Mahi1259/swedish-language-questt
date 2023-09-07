import React from 'react';
import wood from 'public/walking-person.gif'
import Image from "next/image";
import Link from "next/link";


const SurveyPage: React.FC = () => {
  const surveyName = 'Welcome to our survey page! We truly value your feedback. Before providing your insights in the survey, kindly complete the tasks in both the Gamified and Non-Gamified Platforms. Your time and insights are of the utmost importance to us.';
  const surveyLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdAmuM1XfVcIxRjp6roi8pH98L1299AuduaQQ-VvSpSgvx-QA/viewform';
  const selectionpage = '/register';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'Arial, sans-serif', padding: '50px' }}>
      <p style={{ fontSize: '58px',marginTop:'18px',marginBottom:'18px' }}>
          Survey
          </p>
      <div style={{ backgroundColor: 'white', padding: '70px', borderRadius: '10px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center' }}>
      <Image src={wood} width="95" height="30" alt={""} style={{ width: '400px', height: '400px', marginRight: '20px' }} />
        <div>
          <h1 style={{ fontSize: '24px', marginBottom: '16px', color: 'black' }}>{surveyName}</h1>
          <div style={{ fontSize: '20px' }} className='w-full rounded-2xl border-b-4 border-gray-600 bg-gray-400 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit'>
          <a href={surveyLink} target="_blank" rel="noopener noreferrer">
           Take the survey
          </a>
          </div>
          <p style={{ fontSize: '18px',marginTop:'18px',marginBottom:'18px' }}>
          In case you have not completed tasks on one of our platforms, no worries! You can simply click here selection page to be redirected to the selection page. There, you can choose and complete.
          </p>
          
          <p style={{ fontSize: '18px' }}>
          <Link href={selectionpage} passHref style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
              selection page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
