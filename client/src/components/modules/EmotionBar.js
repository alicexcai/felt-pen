import React, { useEffect, useState } from "react";

const emotions = ["happy", "sad", "angry", "disgusting", "surprising", "scary", "custom"];

const EmotionBar = ({ handleChange }) => {

    const renderOption = (option) => {
        if (option === "surprising") {
            return "surprise"
        }
        else if (option === "disgusting") {
            return "disgust";
        }
        else if (option === "scary") {
            return "fear";
        }
        return option;
    }

    return (
        <div className="radio-wrapper px-5 mx-5">
            {["😀", "😢", "😡", "🤢", "😲", "😱", "📷"].map((option, i) => {
                return (<div className="radio-container" key={i}>
                    <input id={emotions[i]} type="radio" name="emotion" value={emotions[i]} onChange={handleChange} />
                    <label htmlFor={emotions[i]} key={i}>{option}</label>
                    <small className="mt-3 text-muted">{renderOption(emotions[i])}</small>
                </div>);
            })}
        </div>
    );
};

export default EmotionBar;
