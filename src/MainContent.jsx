import {motion} from "framer-motion";
import profileImage from "./assets/mathew.webp";
import {FaLinkedin, FaDiscord, FaEnvelope, FaGithub} from "react-icons/fa";
import Navbar from "./components/Navbar.jsx";

const LeftSide = () => {
    return (<div
        style={{fontFamily: "'Agrandir', sans-serif"}}
        className="absolute left-[5%] lg:left-[5%] top-[50vh] lg:top-[25%] w-[50vw] flex flex-col justify-between text-[#060606]">

        <div>
            <motion.h1
                style={{fontSize: "65px", fontWeight: "bold"}}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut", staggerChildren: 0.1}}
            >
                {Array.from("Frank Mathew").map((letter, index) => (
                    <motion.span key={index} initial={{opacity: 0}} animate={{opacity: 1}}
                                 transition={{delay: index * 0.05}}>
                        {letter}
                    </motion.span>))}
            </motion.h1>

            <motion.p style={{fontSize: "40px", fontWeight: "normal"}}
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 1, ease: "easeOut"}} className="hidden lg:block">
                Software engineer with grip on app and web development, control engineering and robotics.
            </motion.p>
        </div>

        <div>
            <motion.p className="mt-[1pc] lg:mt-[5pc] text-[1.3rem]"
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 1.2, ease: "easeOut"}}>@frankmathewsajan
            </motion.p>
            <div className="flex gap-[1.4rem] text-[30px] mt-[0.5rem]">
                {[{
                    href: "https://www.linkedin.com/in/frankmathewsajan", icon: <FaLinkedin/>, color: '#0a66c2'
                }, {
                    href: "https://discord.com/users/frankmathewsajan", icon: <FaDiscord/>, color: '#5865f2'
                }, {
                    href: "mailto:frankmathewsajan@gmail.com", icon: <FaEnvelope/>, color: '#ea4335'
                }, {
                    href: "https://github.com/frankmathewsajan", icon: <FaGithub/>, color: '#1f2328'
                }].map((item, index) => (<motion.a key={index}
                                                   href={item.href}
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   initial={{opacity: 0, scale: 0.5}}
                                                   animate={{opacity: 1, scale: 1}}
                                                   transition={{duration: 1.3 + index * 0.1, ease: "easeOut"}}
                                                   whileHover={{scale: 1.2, color: item.color}}>
                    {item.icon}
                </motion.a>))}
            </div>
        </div>
    </div>);
}

function UserImage() {
    return (<motion.div
            initial={{opacity: 0, scale: 0.7, rotate: -10}}
            animate={{opacity: 1, scale: 1, rotate: 0}}
            transition={{duration: 1, ease: "circInOut"}}
            className="mb-4 absolute left-[12vw] top-[16%] lg:left-auto lg:right-[8%]"
            whileHover={{scale: 1.05, transition: {duration: 0.4, ease: "easeOut"}}}
        >
            <img
                src={profileImage}
                alt="Profile"
                className="w-65 rounded-full lg:rounded-lg lg:w-100"
            />
        </motion.div>

    );
}


const MainContent = ({showLeftSide, showImage, showNav}) => {
    return (<motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="flex flex-col items-center">

        {showNav && (<Navbar/>)}

        <motion.div>
            {showLeftSide && (<LeftSide/>)}
            {showImage && (<UserImage/>)}
        </motion.div>

    </motion.div>)
}

export default MainContent;
