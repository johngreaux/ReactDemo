import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EmployeeEditModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modal: false,
            employee: {}
        };
      
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    editEmployee = () => {
        this.props.editEmployee(this.state.employee)
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Edit Employee</ModalHeader>
                <ModalBody>
                    Test
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.editEmployee}>Edit</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EmployeeEditModal