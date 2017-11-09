import React from 'react';

class EmployeeAddButton extends React.Component {
    constructor() {
        super();
    }

    addEmployee = () => {
        var record = [1,2,3,4,5];
        this.props.openAddEmployee(record);
    }

    render() {
        return (
            <input type="button" value="Add" onClick={this.addEmployee} />
        );
    }
}

export default EmployeeAddButton