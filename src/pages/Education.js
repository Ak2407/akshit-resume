import { EduBox } from "../components/EduBox"
import "../styles/Education.css"
export default function Education(){
    return(
        <>
        <div className="edu-container" id="education">
            <div className="edu-heading-container">
                <h1 className="edu-heading">EDUCATION</h1>
            </div>
            <div className="edu-timeline-container">
                <EduBox standard="10TH STANDARD FROM AES N.D" marks="92%" finish="APRIL 2018"/>
                <EduBox standard="12TH STANDARD FROM AES N.D" marks="94%" finish="APRIL 2020"/>
                <EduBox standard="B.tech IT FROM BVP N.D" marks="9.528CGPA" finish="EXPECTED 2024"/>
            </div>
        </div>

        </>
    )
}
