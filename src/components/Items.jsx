import React from "react";
import image1 from "./images/image1.png";
import star from "./images/star.png";


export default function Item () {
    return (
        <div id="itemsContainer">
            <img id="itemImage" src={image1} />
            <p id="ratingContainer">
                <img id="starImage" src={star} />
                <span id="rating">5.0 <span id="country">(6).USA</span></span>
            </p>
            <p id="itemTitle">Life lessons with Katie Zaferes</p>
            <p id="itemPrice">From $136 <span id="perPerson">/ person</span></p>
        </div>
    )
}