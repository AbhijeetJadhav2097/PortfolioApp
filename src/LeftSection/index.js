import './index.css'

const LeftSection = () => {
    return (
        <div className="LeftSection">
            <div className="Education">
                <p className="section-title">Education</p>
                <p className="section-sub-title">PES College of Engineering <span className="year">(2016-2020)</span> </p>
                <p className="section-sub-title">Diploma in Mechatronics <span className="year">(2013-2016)</span></p>
                <p className="section-sub-title">High School Education <span className="year">(2003-2013)</span> </p>
            </div>
            <hr />
            <div className="Skill">
                <p className="section-title">Skills</p>
                <p className="section-sub-title">Skill 1</p>
                <p className="section-sub-title">Skill 2</p>
                <p className="section-sub-title">Skill 3</p>
            </div>
        </div>
    )
}

export default LeftSection 