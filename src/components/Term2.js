const Term2 = (props)=>{
    const courseList = props.data;
    let courses = Object.entries(courseList).map(([key,value]) => {
        const courseName = key+ " " + props.catalog.courses[key].name;
        return (
            <div className="courseWrapper" draggable='true' onDragStart='dragStart(event, true)'>
                <p className="course">
                {courseName}
                <img class='del-course' src='Images/x-icon.png'/>
                </p>
            </div>
        );	
    });

    return (
        <div className="semester">
            <span className="period" onDragOver='dragover(event)' onDrop='drop(event, this)'>
                <div className ="period-header">
                    <span className="period-header-semester">{props.term} {props.year}</span>
                    <span className="period-header-credits">Credits: </span>
                </div>   
            </span>
            {courses}
        </div>
    );

}
export default Term2;
