import React from "react";

function ScoreBoard(props) {
    return (
        <div>
            <h4>Correct Answers: {props.score}</h4>
            <h4>Incorrect Answers: {props.mistakes}</h4>
            <h4>Cards Remaining: {(props.total) - (props.score + props.mistakes)}</h4>
        </div>
    )
}

export default ScoreBoard