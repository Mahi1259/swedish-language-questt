import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import elep from 'public/ele.png'

interface CourseProps {
  title: string;
}

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
};

const courseStyles: React.CSSProperties = {
  width: '700px',
  height: '90px',
  borderRadius: '10px',
  background: '#9ba3af',
  border: '1px solid #000',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  marginBottom: '20px',
};

const titleStyles: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginTop: '20px',
};

const Course: React.FC<CourseProps> = ({ title }) => {
  const handleStartClick = () => {
    switch (title) {
      case 'Basic Phrases':
        return '/lesson11non';
      case 'Food and Drinks':
        return '/lesson12non';
      case 'Travel and Directions':
        return '/lesson13non';
      case 'Everyday Activities':
        return '/lesson14non';
      default:
        return '/';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginTop:'-20px'}}>
      <div style={courseStyles}>
        <div style={titleStyles}>{title}</div>
      </div>
      <Link href={handleStartClick()} passHref>
        <button style={{marginBottom: '40px' }} className='w-full rounded-2xl border-b-4 border-gray-600 bg-gray-400 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit'>
          Start
        </button>
      </Link>

    </div>
  );
};

const Home: React.FC = () => {
  const courses = [
    { title: 'Basic Phrases' },
    { title: 'Food and Drinks' },
    { title: 'Travel and Directions' },
    { title: 'Everyday Activities' },
  ];
  const handleExitClick = () => {
    window.location.href = '/register';
  };

  return (
    <div style={containerStyles}>
      <div style={{ position: 'absolute', top: '27%', left: '20px', transform: 'translateY(-50%)' }}>
        <div style={{ marginBottom: '0px',marginTop:'50px' }}>
        <Image src={elep} width="220" height="120" alt={""} />
          </div>
          <div style={{ marginLeft:'10px'}} className="ml-5 mb-5 mt-5 hidden text-2xl font-bold text-black-400 lg:block">
            Swedish<br />
            Language Quest
            </div>
            <div style={{ marginTop: '12px' ,marginLeft:'10px'}}>
              <button className='flex grow items-center gap-5 rounded-xl py-3 px-11 text-sm font-bold uppercase text-black-400 border-2 border-b-2 border-gray-700 bg-[white] px-8 py-2 font-bold uppercase transition'>Learn</button>
              </div>
              <div style={{ marginTop: '12px' ,marginLeft:'9px'}}>
                <Link href="/Survey" passHref>
            <button className='flex grow items-center gap-5 rounded-xl py-3 px-5 text-sm font-bold uppercase text-black-400 border-2 border-b-2 border-gray-700 bg-[white] px-8 py-2 font-bold uppercase transition hover:bg-red-500 hover:bg-opacity-20'>
              Survey
            </button>
          </Link>
        </div>
              <div style={{ marginTop: '12px' ,marginLeft:'10px'}}>
                <Link href="/register" passHref>
            <button className='flex grow items-center gap-5 rounded-xl py-3 px-12 text-sm font-bold uppercase text-black-400 border-2 border-b-2 border-gray-700 bg-[white] px-8 py-2 font-bold uppercase transition hover:bg-red-500 hover:bg-opacity-20'>
              Exit
            </button>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: '60px' }}>
        {courses.map((course, index) => (
          <Course key={index} title={course.title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
