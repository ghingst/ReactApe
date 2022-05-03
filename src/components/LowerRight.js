//catalog table
import React, {Component} from 'react';

class LowerRight extends Component {
    render () {
        return (
        <div id="course-finder">
            <div>
            </div>
            <table id= "catalog_table" className="catalogDisplay">
            <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Credits</th>
            </tr>
            </thead>
            <tbody>

           
            </tbody>
            </table>
        </div>
        );
    }
}

export default LowerRight;