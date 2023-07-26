import React, {Component} from 'react'

class Project extends Component {
    render()
    {
       const {name,years,techStack,point1,point2} = this.props;
        return(
            <>
            <p className="section-sub-title">{name} <span className="year">({years})</span> </p>
            <p className='section-description'>Tech Stack :  {techStack.join(', ')} <br />
            <ul>
                <li>{point1}
                </li>
                <li>{point2}
                </li>
            </ul>
            </p>
            </>
        )
}
}

export default Project