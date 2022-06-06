import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import bluebackground from "../../images/bookstoreblue.jpeg";
import bluebackground2 from "../../images/bookstoreblue2.jpeg";
import brownbackground from "../../images/bookstorebrown.jpeg";
import orangebackground from "../../images/bookstoreorange.jpeg";
import purplebackground from "../../images/bookstorepurple.jpeg";
import redbackground from "../../images/bookstorered.jpeg";
import whitebackground from "../../images/bookstorewhite.jpeg";
import yellowbackground from "../../images/bookstoreyellow.jpeg";
import graybackground from "../../images/bookstoregray.jpeg";

const BACKGROUNDS = [
    bluebackground,
    bluebackground2,
    brownbackground,
    orangebackground,
    purplebackground,
    redbackground,
    whitebackground,
    yellowbackground,
    graybackground,
];


const TEXTS = [
    "All",
    "Happy",
    "Sad",
    "Delicate",
    "Cool",
];

const Landing = ({ user, history }) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          2 * 1000 // every 2 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="background h-100"
            style={{ backgroundImage: `url(${BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)]})` }}
        >
            <div className="overlay pb-10">
                <h1>
                    Read
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                        inline
                        style={{ margin: "0 .5rem" }}
                    />
                    Stories
                </h1>

                <p>
                    Felt pen is the first dynamic story generator that allows users to interactively create stories based on their emotions and reactions. Here, reading serves as an act of reflection on your inner world, as an act of therapy to work through your emotions, and as an act of creativity to express your emotions.
                </p>
            </div>
        </div>
    );
};

export default Landing;
