import React from "react";

function Header(props) {

    const headerStyle = {
        color: "#424242",
        fontSize: "3em"
    }

    const buttonStyle = {
        margin: "1%"
    }

    const navbarStyle = {
        backgroundColor: "#fafdff",
        borderRadius: "10px",
        boxShadow: "2px 2px gray",
        color: "#424242"
    }
    return (
        <nav class="navbar" style={navbarStyle}>
            <form class="container-fluid justify-content-start">
                <a class="navbar-brand" href="/"><h1 style={headerStyle}>My Flashcards</h1></a>
                <button
                    class="btn btn-primary btn-lg"
                    style={buttonStyle}
                    onClick={() => {
                        props.showAll();
                    }}>
                    Home
                </button>
                <button
                    class="btn btn-primary btn-lg"
                    style={buttonStyle}
                    onClick={(event) => {
                        event.preventDefault();
                        props.testEnToTr();
                    }}>
                    Test English to Turkish
                </button>
                <button
                    class="btn btn-primary btn-lg"
                    style={buttonStyle}
                    onClick={() => {
                        event.preventDefault();
                        props.testTrToEn();
                    }}>
                    Test Turkish to English
                </button>
            </form>
        </nav>
    )
}

export default Header;