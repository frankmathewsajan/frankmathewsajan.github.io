import './App.css';
import BlurText from "./components/BlurText.jsx";
import {useState, useEffect} from "react";
import MainContent from "./MainContent.jsx";


const App = () => {
    const [showMainContent, setShowMainContent] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [blurredText, setBlurredText] = useState("¡Hola, soy Frank!");
    const [showLeftSide, setShowLeftSide] = useState(false);

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
            setShowImage(true);
            setTimeout(() => {
                setTimeout(() => {
                    setShowLeftSide(true)
                }, 200);
            }, 1000);


        }
    }, [showMainContent]);

    return (<>

        <div className="flex items-center justify-center h-screen w-full bg-[#f4f1e8] text-white">

            {!showMainContent ?
                <Loading blurredText={blurredText} handleAnimationComplete={handleAnimationComplete}/> :
                <MainContent showImage={showImage} showLeftSide={showLeftSide}/>
            }
        </div>
    </>);
};

const Loading = ({blurredText, handleAnimationComplete}) => {
    return (
        <>
            <BlurText
                text={blurredText}
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="the-head"
                highlightWords={{'Frank!': '#9b4819', 'soy': '#9b4819', "I'm": '#9b4819'}}
            />)
        </>
    )
}

export default App;