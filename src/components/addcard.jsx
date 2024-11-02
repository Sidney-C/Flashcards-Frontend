import React, { useState } from "react";
import axios from "axios";

import DemoPopUp from "./demopopup.jsx";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddCard() {

    const apiURL = process.env.REACT_APP_API_URL;
    const serverURL = `${apiURL}/addcard`;

    const [show, setShow] = useState(false);
    const [english, setEnglish] = useState("");
    const [turkish, setTurkish] = useState("");
    const [blockAction, setBlockAction] = useState(false);

    const isDemo = true;

    function closePopUp() {
        setBlockAction(false);
        window.location = "/";
    }

    function handleClose() {
        setShow(false);
        setEnglish("");
        setTurkish("");
    }

    function handlePopUp() {
        setBlockAction(true);
    }

    function handleShow() {
        setShow(true);
    }

    function updateEnglish(event) {
        setEnglish(event.target.value);
    }

    function updateTurkish(event) {
        setTurkish(event.target.value);
    }

    async function saveChanges(event) {
        event.preventDefault();
        if (isDemo) {
            handleClose();
            handlePopUp();
        } else {
            try {
                const body = {
                    english: english,
                    turkish: turkish
                }
                await axios.post(serverURL, body, {
                    headers: { "Content-Type": "application/json" }
                });
                handleClose();
                window.location = "/";
            } catch (error) {
                console.error(error.message);
            }
        }   
    }

    return (
        <div>
            <button className="btn btn-primary btn-lg" onClick={handleShow}>Add Flashcard</button>
            <DemoPopUp show={blockAction} onClose={closePopUp} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Flashcard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control form-control-lg" value={english} placeholder="English" onChange={updateEnglish} />
                    <br></br>
                    <input type="text" className="form-control form-control-lg" value={turkish} placeholder="Turkish" onChange={updateTurkish} />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary btn-lg" onClick={handleClose}>Cancel</Button>
                    <Button className="btn btn-primary btn-lg" onClick={saveChanges}>Save Flashcard</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddCard;