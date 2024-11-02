import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DemoPopUp({ show, onClose }) {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Demo Mode</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Sorry, this action cannot be performed right now because the app is in demo mode.
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-primary btn-lg" onClick={onClose}>OK</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DemoPopUp