import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Webcam from "react-webcam";
import EmotionBar from "../modules/EmotionBar";
import loadingImage from "../../images/loading.gif";
import $ from 'jquery'; 

// import S3 from 'react-aws-s3';


const Story = ({ inputs, returnImgSrc, initialImgSrc, initialEmotion, emotionLookup, setInputs }) => {
    
    // const config = {
    //     bucketName: 'tri-hackathon',
    //     dirName: 'faces', /* optional */
    //     region: 'us-east-2',
    //     accessKeyId: 'AKIA4HUARN52S6RT2DCI',
    //     secretAccessKey: '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',
    // }
    
    // const ReactS3Client = new S3(config);
    // ReactS3Client
    // .uploadFile(file, newFileName)
    // .then(data => console.log(data))
    // .catch(err => console.error(err))
    
    // require('dotenv').config()
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    // const [promptText, setPromptText] = useState("")
    const [stories, setStories] = useState("");
    // const [story, setStory] = useState(inputs?.topic)
    const [previousPrompt, setPreviousPrompt] = useState("");
    const [imgSrc, setImgSrc] = useState(initialImgSrc);
    const [emotion, setEmotion] = useState(initialEmotion);

    useEffect(() => {
        // setStories([inputs?.topic]);
        generateStory(emotion);
    }, []);

    // useEffect(() => {
    //     console.log("INPUTS", inputs);
    // }, [inputs]);

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }
    
    const handleMedia = (stream) => {
        console.log(stream);
    }

    function continueStory(newEmotion) {
        if (stories.length <= index + 1) {
            // console.log("STORIES", stories);
            // console.log("INSIDE STORY, EMOTION: ", emotion);
            setLoading(true);
            generateStory(newEmotion);
        }
        setIndex(index + 1);
    }

    function detectFace(image_url) {
        console.log("detectFace called");
    
        fetch(image_url)
        .then(res => res.blob())
        .then(blobData => {
          $.post({
              url: "https://tri.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&detectionModel=detection_01",
              contentType: "application/octet-stream",
              headers: {
                'Ocp-Apim-Subscription-Key': '59fe350c8499445ba8662e2337e986a1'
              },
              processData: false,
              data: blobData
            })
            .done(function(response) {
              const emotionDict = response[0].faceAttributes.emotion;
              console.log("EMOTION DICT", emotionDict);
              const emotion = Object.keys(emotionDict).reduce((a, b) => emotionDict[a] > emotionDict[b] ? a : b);
              // console.log("EMOTION", emotion);
              const newEmotion = emotionLookup.get(emotion);
              setEmotion(newEmotion);
              console.log("EMOTION", newEmotion);
              console.log("TIMING OUT BEFORE CONTINUESTORY...");
              continueStory(newEmotion);  
            //   setTimeout(continueStory, 2000);
            //   return emotion;
              // $("#results").text(JSON.stringify(image_url));
              // console.log($("#results").text(JSON.stringify(image_url)));
    
            })
            .fail(function(err) {
              $("#results").text(JSON.stringify(err));
              console.log("ERROR");
            })
            // .then(setTimeout(continueStory, 2000));
          })
        }

    const showNext = () => {

        // if (inputs.emotion === "custom") {
        //     console.log("TAKING SS")
        //     takeScreenshot();
        //     console.log("IMGSRC", imgSrc);
        // }

        if (inputs.emotion == "custom") {
            console.log("TAKING SS")
            setImgSrc(returnImgSrc());
            console.log("INSIDE STORY, IMG SRC: ", returnImgSrc());
            // setEmotion(detectFace(returnImgSrc()));
            // detectFace(returnImgSrc());
            detectFace(returnImgSrc());
            // console.log("INSIDE STORY, EMOTION: ", emotion);

            // setInputs({
            //     ...inputs,
            //     ['emotion']: detect_face(imgSrc),
            // });
        }

        else {
            continueStory(inputs.emotion);
        }

        console.log("INPUTS", inputs);



    }

    function generateStory(newEmotion) {
        const apiKey = "";
        const OpenAI = require('openai-api');
        const openai = new OpenAI(apiKey);
        let promptText = "";
        console.log("stories.length", stories.length);
        console.log("EMOTION INSIDE GENERATESTORY", newEmotion);

        if (inputs.length === "1-5 scenes") {
            const initialPromptText = `Write a therapeutic story about a boy and his pet bird.
    
            Chapter 1: A happy beginning
            There once was a boy who loved birds. One day, he was playing in the forest and noticed a beautiful blue bird perched atop a tree. He ran over to the bird and asked if he could pet him. The bird chirped in response and allowed the boy to stroke his feathers. The boy was so happy that he had found a new friend.
            
            Chapter 2: A sad turn of events
            One day, when the boy went to visit the bird, he found that the bird had been captured by a mean hunter. The hunter was planning to sell the bird to the highest bidder. The boy was heartbroken and didn't know what to do.
            
            Chapter 3: A surprising turn of events
            Just then, the hunter's dog started barking and running towards the boy. The hunter was so distracted that he dropped the bird's cage. The bird flew out and perched on the boy's shoulder.
            
            Chapter 4: A scary turn of events
            The hunter was so angry that he started chasing the boy and the bird. The boy was terrified and didn't know what to do as the hunter got closer and closer.
            
            Chapter 5: A happy ending
            Suddenly, the bird started singing a beautiful song. The hunter stopped in his tracks and just stared at the bird. The boy took the opportunity to run away. The bird flew after him and they were both safe. The boy was so happy to have his feathered friend back. The two friends lived happily ever after...
            
            ###

            Write a ${inputs.genre} story about ${inputs.topic}.
            
            Chapter 1: A ${newEmotion} beginning`;
            if (stories.length === 0) {
                promptText = initialPromptText;
            }
            else if (stories.length === 4) {
                promptText = previousPrompt + "\n" + stories[stories.length - 1].trim() + "\n\nChapter" + (stories.length + 1) + ": A " + newEmotion + " ending";
            }
            else {
                promptText = previousPrompt + "\n" + stories[stories.length - 1].trim() + "\n\nChapter" + (stories.length + 1) + ": A " + newEmotion + " turn of events";
            }
        }
    
        else {
            const initialPromptText = `Write a therapeutic story about a boy and his pet bird.
    
            Chapter 1: A happy beginning
            There once was a boy who loved birds. One day, he was playing in the forest and noticed a beautiful blue bird perched atop a tree. He ran over to the bird and asked if he could pet him. The bird chirped in response and allowed the boy to stroke his feathers. The boy was so happy that he had found a new friend.
            
            Chapter 2: A sad turn of events
            One day, when the boy went to visit the bird, he found that the bird had been captured by a mean hunter. The hunter was planning to sell the bird to the highest bidder. The boy was heartbroken and didn't know what to do.
            
            Chapter 3: A surprising turn of events
            Just then, the hunter's dog started barking and running towards the boy. The hunter was so distracted that he dropped the bird's cage. The bird flew out and perched on the boy's shoulder.
            
            Chapter 4: A scary turn of events
            The hunter was so angry that he started chasing the boy and the bird. The boy was terrified and didn't know what to do as the hunter got closer and closer.
            
            Chapter 5: A disgusting turn of events
            Suddenly, the hunter slipped on a pile of bird poop and fell to the ground. The boy and the bird flew away to safety.
            
            Chapter 6: An angry turn of events
            The hunter was so angry that he vowed to get revenge on the boy and the bird. He started stalking them and making plans to hurt them.
            
            Chapter 7: A sad turn of events
            One day, when the boy and the bird were out playing, the hunter ambushed them. He shot the bird with a pellet gun and the bird fell to the ground. The boy was so sad and angry that he picked up a rock and threw it at the hunter, hitting him in the head.
            
            Chapter 8: A surprising turn of events
            As the hunter lay on the ground, bleeding from the head, the boy suddenly felt sorry for him. He realized that the hunter was just a sad, lonely man who was looking for companionship. The bird flew over and landed on the hunter's shoulder, and started to sing a sweet healing song.
            
            Chapter 9: A happy turn of events
            The hunter was so touched by the bird's song that he decided to release all the birds he had captured. He also gave the boy a job to help him take care of the birds. 
            
            Chapter 10: A happy ending
            The boy and the hunter spent their days together caring for the birds, and they became good friends. The boy and the hunter were able to create a safe haven for all birds, and they lived happily ever after.
            
            ###

            Write a ${inputs.genre} story about ${inputs.topic}.
            
            Chapter 1: A ${newEmotion} beginning`;

            if (stories.length === 0) {
                promptText = initialPromptText;
            }
            else if (stories.length === 9) {
                promptText = previousPrompt + "\n" + stories[stories.length - 1].trim() + "\n\nChapter" + (stories.length + 1) + ": A " + newEmotion + " ending";
            }
            else {
                promptText = previousPrompt + "\n" + stories[stories.length - 1].trim() + "\n\nChapter" + (stories.length + 1) + ": A " + newEmotion + " turn of events";
            }
        }

        // setPromptText(initialPromptText);

        console.log('generateStory called');
        console.log("promptText", promptText);

        setPreviousPrompt(promptText);

        (async () => {
            const gptResponse = await openai.complete({
                engine: 'davinci',
                prompt: promptText,
                maxTokens: 150,
                temperature: 0.7,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0,
                bestOf: 1,
                n: 1,
                stream: false,
                stop: ['\n\n', '###', 'Chapter']
            });

            const newStories = [...stories,
                gptResponse.data.choices[0].text.trim()
            ];
            setStories(newStories);
            setLoading(false);
        })();

    };


    return (
        <>
            {inputs.emotion === "custom" && 
                <Webcam 
                    className="webcam" 
                    mirrored
                    onUserMedia={handleMedia}
                />
            }

            <div className="story-wrapper py-5">
                <div className="story mb-4 mx-5">
                    {stories[index]}
                    {loading && <img src={loadingImage} />}
                </div>

                <EmotionBar handleChange={handleChange} />

                <div className="mt-5">
                    <Button className="me-3">Previous</Button>
                    <Button onClick={showNext}>Next</Button>
                </div>
            </div>
            {inputs.emotion === "custom" && <div>
            <img src={imgSrc} className="screenshot"/>
            <p className="emotion">Your emotion: {emotion}</p>
            </div>
            }
            {/* {imgSrc} */}
            {/* <img src={imgSrc} /> */}

            
        </>
    );
};

export default Story;
