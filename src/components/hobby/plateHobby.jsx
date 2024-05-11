import React from "react";
import "./plateHobby.css"
import { useState,useEffect } from "react";


const PlateHobby = (props) => {
    const [sharedStateHobby, setSharedStateHobby] = useState(false);

    const toggleuseSharedStateHobby = () => {
        setSharedStateHobby(!sharedStateHobby);
    };
    
    

    return(
        <div>
            <div className="plateHobby" onClick={toggleuseSharedStateHobby}>
                <img src={props.photo1} />
                <h1>{props.title}</h1>
                <h2>{props.english}</h2>
            </div> 
            {sharedStateHobby && (
            <div className="overLay">
                <div className="hobbyPopUpContents">
                    {/* ポップアップの中身 */}
                    <h1>{props.title} </h1>
                    <button onClick={toggleuseSharedStateHobby}>✕</button>
                    <h3>詳細</h3>
                    <p>{props.children}</p>
                    <img src={props.photo2} />
                    
                </div>
            </div>
            )}
        </div>
        )
    }
export default PlateHobby;