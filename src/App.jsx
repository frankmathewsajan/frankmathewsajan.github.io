import './App.css';
import Dock from "./components/Dock";
import BlurText from "./components/BlurText.jsx";
import {VscHome, VscProject, VscNotebook, VscMail} from "react-icons/vsc";
import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import profileImage from "./assets/frank.jpg";
import DecryptedText from "./components/DecryptedText.jsx"; // make sure your image is imported

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
    const [blurredText, setBlurredText] = useState("¡Hola, soy Frank!");
    const [showDecryptedText, setShowDecryptedText] = useState(false);

    const handleAnimationComplete = () => {
        setTimeout(() => {
            setBlurredText("Hi! I'm Frank!");
            setTimeout(() => {
                setShowMainContent(true);
            }, 1500)
        }, 1000);
    };

    // When main content is triggered, show the image first then the dock.
    useEffect(() => {
        if (showMainContent) {
            // Show image immediately
            setShowImage(true);
            // Move image

            // After a delay, show the dock
            setTimeout(() => {
                setShowDock(true);
                // Adjust delay as needed
                setTimeout(() => {
                    setMoveImage(true);
                    setShowDecryptedText(true)
                }, 200);

            }, 1000);


        }
    }, [showMainContent]);

    return (
        <>

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
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                        className="w-full h-screen flex flex-col items-center justify-center"
                    >
                        {showDecryptedText && (
                            <motion.div
                                style={{position: 'absolute', top: 60, left: 100, marginTop: '4rem'}}
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

                        {showImage && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1, x: moveImage ? 450 : 0, y: moveImage ? 10 : 0}}
                                transition={{duration: 1}}
                                className="mb-4"
                            >
                                <img src={profileImage} alt="Profile" className="w-100 rounded-xl"/>
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
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default App;