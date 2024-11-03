import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

import DemoPopUp from "./demopopup.jsx";

function EditCard(props) {

    const apiURL = import.meta.env.VITE_API_URL;
    const serverURL = `${apiURL}/editcard/`;

    const [show, setShow] = useState(false);
    const [english, setEnglish] = useState(props.english);
    const [turkish, setTurkish] = useState(props.turkish);
    const [blockAction, setBlockAction] = useState(false);

    const isDemo = true;

    function closePopUp() {
        setBlockAction(false);
        window.location = "/";
    }

    function handleClose() {
        setShow(false);
        setEnglish(props.english);
        setTurkish(props.turkish);
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
                };
                const response = await axios.put(`${serverURL}${props.id}`, body, {
                    headers: { "Content-Type": "application/json" }
                });
                handleClose();
                window.location = "/";
            } catch (error) {
                console.error("Error while updating card", error.message);
            }
        }
    }

    return (
        <div>
            <button className="btn btn-primary btn-lg" onClick={handleShow}>Edit</button>
            <DemoPopUp show={blockAction} onClose={closePopUp} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Flashcard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" class="form-control form-control-lg" value={english} onChange={updateEnglish} />
                    <br></br>
                    <input type="text" class="form-control form-control-lg" value={turkish} onChange={updateTurkish} />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary btn-lg" onClick={handleClose}>Cancel</Button>
                    <Button className="btn btn-primary btn-lg" onClick={saveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditCard;
