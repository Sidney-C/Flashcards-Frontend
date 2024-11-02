import React from "react";

function TableHead() {

    const rowStyle = {
        backgroundColor: "#fafdff",
        color: "#424242"
    }

    return (
        <thead>
            <tr>
                <th style={rowStyle}><h3>English</h3></th>
                <th style={rowStyle}><h3>Turkish</h3></th>
                <th style={rowStyle}><h3>Edit</h3></th>
                <th style={rowStyle}><h3>Delete</h3></th>
            </tr>
        </thead>
    )
}

export default TableHead