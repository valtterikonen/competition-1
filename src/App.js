import Greetings from "./components/Greetings";
import BoxColor from "./components/BoxColor";
import "./App.css";

function App() {
  return (
    <div>
      <h2>Iteration 2: Greetings</h2>
      <div className="Greetings">
          <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="Greetings">
          <Greetings lang="fr">François</Greetings>
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
    </div>
  );
}

export default App;