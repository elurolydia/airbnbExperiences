import React from "react";
import star from "./images/star.png";


export default function Item (props) {
    return (
        <div id="itemsContainer">
            <img id="itemImage" src={props.image} />
            <p id="ratingContainer">
                <img id="starImage" src={star} />
                <span id="rating">{props.rating} <span id="country">({props.ratingNumber}).{props.country}</span></span>
            </p>
            <p id="itemTitle">{props.title}</p>
            <p id="itemPrice">From {props.price} <span id="perPerson">/ person</span></p>
        </div>
    )
}