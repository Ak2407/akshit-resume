import "../styles/Social.css";
export const Social = (props) => {
  
  return (
    <a className="social-container" href={props.destination} target="_blank">
        <a className="social-name" >{props.name} </a>
    </a>
  );
};


