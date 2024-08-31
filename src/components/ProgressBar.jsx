// import { useState } from 'react';
// import '../App.css';

// const Component = ({ progress }) => {
//   return (
//     <div className="progress-bar-container">
//       <div className="progress-bar" style={{ width: `${progress}%` }}>
//         {progress}%
//       </div>
//     </div>
//   );
// };

// function ProgressBar() {
//   const [progress, setProgress] = useState(0);

//   const handleIncreaseProgress = () => {
//     setProgress(prev => (prev < 100 ? prev + 25 : 100));
//   };

//   const handleDecreaseProgress = () => {
//     setProgress(prev => (prev > 0 ? prev - 25 : 0));
//   };

//   return (
//     <div className="App">
//       <Component progress={progress} />
//       {/* <span><b>(1/4)</b></span> <br /> */}
//       <button onClick={handleDecreaseProgress} style={{color: "white"}}>Decrease</button>
//       <button onClick={handleIncreaseProgress} style={{color: "white"}}>Increase</button>
//     </div>
//   );
// }

// export default ProgressBar;


import { useState } from 'react';
import '../App.css';

const Component = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: ${progress}% }}>
        {progress}%
      </div>
    </div>
  );
};

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleIncreaseProgress = () => {
    setProgress(prev => (prev < 100 ? prev + 25 : 100));
  };

  const handleDecreaseProgress = () => {
    setProgress(prev => (prev > 0 ? prev - 25 : 0));
  };

  return (
    <div className="App">
      <Component progress={progress} />
      {/* <span><b>(1/4)</b></span> <br /> */}
      <button onClick={handleDecreaseProgress} style={{color: "white"}}>Decrease</button>
      <button onClick={handleIncreaseProgress} style={{color: "white"}}>Increase</button>
    </div>
  );
}

export default ProgressBar;