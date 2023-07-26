import './index.css'
import Project from './Project/index'
const RightSection = () =>{
    return(
       
        <div className="RightSection">
        <div className="Project">
            <p className="section-title">Projects</p>
        <Project name="Calculator App" years='2018' techStack={['HTML', 'CSS', 'Bootstrap', 'Javascript' ]}  point1="Lorem Ipsum is simply dummy text of the printing and typesetting industry." point2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

        <Project name="Registration App" years='2019' techStack={['HTML', 'CSS', 'Bootstrap', 'Javascript' ]}   point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." point2="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."/>
        
        <Project name="Order status management" years='2020' techStack={['HTML', 'CSS', 'Bootstrap', 'React.js' ]}   point1="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested." point2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        </div>
        <hr />
        {/* <div className="Achievements">
            <p className="section-title">Achievements</p>
            <ul>
                <li>Secured </li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>React.js</li>
            </ul>
        </div> */}
        <div className="Languages">
            <p className="section-title">Languages</p>
            <ul>
                <li>English </li>
                <li>Hindi</li>
                <li>Marathi</li> 
            </ul>
        </div>
        </div>
    )
}

export default RightSection