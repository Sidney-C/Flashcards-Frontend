import React from "react";

function Incorrect(props) {

    const wrongStyle = {
        color: "#730211"
    }
    return (
        <div style={wrongStyle}>
            <h1>Wrong Answer!</h1>
            <h2>Your Answer: {props.userAnswer}</h2>
            <h2>Correct Answer: {props.correctAnswer}</h2>
            <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                    props.nextCard();
                }}>
                Next
            </button>
        </div>
    )
}

export default Incorrect;