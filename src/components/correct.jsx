import React from "react";

function Correct(props) {

    const rightStyle = {
        color: "#197302"
    }
    return (
        <div style={rightStyle}>
            <h1>Well Done!</h1>
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

export default Correct;