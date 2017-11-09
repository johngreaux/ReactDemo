import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EmployeeAddModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modal: true,
            employee: {}
        };
      
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    addEmployee = () => {
        this.props.addEmployee(this.state.employee)
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add Employee</ModalHeader>
                <ModalBody>
                    Test
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.addEmployee}>Add</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default EmployeeAddModal