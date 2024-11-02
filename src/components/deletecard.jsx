import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

import DemoPopUp from "./demopopup.jsx";

function DeleteCard(props) {

    const apiURL = process.env.REACT_APP_API_URL;
    const serverURL = `${apiURL}/deletecard/`;

    const [show, setShow] = useState(false);
    const [blockAction, setBlockAction] = useState(false);

    const isDemo = true;

    function closePopUp() {
        setBlockAction(false);
        window.location = "/";
    }

    function handleClose() {
        setShow(false);
    }

    function handlePopUp() {
        setBlockAction(true);
    }

    function handleShow() {
        setShow(true);
    }

    async function handleDelete(event) {
        event.preventDefault();
        if (isDemo) {
            handleClose();
            handlePopUp();
        } else {
            try {
                await axios.delete(`${serverURL}${props.id}`)
                handleClose();
                window.location = "/";
            } catch (error) {
                console.error(error.message);
            }
        }
    }

    return (
        <div>
            <button className="btn btn-danger btn-lg" onClick={handleShow}>Delete</button>
            <DemoPopUp show={blockAction} onClose={closePopUp} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Flashcard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this flashcard? This action cannot be undone!
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary btn-lg" onClick={handleClose}>Cancel</Button>
                    <Button className="btn btn-danger btn-lg" onClick={handleDelete}>Delete Flashcard</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteCard;