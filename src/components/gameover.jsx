import React from "react";

function GameOver(props) {
    return (
        <div>
            <h1>Test Finished!</h1>
            <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                    props.newGame();
                }}>
                Home
            </button>
        </div>
    )
}

export default GameOver;