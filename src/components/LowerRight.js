//catalog table
import React, {Component} from 'react';

class LowerRight extends Component {
    render() {
        if (this.props.catalog == null) {
            return;
        }

        let html = "";/*"<tr>";
        html += "<td> " + this.props.catalog[1].name +  "</td>";
        html += "<td> 2 </td>";
        html += "<td> 3 </td>";
        html += "<td> 4 </td>";
        html += "</tr>";*/
            /*This loop is broke until catalog is brought in properly*/
    for (var i = 0; i < this.props.catalog.length; i++) {
        html += "<tr>";
        html += "<td>" + this.props.catalog[i].id + "</td>";
        html += "<td>" + this.props.catalog[i].name + "</td>";
        html += "<td>" + this.props.catalog[i].description + "</td>";
        html += "<td>" + this.props.catalog[i].credits + "</td>";
        html += "</tr>";
    }
        return (
            <div id="course-finder">
            <table id="catalog_table" className="catalogDisplay">
                
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Credits</th>
                    </tr>
                </thead> 
                    <tbody id="catalog_body" dangerouslySetInnerHTML={{ __html: html }}>
                </tbody>
                </table>
            </div>
        );
    };
 
}
    


export default LowerRight;