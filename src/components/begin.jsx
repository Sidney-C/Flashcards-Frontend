import React from "react";

function Begin(props) {
    return (
        <div>
            <button
                className="btn btn-primary btn-lg"
                onClick={() => {
                    props.beginTest();
                }}>
                Begin Test
            </button>
        </div>
    )
}

export default Begin;