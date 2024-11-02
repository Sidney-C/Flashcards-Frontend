import React, { useState, useEffect } from "react";

import Begin from "./begin.jsx";
import Correct from "./correct.jsx";
import Incorrect from "./incorrect.jsx";
import Game from "./game.jsx";
import ScoreBoard from "./scoreboard.jsx";
import GameOver from "./gameover.jsx";

import GetAllCards from "./getallcards.js";
import ShuffleCards from "./shufflecards.js";

function TrToEn(props) {

    const [cards, setCards] = useState([]);
    const [current, setCurrent] = useState({ id: 9999, english: "", turkish: ""});
    const [count, setCount] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [begin, setBegin] = useState(true);
    const [game, setGame] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [scoreBoard, setScoreBoard] = useState(true);

    const cardStyle = {
        backgroundColor: "#fafdff",
        boxShadow: "2px 2px gray",
        color: "#424242",
        margin: "auto",
        padding: "1%",
        textAlign: "center",
        width: "30%"
    };

    const gameStyle = {
        marginTop: "5%"
    }

    useEffect(() => {
        async function fetchData() {
            const allCards = await GetAllCards();
            const shuffled = await ShuffleCards(allCards);
            setCards(shuffled);
        }
        fetchData();
    }, []);

    function beginTest() {
        setCurrent(cards[count]);
        setBegin(false);
        setGame(true);
        setScoreBoard(true);
    }

    function submitAnswer(userInput) {
        setUserAnswer(userInput);
        setGame(false);
        if (userInput.toLowerCase() === current[props.answerLanguage].toLowerCase()) {
            const newScore = score + 1;
            setScore(newScore);
            setCorrect(true);
        } else {
            const newMistakes = mistakes + 1;
            setMistakes(newMistakes);
            setIncorrect(true);
        }
    }

    function nextCard() {
        if (count < (cards.length - 1)) {
            const newCount = count + 1
            setCount(newCount);
            setCurrent(cards[newCount]);
            setCorrect(false);
            setIncorrect(false);
            setGame(true);
        } else {
            setCorrect(false);
            setIncorrect(false);
            setGameOver(true);
        }
    }

    function newGame() {
        window.location = "/";
    }

    return (
        <div style={gameStyle}>
            {cards[count] && (
                <div className="card" style={cardStyle}>
                    {begin && (
                        <Begin
                            beginTest={beginTest}
                        />
                    )}
                    {game && (
                        <Game
                            word={current[props.questionLanguage]}
                            submitAnswer={submitAnswer}
                        />
                    )}
                    {correct && (
                        <Correct
                            nextCard={nextCard}
                        />
                    )}
                    {incorrect && (
                        <Incorrect
                            userAnswer={userAnswer}
                            correctAnswer={current[props.answerLanguage]}
                            nextCard={nextCard}
                        />
                    )}
                    {gameOver && (
                        <GameOver
                            newGame={newGame}
                        />
                    )}
                </div>
            )}
            <br></br>
            {scoreBoard && (
                <div className="card" style={cardStyle}>
                    <ScoreBoard
                        score={score}
                        mistakes={mistakes}
                        total={cards.length}
                    />
                </div>
            )}
        </div>
    )
}

export default TrToEn;