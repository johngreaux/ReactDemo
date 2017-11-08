import React from 'react';
import EmployeeTable from './EmployeeTable';
import '../styles/Home.scss';

const Home = () => {
    return (
        <div className="container-fluid no-padding">
            <div className="Home row no-margin" id="dialogContainer">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                    <EmployeeTable url="api/employee/" />
                </div>
            </div>
        </div>
    );
};

export default Home;