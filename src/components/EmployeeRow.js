import React from 'react';
import { Button } from 'reactstrap';

class EmployeeRow extends React.Component {
    constructor() {
        super();
    }

    openEditModal = () => {
        this.props.openEditEmployee(this.props.item.EmployeeId)
    }
    
    deleteEmployee = () => {
        this.props.deleteEmployee(this.props.item.EmployeeId)
    }

    render() {
        return (
            <tr>
                <td>
                    <div>
                        <Button color="primary" onClick={this.openEditModal}>Edit</Button>
                        <Button color="danger" onClick={this.deleteEmployee}>Delete</Button>
                    </div>
                </td>
                <td>{this.props.item.EmployeeId}</td>
                <td><img className="Avatar" src={this.props.item.Avatar}/></td>
                <td>{this.props.item.FirstName}</td>
                <td>{this.props.item.LastName}</td>
                <td>{this.props.item.Address}</td>
                <td>{this.props.item.Age}</td>
                <td>{this.props.item.Interests}</td>
            </tr>
        );
    }
};

export default EmployeeRow