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
  const surveLink = '/learnnon';

  return (
    <div style={styles.container}>
      <div className='flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-500 py-2 px-5 text-1xl font-bold hover:bg-gray-700 hover:bg-opacity-20'>

        <p>
        Welcome to our Non-Gamified Learning Platform! Dive into Educational Experiences
        </p>
        <ul style={styles.list}></ul>
        <p>
        This platform comprises the following components:-
        </p>

        <ul style={styles.list}>
          <li>
          Units Section: Immerse yourself in a variety of units featuring comprehensive language content to facilitate your learning journey.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Survey Button: Share your insights through surveys to help shape an improved learning experience based on your feedback.
          </li>
          <ul style={styles.list}></ul>
          <li>
          Learn Button: Serving as a static indicator, this button signifies your presence on the learning page.
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
              <Link href="/learnnon" className='w-full rounded-2xl border-b-4 border-gray-600 bg-gray-400 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit'>Continue</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



