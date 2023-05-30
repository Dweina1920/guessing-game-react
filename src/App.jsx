import { useState } from "react";
import "./App.css";
function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function App() {
  //variables de estados
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [inputNumber, useInputNumber] = useState("");
  console.log(randomNumber);
  const [intentos, setIntentos] = useState(10);
  const [intentosFallidos, setIntentosFallidos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [displayNone, setDisplayNone] = useState(false);

  const handleClick = () => {
    setIntentos(intentos - 1);
    setIntentosFallidos([...intentosFallidos, inputNumber]);
    // he ganado: si he ganado, es porque al hacer click, las variables de estado inputNumber y randomNumber son iguales. setMensaje con el mensaje adecuado, y return
    if (inputNumber == randomNumber) {
      setDisplayNone(true);
      return setMensaje("HAS GANADO");
    }
    // he perdido: es porque al hacer click, las variable intentos == 0. setMEssage adecuado y return
    if (intentos == 1) {
      setDisplayNone(true);
      return setMensaje("HAS PERDIDO");
    }
    if (inputNumber > randomNumber) {
      setMensaje("Demasiado Alto");
    } else if (inputNumber < randomNumber) {
      setMensaje("Demasiado Bajo");
    }
    //al final de todo
    useInputNumber("");
  };

  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have {intentos} attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">
          Guess a number
        </label>
        <input
          style={{ display: displayNone ? "none" : "" }}
          type="number"
          id="guessField"
          className="guessField"
          value={inputNumber}
          onChange={(e) => useInputNumber(e.target.value)}
        />
        <button
          style={{ display: displayNone ? "none" : "" }}
          className="guessSubmit"
          onClick={handleClick}
        >
          Submit a Guess
        </button>

        <div className="resultParas">
          <p style={{ display: displayNone ? "none" : "" }}>
            Previous Guesses:{" "}
            <span
              className="guesses"
              onChange={(e) => setIntentosFallidos(e.target.value)}
            >
              {intentosFallidos.join(" / ")}
            </span>
          </p>
          <p style={{ display: displayNone ? "none" : "" }}>
            Guesses Remaining:{" "}
            <span
              className="lastResult"
              onChange={(e) => setIntentos(e.target.value)}
            >
              {intentos}
            </span>
          </p>
          <h2 className="lowOrHi" style={{ color: "yellowgreen" }}>
            {mensaje}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
