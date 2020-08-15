import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModalBlock({close, modal}) {
    const task = modal || {};
    const submit = (e) => {
        e.preventDefault();
        task.title = e.target[1].value;
        task.description = e.target[2].value;
        task.priority = e.target[3].value;
        close();
    };
    return (
        <div>
            <Modal show={!!modal} onHide={close}>
                <form onSubmit={submit}>
                    <Modal.Header closeButton>Edit Task</Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="inputTaskTitle">Title</label>
                            <input
                                className="form-control"
                                id="inputTaskTitle"
                                aria-describedby="emailHelp"
                                defaultValue={task.title}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputTaskDescription">Description</label>
                            <textarea
                                className="form-control"
                                id="inputTaskDescription"
                                aria-describedby="emailHelp"
                                defaultValue={task.description}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select className="form-control" id="priority">
                                <option value='1'>Low</option>
                                <option value='2'>Medium</option>
                                <option value='3'>High</option>
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type='submit'>Save</Button>{' '}
                        <Button variant="secondary" onClick={close}>Cancel</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default ModalBlock;
