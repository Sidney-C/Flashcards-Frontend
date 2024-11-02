import React, { useState } from "react";

import Header from "./header.jsx";
import ListCards from "./listcards.jsx";
import TrToEn from "./trtoen.jsx";

function App() {

    const [showList, setShowList] = useState(true);
    const [showEn, setShowEn] = useState(false);
    const [showTr, setShowTr] = useState(false);

    const bgStyle = {
        backgroundColor: "#e6e8f0",
        minHeight: "100vh"
    }

    function showAll() {
        setShowList(true);
        setShowEn(false);
        setShowTr(false);
    }

    function testEnToTr() {
        setShowList(false);
        setShowEn(true);
        setShowTr(false);
    }

    function testTrToEn() {
        setShowList(false);
        setShowEn(false);
        setShowTr(true);
    }

    return (
        <div style={bgStyle}>
            <Header
            showAll={showAll}
            testEnToTr={testEnToTr}
            testTrToEn={testTrToEn}
            />
            {showList && <ListCards/>}
            {showEn && <TrToEn questionLanguage="english" answerLanguage="turkish"/>}
            {showTr && <TrToEn questionLanguage="turkish" answerLanguage="english"/>}
        </div>
    )
}

export default App;