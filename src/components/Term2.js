const Term2 = (props)=>{
    const courseList = props.data;
    let courses = Object.entries(courseList).map(([key,value]) => {
        const courseName = value.courseDesignator+ " " + value.courseName;
        return (
            <div className="courseWrapper">
                <p className="course">
                {courseName}
               
                </p>
            </div>
        );	
    });

    return (
        <div className="semester">
            <span className="period">
                <div className ="period-header">
                    <span className="period-header-semester">{props.term} {props.year}</span>
                    <span className="period-header-credits">Credits: {props.credits}</span>
                </div>   
            </span>
            {courses}
        </div>
    );

}
export default Term2;

// const Term2 = (props)=>{
//     const courseList = props.data;
//     let courses = Object.entries(courseList).map(([key,value]) => {
//         const courseName = key+ " " + props.catalog.courses[key].name;
//         return (
//             <div className="courseWrapper">
//                 <p className="course">
//                 {courseName}
               
//                 </p>
//             </div>
//         );	
//     });

//     return (
//         <div className="semester">
//             <span className="period">
//                 <div className ="period-header">
//                     <span className="period-header-semester">{props.term} {props.year}</span>
//                     <span className="period-header-credits">Credits: </span>
//                 </div>   
//             </span>
//             {courses}
//         </div>
//     );

// }
// export default Term2;


/*ORIGINAL 
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
    <div class="semester">
        <div className="semHeader">
            {props.term}
        </div>
        {courses}
    </div>
    );

}
export default Term2;
*/
