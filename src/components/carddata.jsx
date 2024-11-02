import React from "react";

import EditCard from "./editcard.jsx";
import DeleteCard from "./deletecard.jsx";

function CardData(props) {

    const rowStyle = {
        backgroundColor: "#fafdff",
        color: "#424242"
    }
    
    return (
        <tr>
            <td style={rowStyle}><h4>{props.english}</h4></td>
            <td style={rowStyle}><h4>{props.turkish}</h4></td>
            <td style={rowStyle}><EditCard
                id = {props.id}
                english = {props.english}
                turkish = {props.turkish}
                />
            </td>
            <td style={rowStyle}><DeleteCard
                id = {props.id}
                />
            </td>
        </tr>
    )
}

export default CardData;