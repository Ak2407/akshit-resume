import "../styles/ProjectCard.css";
export const ProjectCard = (props) => {
  return (
    <>
      <div className="project-div">
        <a className="project-container" href={props.destination} target="_blank">
          <img className="project" src={props.img}></img>
        </a>

        <div className="project-info-section">
          <h1 className="project-name">{props.cardName}</h1>
          <p className="project-info">{props.info}</p>
        </div>
      </div>
    </>
  );
};
