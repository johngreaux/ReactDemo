import React from 'react';
import EmployeeRow from './EmployeeRow';

class EmployeeTable extends React.Component {
    constructor(props) {
        super(props);
    }

    result = [];

    componentWillMount() {
        console.log(this.result);
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function() {
            var response = JSON.parse(xhr.response);
            this.setState(this.result = response);
            //result = response;
            console.log(this.result);
        }.bind(this);
        xhr.send();
    }

    render () {
        console.log(this.result);
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.result.forEach(function(element) {
                        <EmployeeRow item={element} />
                    }, this)}
                </tbody>
            </table>
        );
    };
};

export default EmployeeTable