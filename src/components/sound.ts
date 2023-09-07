// // import { useSound } from 'use-sound';

// // import type { ReturnedValue } from 'use-sound/dist/types';

// // export function useClick(): ReturnedValue | [() => void, null] {
// // 	const result = useSound('click.ogg', {
// // 		volume: 0.05,
// // 	});

// // 	return result;
// // }

// import { useEffect } from 'react';

// const audio = new Audio("Ne.mp3");

// export const start = () => {
//   void audio.play();
// };

// const MyAudioComponent = () => {
//   useEffect(() => {
//     // Clean up the audio when the component unmounts
//     return () => {
//       audio.pause();
//       audio.currentTime = 0;
//     };
//   }, []);

//   // You can remove the button since you're not using it here
//   return null;
// };

// export default MyAudioComponent;





