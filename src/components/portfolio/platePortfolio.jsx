import React from "react";
import "./platePortfolio.css"
import { useState,useEffect } from "react";
import { TiDelete } from "react-icons/ti";


const PlatePortfolio = (props) => {
    const [sharedStatePortfolio, setSharedStatePortfolio] = useState(false);

    const toggleuseSharedStatePortfolio = () => {
        setSharedStatePortfolio(!sharedStatePortfolio);
    };
    
    

    return(
        <div>
            <div className="platePortfolio" onClick={toggleuseSharedStatePortfolio}>
                <img src={props.photo1} />
                <h1>{props.title}</h1>
                <h2>{props.english}</h2>
            </div> 
            {sharedStatePortfolio && (
            <div className="overLay">
                <div className="portfolioPopUpContents">
                    {/* ポップアップの中身 */}
                    <h1>{props.title} </h1>
                    <button onClick={toggleuseSharedStatePortfolio}><TiDelete /></button>
                    <h3>詳細</h3>
                    <p>{props.children}</p>
                    <img src={props.photo2} />
                    
                </div>
            </div>
            )}
        </div>
        )
    }
export default PlatePortfolio;