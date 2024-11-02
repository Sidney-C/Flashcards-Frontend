import React, {useState} from "react";

function Game(props) {

    const [userInput, setUserInput] = useState("");

    const inputStyle = {
        textAlign: "center"
    }

    function handleChange(event) {
        const newUserInput = event.target.value;
        setUserInput(newUserInput);
    }
    return (
        <div>
            <h1>{props.word}</h1>
            <input
                className="form-control form-control-lg"
                style={inputStyle}
                type="text"
                onChange={handleChange}
                placeholder="Enter Translation..."
                value={userInput}>
            </input>
            <br></br>
            <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                    props.submitAnswer(userInput);
                }}>
                Submit Answer
            </button>
        </div>
    )
}

export default Game;