import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

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
            <Modal isOpen={!!modal} toggle={close}>
                <form onSubmit={submit}>
                    <ModalHeader toggle={close}>Edit Task</ModalHeader>
                    <ModalBody>
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
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" type='submit'>Save</Button>{' '}
                        <Button color="secondary" onClick={close}>Cancel</Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>
    );
}

export default ModalBlock;
