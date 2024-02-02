import Greetings from "./components/Greetings";
import BoxColor from "./components/BoxColor";
import IdCard from './idcard.js';
import Random from './random';
import Card from './credit-data';
import './App.css';

function App() {
  return (
    <div>
      <div className="IdCard">
      <h1>Iteration 1: IdCard</h1>
      <IdCard />
      </div>
      <h2>Iteration 2: Greetings</h2>
      <div className="Greetings">
          <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="Greetings">
          <Greetings lang="fr">François</Greetings>
      </div>
      <h2>Iteration 3: Random</h2>
      <div className="Random">
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      </div>
      <h2>Iteration 4: BoxColor</h2>
      <div className="BoxColor">
        <BoxColor r={255} g={0} b={0} 
        fontColor="white"/>
      </div>
      <div className="BoxColor">
        <BoxColor r={128} g={255} b={0}
        fontColor="black"/>
      </div>
      <h2>Iteration 5: CreditCard</h2>
      <div className="CreditCard">
        <Card />
      </div>
    </div>
  );
}

export default App;