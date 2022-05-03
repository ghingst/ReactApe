//accordion
import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

class UpperLeft extends Component {
    render () {
        if(this.props.requirements == null){
            return;
        }

        //console.log("rendering accordion");
        
        var coreArray = [];
        var electiveArray = [];
        var cognateArray = [];

        // Get the data from the passed in JSON
        console.log(this.props.requirements);
        this.props.requirements.forEach((key, value) => {
            if(key.category == "Core"){
                coreArray.push(key.course_id + " " + key.name);
            }
            else if(key.category == "Electives"){
                electiveArray.push(key.course_id + " " + key.name);
            }
            else if(key.category == "Cognates"){
                cognateArray.push(key.course_id + " " + key.name);
            }
        });
        console.log("CoreArray: " + coreArray);
        console.log("ElectiveArray: " + electiveArray);
        console.log("CognateArray: " + cognateArray);

        // Pre-build some HTML to be passed into the return statement
        var coreArrayHTML = "";
        for (var i = 0; i < coreArray.length; i++) {
            coreArrayHTML += "<p courseName='" + coreArray.at(i) + "' draggable='true'>" + coreArray.at(i) + "</p>";
            //<img className='req-status' src={require('../Images/x-icon.png').default}/>
        }
        var electiveArrayHTML = "";
        for (var i = 0; i < electiveArray.length; i++) {
            electiveArrayHTML += "<p courseName='" + electiveArray.at(i) + "' draggable='true'>" + electiveArray.at(i) + "</p>";
            //<img className='req-status' src={require('../Images/x-icon.png').default}/>
        }
        var cognateArrayHTML = "";
        for (var i = 0; i < cognateArray.length; i++) {
            cognateArrayHTML += "<p courseName='" + cognateArray.at(i) + "' draggable='true'>" + cognateArray.at(i) + "</p>";
            //<img className='req-status' src={require('../Images/x-icon.png').default}/>
        }

        return (
                <Accordion id="course-list">
                    <AccordionItem>
                        <AccordionItemHeading className="accordion-header">
                            <AccordionItemButton>
                                Core 
                             </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-content" dangerouslySetInnerHTML={{__html: coreArrayHTML}} />
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading className="accordion-header"> 
                            <AccordionItemButton>
                                Electives 
                             </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-content" dangerouslySetInnerHTML={{__html: electiveArrayHTML}} />
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading className="accordion-header"> 
                            <AccordionItemButton>
                                Cognates 
                             </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="accordion-content" dangerouslySetInnerHTML={{__html: cognateArrayHTML}} />
                    </AccordionItem>
                </Accordion>
        );
    }
}

export default UpperLeft;