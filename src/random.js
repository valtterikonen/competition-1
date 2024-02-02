import './App.css';


const Random = ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const arrow = "=>"
    return (
      <div className='random'>
        <p>Random value between {min} and {max} {arrow}: {randomNumber}</p>
      </div>
    );
  };

    export default Random;