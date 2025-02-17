import {motion} from "framer-motion";
import profileImage from "./assets/mathew.webp";
import 'https://kit.fontawesome.com/35c881c056.js';
import Navbar from "./components/Navbar.jsx";

const LeftSide = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            left: "10%",
            top: "25%",
            width: "45vw",
            color: "#060606",
            fontFamily: "'Agrandir', sans-serif",
        }}>
            <div>
                <motion.h1
                    style={{fontSize: "55px", fontWeight: "bold"}}
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut", staggerChildren: 0.1}}
                >
                    {Array.from("Frank Mathew").map((letter, index) => (
                        <motion.span key={index} initial={{opacity: 0}} animate={{opacity: 1}}
                                     transition={{delay: index * 0.05}}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p style={{fontSize: "30px", fontWeight: "normal"}}
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{duration: 1, ease: "easeOut"}}>
                    Software engineer with grip on app and web development, control engineering and robotics.
                </motion.p>
            </div>

            <div>
                <motion.p style={{marginTop: "5pc", fontSize: "1.3rem"}}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{duration: 1.2, ease: "easeOut"}}>@frankmathewsajan
                </motion.p>
                <div style={{display: "flex", gap: "1.4rem", fontSize: "30px"}}>
                    {[
                        {
                            href: "https://www.linkedin.com/in/frankmathewsajan",
                            icon: "fa-brands fa-linkedin",
                            color: '#0a66c2'
                        },
                        {
                            href: "https://discord.com/users/frankmathewsajan",
                            icon: "fa-brands fa-discord",
                            color: '#5865f2'
                        },
                        {href: "mailto:frankmathewsajan@gmail.com", icon: "fa-solid fa-envelope", color: '#ea4335'},
                        {href: "https://github.com/frankmathewsajan", icon: "fa-brands fa-github", color: '#1f2328'}
                    ].map((item, index) => (
                        <motion.a key={index}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  initial={{opacity: 0, scale: 0.5}}
                                  animate={{opacity: 1, scale: 1}}
                                  transition={{duration: 1.3 + index * 0.1, ease: "easeOut"}}
                                  whileHover={{scale: 1.2, color: item.color}}>
                            <i className={`${item.icon}`}></i>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}

function UserImage() {
    return (
        <motion.div
            initial={{opacity: 0, x: 300, y: 50, scale: 0.7, rotate: -10}}
            animate={{opacity: 1, scale: 1, rotate: 0}}
            transition={{duration: 1, ease: "circInOut"}}
            className="mb-4 image-class"
            whileHover={{scale: 1.05, transition: {duration: 0.4, ease: "easeOut"}}}
        >
            <img src={profileImage} alt="Profile" className="w-100 rounded-xl"/>
        </motion.div>

    )
}

const MainContent = ({showLeftSide, showImage, showNav}) => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="w-full h-full flex flex-col items-center justify-center">
            {showNav && (<Navbar/>)}
            {showLeftSide && (<LeftSide/>)}
            {showImage && (<UserImage/>)}
        </motion.div>
    )
}

export default MainContent;
