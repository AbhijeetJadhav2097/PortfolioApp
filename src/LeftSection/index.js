import './index.css'
import Education from './Education/index'
const LeftSection = () => {
    return (
        <div className="LeftSection">
            <div className="Education">
                <p className="section-title">Education</p>
               <Education institute="PES College of Engineering" years='2016-2020' cgpa={8.9} point1="Lorem Ipsum is simply dummy text of the printing and typesetting industry." point2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
               <Education institute="Diploma in Mechatronics" years='2013-2016' cgpa={8.2} point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." point2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
               
               <Education institute="High School Education" years='2003-2013' cgpa={8.1} point1="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested." point2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>
            <hr />
            <div className="Skill">
                <p className="section-title">Skills</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>PHP</li>
                    <li>React.js</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSection 