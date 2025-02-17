import {motion} from "framer-motion";
import profileImage from "./assets/mathew.webp";
import 'https://kit.fontawesome.com/35c881c056.js';

const LeftSide = () => {
    return (
        <div className="the-left" style={{fontFamily: "Agrandir",display: "flex", flexDirection: "column", justifyContent: "space-between !important"}} >
            <div>
                <h1 style={{fontSize: "60px", fontWeight: "bold"}}>
                    Frank Mathew
                </h1>
                <p style={{fontSize: "40px", fontWeight: "normal"}}>
                    Software engineer with grip on app and web development, control engineering and robotics.
                </p>
            </div>

            <div>
                <p style={{marginTop: "5pc",fontSize:"1.5rem"}}>@frankmathewsajan</p>
                <div style={{display: "flex", gap: "2rem", fontSize: "30px"}}>
                    <a
                        href="https://www.linkedin.com/in/frankmathewsajan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="https://discord.com/users/frankmathewsajan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-discord"></i>
                    </a>
                    <a href="mailto:frankmathewsajan@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a
                        href="https://github.com/frankmathewsajan"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

const MainContent = ({showLeftSide, showImage}) => {
    return (
        <>

            <motion.div
                className="fixed inset-0 border-2 border-black"
            >
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="w-full h-full flex flex-col items-center justify-center"
                >
                    {showLeftSide && (<LeftSide/>)}


                    {showImage && (<motion.div
                        initial={{opacity: 0, x: 350}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className="mb-4"
                    >
                        <img src={profileImage} alt="Profile" className="w-110 rounded-xl"/>
                    </motion.div>)}


                </motion.div>
            </motion.div>


        </>
    )
}

export default MainContent;