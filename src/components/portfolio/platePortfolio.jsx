import React from "react";
import "./platePortfolio.css"
import { useState,useEffect } from "react";


const PlatePortfolio = (props) => {
    const [sharedStatePortfolio, setSharedStatePortfolio] = useState(false);

    const toggleuseSharedStatePortfolio = () => {
        setSharedStatePortfolio(!sharedStatePortfolio);
    };
    
    

    return(
        <div>
            <div className="platePortfolio" onClick={toggleuseSharedStatePortfolio}>
                <img src={props.photo} />
                <h1>{props.title}</h1>
                <h2>{props.english}</h2>
            </div> 
            {sharedStatePortfolio && (
            <div className="overLay">
                <div className="portfolioPopUpContents">
                    {/* ポップアップの中身 */}
                    <h1>{props.title} </h1>
                    <button onClick={toggleuseSharedStatePortfolio}>✕</button>
                    <h3>詳細</h3>
                    <p>{props.content}</p>
                    <img src={props.photo} />
                    
                </div>
            </div>
            )}
        </div>
        )
    }
export default PlatePortfolio;