import "../styles/About.css"
import avatar from  "../assets/images/avatar.png"
import { Social } from "../components/Social"
export default function About(){
    return(
        <>
        <div className="about-container" id="contact">
            <div className="about-heading-container">
                <h1 className="about-heading">LET'S CONNECT</h1>
            </div>

            <div className="about-info-container">
                <img className="about-img" src={avatar}></img>

                <div className="about-socials">
                {/* destination, name */}
                <Social name="GITHUB" destination="https://github.com/Ak2407"/>
                <Social name="LEETCODE" destination="https://leetcode.com/user2457N/"/>
                <Social name="TWITTER" destination="https://twitter.com/Aksh2407"/>
                <Social name="MAIL" destination="mailto:akshu.24gupta@gmail.com"/>
                <Social name="LINKEDIN" destination="https://www.linkedin.com/in/akshit-gupta-907082203/"/>
                </div>

                
            </div>
        </div>
        </>
    )
}