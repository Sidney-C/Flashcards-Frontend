import React, { useState } from "react";
import axios from "axios";

import DemoPopUp from "./demopopup.jsx";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteAll() {

    const apiURL = import.meta.env.VITE_API_URL;
    const serverURL = `${apiURL}/deleteall/`;

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
                await axios.delete(serverURL);
                handleClose();
                window.location = "/";
            } catch (error) {
                console.error(error.message);
            }
        }
    }
    
    return (
        <div>
            <button className="btn btn-danger btn-lg" onClick={handleShow}>Delete All</button>
            <DemoPopUp show={blockAction} onClose={closePopUp} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete All</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete all your flashcards? This action cannot be undone!
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary btn-lg" onClick={handleClose}>Cancel</Button>
                    <Button className="btn btn-danger btn-lg" onClick={handleDelete}>Delete All</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteAll;
