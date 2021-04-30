import React from 'react';
import { useHistory } from "react-router-dom";
import Colorado from "../../images/Colorado.jpeg";
import Georgia from "../../images/Georgia.jpeg";
import NorthC from "../../images/NorthC.jpeg";
import "./hostingComponent.css";

function AccommodationsComponent() {
    const history = useHistory();

    const handleSearch = (e) => {
        history.push(`/accommodations/${e.target.id}`);
    };

    return (
        <>
            <span className="states-card">
                <div className="states">
                    <img className="states-img" src={Colorado} alt="" />
                </div>
                <div className="states-info-card">
                    <div className="states-phrase">
                        <h2 className="title">Search By Silence</h2>
                    </div>
                    <div className="states-expo">
                        <h2 className="states-title" onClick={handleSearch} id="1">Explore</h2>
                    </div>
                </div>
            </span>
            <span className="states-card">
                <div className="states">
                    <img className="states-img" src={Georgia} alt="" />
                </div>
                <div className="states-info-card">
                    <div className="states-phrase">
                        <h2 className="title">Search For Best Spots in Georgia</h2>
                    </div>
                    <div className="states-expo">
                        <h2 className="states-title" onClick={handleSearch} id="2">Explore</h2>
                    </div>
                </div>
            </span>
            <div className="states-card">
                <div className="states">
                    <img className="states-img" src={NorthC} alt="" />
                </div>
                <div className="states-info-card">
                    <div className="states-phrase">
                        <h2 className="title">Search For Best Spots in North Carolina</h2>
                    </div>
                    <div className="states-expo" >
                        <h2 className="states-title" onClick={handleSearch} id="3">Explore</h2>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AccommodationsComponent;
