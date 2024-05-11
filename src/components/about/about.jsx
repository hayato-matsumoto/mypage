import React from "react";
import "./about.css"
import about1 from "../../images/about1.jpg"

const About = () => {
    return(
        <div className="profile">
            <h1>HAYATO MATSUMOTO</h1>
            <h2>松本　隼人</h2>
            <p>2000年5月1日生まれ。兵庫県神戸市で生まれ育ちました。</p>
            <p>所属:大阪公立大学院　社会情報学研究科所属</p>
            <p>経歴:兵庫県立兵庫高等学校卒業、大阪府立大学卒業</p>
            <img src={about1} alt=""/>
        </div>
    )
}
export default About;