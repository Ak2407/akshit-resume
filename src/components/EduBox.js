import "../styles/EduBox.css"
export const EduBox = (props) =>
{
    return(
        <>
            <div className="edu-class-container">
                <h1 className="edu-class">{props.standard}</h1>
                <p className="edu-marks-container"><span className="edu-marks">{props.marks}</span> - {props.finish}</p>
            </div>
        </>
    )
}