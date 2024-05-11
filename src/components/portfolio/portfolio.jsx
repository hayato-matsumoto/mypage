import React from "react";
import "./portfolio.css"
import PlatePortfolio from "./platePortfolio";
import nba1 from "../../images/nba.jpg"

const Portfolio = () => {
    return(
        <div>
        <h1 className="title">PORTFOLIO</h1>
        <ul className="portfolioList">
           <li><PlatePortfolio photo={nba1} title='バスケットバール' english='BASKET BALL' content='aaaaa'/></li>
           <li><PlatePortfolio title='NBA観戦' english ='NBA WATCHING' /></li>
           <li><PlatePortfolio title='読書' english='READING' /></li>
        </ul>
        </div>
    )
}
export default Portfolio;