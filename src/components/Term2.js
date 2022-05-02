const Term2 = (props)=>{
    const courseList = props.data;
    let courses = Object.entries(courseList).map(([key,value]) => {
        const courseName = key+ " " + props.catalog.courses[key].name;
        return (
            <p>
            {courseName}
            </p>
        );	
    });

    return (
        <div>
        {courses}
        </div>




//Fall " + yearArray.at(i).year + "</span>";



//         //html += "<div style='width: 100%'><span>Fall " + yearArray.at(i).year + "</span>";
//         //html += "<span style='position: absolute; right: 0'>credits: 10</span></div>";
// for (var j = 0; j < yearArray[i].fallTerm.courses.length; j++) {
//     for (var k = 0; k < catalog.courses.length; k++) {
//         if (catalog.courses[k].id == yearArray[i].fallTerm.courses[j].courseDesignator) {
//             credits = parseInt(catalog.courses[k].credits);
//             courseName = yearArray[i].fallTerm.courses[j].courseDesignator + " " + catalog.courses[k].name;
//             html += "<div class='courseWrapper' courseName='" + courseName + "' credits='" + credits + "' draggable='true' ondragstart='dragStart(event, true)'>"
//                 +       "<p class='course'>"
//                 +           courseName 
//                 +           "<img class='del-course' src='Images/x-icon.png'/>"
//                 +       "</p>"
//                 +   "</div>";
//         }
//     }
// }


    );

}
export default Term2;
