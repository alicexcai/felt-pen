import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from 'react-bootstrap';
import Landing from "../modules/Landing";
import CreatableSelect from 'react-select/creatable';
import { Link } from "react-router-dom";
import EmotionBar from "../modules/EmotionBar";
import Webcam from "react-webcam";


const genreOptions = [
    { value: 'adventure', label: 'Adventure' },
    { value: 'scifi', label: 'Science Fiction' },
    { value: 'romance', label: 'Romance' },
    { value: 'horror', label: 'Horror' },
    { value: 'mystery', label: 'Mystery' },
]


const Home = ({ inputs, setInputs, returnImgSrc, detectFace, history }) => {

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }

    const handleGenreChange = (change) => {
        console.log(change);
        setInputs({
            ...inputs,
            "genre": change.value,
        });
    }

    function startStory() {
        history.push("/story");
    }

    function handleSubmit() {
        if (inputs.emotion === "custom") {
            console.log("TAKING SS")
            const imgSrc = returnImgSrc();
            console.log("INSIDE HOME, IMG SRC: ", imgSrc);
            const emotion = detectFace(imgSrc);
            // console.log("INSIDE HOME, EMOTION: ", emotion);
            setTimeout(startStory, 2000);
            // const emotion = await detectFace(imgSrc)
            // .then(console.log("INSIDE HOME, EMOTION: ", emotion))
            // .then(setTimeout(history.push("/story"),));
            // setEmotion(imgSrc);
            // setEmotion(detect_face(imgSrc));
            // setInputs({
            //     ...inputs,
            //     ['emotion']: detect_face(imgSrc),
            // });
        }
        else {
            history.push("/story");
        }
    }
    
    const handleMedia = (stream) => {
        console.log(stream);
    }

    return (
        <>
            {inputs.emotion === "custom" && 
                <Webcam 
                    className="webcam" 
                    mirrored
                    onUserMedia={handleMedia}
                />
            }

        <Row className="full-height">
            <Col xs={12} md={6}>
                <Landing />
            </Col>
            <Col xs={12} md={6}>
                <div className="py-5 ps-4 pe-5 ms-4 me-5">
                    <div className="mb-4">
                        <h4>
                        What genre would you like to read?
                        </h4>
                        <CreatableSelect
                            isClearable
                            onChange={handleGenreChange}
                            options={genreOptions}
                        />
                    </div>

                    <div className="mb-4">
                        <h4>
                        What do you want the story to be about?
                        </h4>
                        <Form.Control type="text" name="topic" placeholder="a prince fought a dragon" onChange={handleChange} />
                    </div>

                    <div className="mb-4">
                        <h4>
                        How long do you want the story to be?
                        </h4>
                        <p>One scene is about 2 sentences long.</p>
                        <div className="radio-wrapper">
                            {["1-5 scenes", "6-10 scenes"].map((option, i) => {
                                const id = `option${option.split(" ")[0]}`
                                return (<div key={i}>
                                    <input id={id} type="radio" name="length" value={option} onChange={handleChange} />
                                    <Button htmlFor={id} as="label" variant="outline-primary" key={i}>{option}</Button>
                                </div>);
                            })}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4>
                        How do you feel right now?
                        </h4>
                        <p>Tell us about your emotions</p>

                        <EmotionBar handleChange={handleChange} />
                        
                    </div>

                    <Button onClick={handleSubmit}>📖 Start Reading </Button>
                </div>
            </Col>
        </Row>
        </>
    );
};

export default Home;
