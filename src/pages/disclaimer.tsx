import React from 'react';
import Link from "next/link";



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  text: {
    maxWidth: '800px',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginTop: '20px', // Add spacing between list items
  },
};

const Home: React.FC = () => {
  const platformName = '[Your Platform Name]';
  const surveLink = '/learn';

  return (
    <div style={styles.container}>
      <div className='flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-500 py-2 px-5 text-1xl font-bold hover:bg-gray-700 hover:bg-opacity-20'>

        <p>
        Welcome to our Gamified Learning Platform! Discover more engaging features on your path to language mastery
        </p>
        <ul style={styles.list}></ul>
        <p>
        This platform comprises the following components:-
        </p>

        <ul style={styles.list}>
          <li>
          Learning Points (LP): You earn 10 LP for every completed unit, showcasing your dedication and progress in mastering the language.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Badges: As you conquer levels, you earn badges (Bronze, Silver, Gold, and Platinum) that demonstrate your achievements and growth.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Streak Icon: Maintain a daily learning streak to highlight your commitment and consistency.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Gems Icon: Collect Gems by completing units, symbolizing your accomplishments and journey on the platform.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Units Section: Engage with language tasks designed to improve your skills and understanding.
          </li>
          <ul style={styles.list}></ul>
          <li>
          LP Progress Element: Set daily LP goals to challenge yourself and achieve consistent progress.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Survey Button: Share your insights through surveys to help shape an improved learning experience based on your feedback.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Learn Button: A static button that serves as an indicator, showing that you are currently on the learning page.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Exit Button: Leave the platform gracefully whenever you choose.
          </li>
          <ul style={styles.list}></ul>
          <p>
          Happy learning,
          </p>
          <p>
          Team
          </p>
          <a>
          (Vaishnavi Walajapet Bhakthavathsalam
          </a>
          <p>
            Vaka Mahidhar Reddy)
          </p>
        </ul>
        <div className="flex justify-center mt-6">
          <div style={{marginBottom:'15px'}}>
              <Link href="/learn" className='w-full rounded-2xl border-b-4 border-gray-600 bg-gray-400 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit'>Continue</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



