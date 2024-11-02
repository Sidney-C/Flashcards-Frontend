import React, { useState, useEffect } from "react";

import TableHead from "./tablehead.jsx";
import CardData from  "./carddata.jsx";
import AddCard from "./addcard.jsx";
import DeleteAll from "./deleteall.jsx";

import GetAllCards from "./getallcards.js";

function ListCards() {

    const [cards, setCards] = useState([]);

    const tableStyle = {
        borderRadius: "10px",
        boxShadow: "2px 2px gray",
        color: "#424242",
        margin: "auto",
        overflow: "hidden",
        padding: "1%",
        textAlign: "center",
        width: "80%"
    }

    const toolbarStyle = {
        display: "flex",
        marginBottom: "1%",
        marginLeft: "10%",
        marginTop: "5%"
    }

    useEffect(() => {
        async function fetchData() {
            const allCards = await GetAllCards();
            setCards(allCards);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div style={toolbarStyle}>
                <span style={{marginRight: "1%"}}><AddCard /></span>
                <span><DeleteAll /></span>
            </div>
            <table className="table" style={tableStyle}>
                <TableHead />
                <tbody>
                    {cards.map(card => (
                        <CardData
                            key = {card.id}
                            id = {card.id}
                            english = {card.english}
                            turkish = {card.turkish}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListCards;