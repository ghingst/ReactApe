//catalog table
import React, {Component} from 'react';

class LowerRight extends Component {
    render() {
            let html = "";
            /*This loop is broke until catalog is brought in properly*/
    /*for (var i = 0; i < this.props.catalog.courses.length; i++) {
        html += "<tr>";
        html += "<td>" + this.props.catalog.courses[i].id + "</td>";
        html += "<td>" + this.props.catalog.courses[i].name + "</td>";
        html += "<td>" + this.props.catalog.courses[i].description + "</td>";
        html += "<td>" + this.props.catalog.courses[i].credits + "</td>";
        html += "</tr>";
    }*/
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
                <tbody id="catalog_body">
                </tbody>
                <script>
                    document.getElementById("catalog_body").innerHTML = html;
                </script>
                </table>
            </div>
        );
    };
 
}
    


export default LowerRight;