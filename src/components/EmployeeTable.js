import React from 'react';
import EmployeeRow from './EmployeeRow';
import EmployeeAddButton from './EmployeeAddButton';
import EmployeeAddModal from './EmployeeAddModal';
import EmployeeEditModal from './EmployeeEditModal';

class EmployeeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            addModal : [],
            editModal : []
        }
    }

    openAddEmployee = () => {
        console.log("ADD");
        this.setState({addModal: <EmployeeAddModal addEmployee={this.addEmployee} />})
    }

    openEditEmployee = (id) => {
        console.log("EDIT" + id);
        this.setState({addModal: <EmployeeEditModal editEmployee={this.editEmployee} />})
    }

    addEmployee = (data) => {
        console.log(data);
        var rows = this.state.rows
        rows.push(<EmployeeRow key={rows.length} item={
           {
                EmployeeId: 1,
                Avatar: "",
                FirstName: "Test",
                LastName: "Test",
                Address: "123",
                Age: 5,
                Interests: "t,t,t"
           } 
        } />);
        console.log(rows);
        this.setState({rows : rows})
    }

    editEmployee = (data) => {
        console.log(data);
    }

    deleteEmployee = (id) => {
        console.log("employee id:" + id);
    }

    componentDidMount() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function() {
            var response = JSON.parse(xhr.response);
            console.log(response);
            this.setState({ 
                rows : response.map((r, index) => 
                    <EmployeeRow key={index} item={r} openEditEmployee={this.openEditEmployee} deleteEmployee={this.deleteEmployee} />
                ) 
            });
        }.bind(this);
        xhr.send();
    }

    render () {
        return (
            <div>
                <EmployeeAddButton openAddEmployee={this.openAddEmployee} />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Employee ID</th>
                            <th>Avatar</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Age</th>
                            <th>Interests</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table>

                {this.state.addModal}
                {this.state.editModal}
            </div>
        );
    };
};

export default EmployeeTable