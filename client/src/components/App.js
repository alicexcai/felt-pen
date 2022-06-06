import React, { useState, useEffect, useCallback, useRef } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { get, post, xor } from "../utilities";
import Webcam from "react-webcam";
import $ from 'jquery'; 

import NotFound from "./pages/NotFound.js";
import Home from "./pages/Home.js";
import Story from "./pages/Story";

import 'antd-notifications-messages/lib/styles/index.css';

const history = createBrowserHistory();

/**
 * Define the "App" component
 */
const App = () => {
  const webcamRef = useRef(null);

  const [imgSrc, setImgSrc] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [emotion, setEmotion] = useState(null);

  const [inputs, setInputs] = useState({
    genre: "",
    topic: "",
    length: "",
    emotion: "",
  })

  useEffect(() => {
    // authentication
    handleAuth();
    const savedInputs = localStorage.getItem("inputs");
    if (savedInputs) {
      setInputs(JSON.parse(savedInputs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  useEffect(() => {
    localStorage.setItem("emotion", JSON.stringify(emotion));
  }, [emotion]);

  useEffect(() => {
    localStorage.setItem("imgSrc", imgSrc);
  }, [imgSrc]);

  const handleAuth = async () => {
    try {
      get("/api/whoami").then((user) => {
        if (user._id) {
          // they are registed in the database, and currently logged in.
          setCurrentUser(user);
          console.log(user);
        }

        setLoading(false);
      });
    } catch (err) {
      console.error(err);
    }
  }

  function returnImgSrc() {
    return takeScreenshot();
  }

  // function returnEmotion(image_url) {
  //   return detectFace(image_url);
  // }

  const takeScreenshot = useCallback(() => {

    const imageSrc = webcamRef.current.getScreenshot({width: 1920, height: 1080});
    setImgSrc(imageSrc);
    return imageSrc;
    // setImgSrc(imageSrc);
    // console.log("INSIDE TAKE SS, IMG SRC: ", imgSrc);

  }, [webcamRef, setImgSrc]);

  // function takeScreenshot() {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImgSrc(imageSrc);
  //   console.log("INSIDE TAKE SS, IMG SRC: ", imgSrc);
  //   // return imageSrc;
  // }


  const handleLogin = async (userId) => {
    try {
      const user = await post("/api/login", { id: userId });
      handleAfterLogin(user);
      console.log(`Logged in as ${userId}`);
  } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  const handleAfterLogin = (user) => {
    setCurrentUser(user);
  }
  
  // function detect_face(image_url) {
  //   console.log("detect_face called");
  //   $.ajax({
  //       url: "https://tri.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&detectionModel=detection_01",
  //       beforeSend: function(xhrObj){
  //           // Request headers
  //           xhrObj.setRequestHeader("Content-Type","application/json");
  //           xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","59fe350c8499445ba8662e2337e986a1");
  //       },
  //       type: "POST",
  //       // Request body
  //       data: JSON.stringify({url: image_url}),
  //   })
  //   .done(function(response) {
        // console.log("EMOTION", response[0].faceAttributes.emotion);
        // return (response[0].faceAttributes.emotion);
  //   })
  //   .fail(function() {
  //       alert("error");
  //   });
  // }   

  let emotionLookup = new Map();
  emotionLookup.set("happiness", "happy");
  emotionLookup.set("sadness", "sad");
  emotionLookup.set("neutral", "sad");
  emotionLookup.set("anger", "angry");
  emotionLookup.set("surprised", "surprising");
  emotionLookup.set("disgust", "disgusting");
  emotionLookup.set("contempt", "angry");
  emotionLookup.set("fear", "scary");

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
          
          setEmotion(emotionLookup.get(emotion));
          console.log("EMOTION", emotion);
          return emotion;
          // $("#results").text(JSON.stringify(image_url));
          // console.log($("#results").text(JSON.stringify(image_url)));

        })
        .fail(function(err) {
          $("#results").text(JSON.stringify(err));
          console.log("ERROR");
        })
      })
    }

  return (
    <Router history={history}>
      {loading ? "Loading..." : 
        <>
          <Switch>
            <Route path="/" exact>
              <Home currentUser={currentUser} 
                inputs={inputs}
                setInputs={setInputs}
                // takeScreenshot={takeScreenshot}
                returnImgSrc={returnImgSrc}
                // returnEmotion={returnEmotion}
                detectFace={detectFace}
                // imgSrc={imgSrc}
                history={history}
              />
            </Route>

            <Route path="/story" exact>
              <Story currentUser={currentUser} 
                inputs={inputs}
                setInputs={setInputs}
                // takeScreenshot={takeScreenshot}
                returnImgSrc={returnImgSrc}
                // returnEmotion={returnEmotion}
                // detectFace={detectFace}
                // emotion={emotion}

                history={history}
                initialImgSrc={imgSrc}
                // returnEmotion={returnEmotion}
                initialEmotion={emotion}
                emotionLookup={emotionLookup}
              />
            </Route>

            <Route default>
              <NotFound />
            </Route>

          </Switch>

          {inputs.emotion === "custom" && 
              <Webcam 
                  className="webcam" 
                  mirrored
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
              />
          }
        </>
      }
    </Router>
  );
};

export default App;
