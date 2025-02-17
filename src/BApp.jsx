import './App.css';
import Dock from "./components/Dock";
import Ribbons from './components/Ribbons';
import BlurText from "./components/BlurText.jsx";
import DecryptedText from "./components/DecryptedText"; // ensure the path is correct
import TrueFocus from './TrueFocus'; // ensure the path is correct
import {VscHome, VscProject, VscNotebook, VscMail} from "react-icons/vsc";
import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import profileImage from "./assets/frank.jpg"; // make sure your image is imported

const items = [
    {icon: <VscHome size={18}/>, label: 'Home', onClick: () => alert('Home!')},
    {icon: <VscProject size={18}/>, label: 'Projects', onClick: () => alert('Projects!')},
    {icon: <VscNotebook size={18}/>, label: 'Blog', onClick: () => alert('Blog!')},
    {icon: <VscMail size={18}/>, label: 'Contact', onClick: () => alert('Contact!')},
];

const App = () => {
    const [showMainContent, setShowMainContent] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [moveImage, setMoveImage] = useState(false);
    const [showDock, setShowDock] = useState(false);
    const [showDecryptedText, setShowDecryptedText] = useState(false);
    const [showTrueFocus, setShowTrueFocus] = useState(false);
    const [blurredText, setBlurredText] = useState("¡Hola, soy Frank!");

    // After the BlurText animation, update text and trigger main content
    const handleAnimationComplete = () => {
        setTimeout(() => {
            setBlurredText("Hi! I'm Frank!");
            setTimeout(() => {
                setShowMainContent(true);
            }, 1500);
        }, 1000);
    };

    // When main content is triggered, start the sequential animations
    useEffect(() => {
        if (showMainContent) {
            // Show image immediately
            setShowImage(true);
            // After 100ms, trigger the image to move right
            setTimeout(() => {
                setMoveImage(true);
            }, 100);
            // After 500ms, show the DecryptedText overlay at top left
            setTimeout(() => {
                setShowDecryptedText(true);
            }, 500);
            // After 1000ms, show TrueFocus (bottom left) and the Dock
            setTimeout(() => {
                setShowTrueFocus(true);
                setShowDock(true);
            }, 1000);
        }
    }, [showMainContent]);

    return (
        <div className="flex items-center justify-center h-screen w-full bg-black text-white">
            {!showMainContent ? (
                <BlurText
                    text={blurredText}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="the-head"
                />
            ) : (
                // Main content container uses relative positioning for overlays
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="w-full h-screen relative"
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        {showImage && (
                            <motion.div
                                initial={{opacity: 0, x: 0}}
                                animate={{
                                    opacity: 1,
                                    x: moveImage ? 200 : 0
                                }} // moves 200px to the right when moveImage is true
                                transition={{duration: 1}}
                                className="mb-4"
                            >
                                <img src={profileImage} alt="Profile" className="w-100"/>
                            </motion.div>
                        )}
                        {showDock && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.8}}
                            >
                                <Dock
                                    items={items}
                                    panelHeight={68}
                                    baseItemSize={50}
                                    magnification={70}
                                />
                            </motion.div>
                        )}
                    </div>
                    {showDecryptedText && (
                        <motion.div
                            style={{position: 'absolute', top: 0, left: 0, marginTop: '4rem'}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8}}
                        >
                            <DecryptedText
                                text="This text animates when in view"
                                animateOn="view"
                                revealDirection="center"
                            />
                        </motion.div>
                    )}
                    {showTrueFocus && (
                        <motion.div
                            style={{position: 'absolute', bottom: 0, left: 0}}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8}}
                        >
                            <TrueFocus
                                sentence="True Focus"
                                manualMode={false}
                                blurAmount={5}
                                borderColor="red"
                                animationDuration={2}
                                pauseBetweenAnimations={1}
                            />
                        </motion.div>
                    )}
                </motion.div>
            )}
        </div>
    );
};


export default App;
