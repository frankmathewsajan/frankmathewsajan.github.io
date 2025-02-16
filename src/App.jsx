import React from 'react';
import Squares from './components/Squares';
import DecryptedText from './components/DecryptedText';
import './App.css';

function App() {
    // Define each line of description as an element in the array
    const descriptionLines = [
        "I'm a passionate developer.",
        "I create beautiful web applications.",
        "I love coding and solving problems.",
        "I strive for excellence every day."
    ];

    return (
        <div className="app-container">
            <Squares
                speed={0.1}
                squareSize={20}
                direction="diagonal" // options: up, down, left, right, diagonal
                borderColor="#222222"
                hoverFillColor="#222"
            />

            <div className="description-card">
                {descriptionLines.map((line, index) => (
                    <>
                        <DecryptedText
                            key={index}
                            text={line}
                            speed={200}
                            maxIterations={20}
                            animateOn="view"
                            revealDirection="center"
                        /><br/></>
                ))}
            </div>
        </div>
    );
}

export default App;
